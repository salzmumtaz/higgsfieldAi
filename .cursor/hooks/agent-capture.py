#!/usr/bin/env python3
"""Capture user prompts and final agent responses into .agent-logs/.

Wired from .cursor/hooks.json to beforeSubmitPrompt, afterAgentResponse,
stop, and sessionEnd. Intermediate tool calls and thinking are ignored.
"""

from __future__ import annotations

import fcntl
import json
import os
import sys
import traceback
from datetime import datetime, timezone
from pathlib import Path

AUTHOR = "salzmumtaz"
TOOL = "cursor"
PROJECT = "higgsfieldAi"


def utc_now():
    now = datetime.now(timezone.utc)
    return now.strftime("%Y-%m-%dT%H:%M:%S.") + "%03dZ" % int(now.microsecond / 1000)


def utc_filename_stamp(iso_ts):
    # 2026-09-16T17:06:00.118Z -> 2026-09-16_17-06-00
    return iso_ts[:19].replace("T", "_").replace(":", "-")


def repo_root():
    env = os.environ.get("CURSOR_PROJECT_DIR")
    if env:
        return Path(env)
    return Path(__file__).resolve().parent.parent.parent


def paths():
    root = repo_root()
    logs = Path(os.environ.get("AGENT_LOGS_DIR", str(root / ".agent-logs")))
    state = Path(os.environ.get("AGENT_CAPTURE_STATE", str(root / ".cursor" / "hooks" / "state")))
    logs.mkdir(parents=True, exist_ok=True)
    state.mkdir(parents=True, exist_ok=True)
    return root, logs, state


def emit(payload):
    sys.stdout.write(json.dumps(payload, ensure_ascii=False))
    sys.stdout.flush()


def debug(state_dir, event, data):
    try:
        line = {
            "ts": utc_now(),
            "event": event,
            "conversation_id": data.get("conversation_id") or data.get("session_id"),
            "generation_id": data.get("generation_id"),
            "model": data.get("model") or data.get("model_id"),
            "prompt_len": len(data.get("prompt") or ""),
            "text_len": len(data.get("text") or ""),
            "status": data.get("status"),
        }
        with (state_dir / "debug.jsonl").open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(line, ensure_ascii=False) + "\n")
        (state_dir / "last-event.json").write_text(
            json.dumps(data, ensure_ascii=False, indent=2)[:200000],
            encoding="utf-8",
        )
    except Exception:
        pass


def load_registry(state_dir):
    path = state_dir / "registry.json"
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {}


def save_registry(state_dir, registry):
    path = state_dir / "registry.json"
    tmp = state_dir / "registry.json.tmp"
    tmp.write_text(json.dumps(registry, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    tmp.replace(path)


def model_name(data):
    return (data.get("model") or data.get("model_id") or "cursor-grok-4.6").strip()


def session_key(data):
    return (data.get("conversation_id") or data.get("session_id") or "unknown-session").strip()


def short_id(session_id):
    return session_id.split("-")[0][:8] if session_id else "unknown"


def header_text(meta):
    return (
        "---\n"
        "session_id: {session_id}\n"
        "date: {date}\n"
        "author: {author}\n"
        "model: {model}\n"
        "tool: {tool}\n"
        "project: {project}\n"
        "total_exchanges: {total_exchanges}\n"
        "first_prompt_time: {first_prompt_time}\n"
        "last_prompt_time: {last_prompt_time}\n"
        "---\n"
        "\n"
        "# Session Log - {date}\n"
        "\n"
        "Session: `{short_id}` | Project: `{project}` | Author: `{author}`\n"
        "\n"
        "---\n"
    ).format(**meta)


def format_entry(kind, num, short, timestamp, model, body):
    if body is None:
        body = ""
    if body and not body.endswith("\n"):
        body = body + "\n"
    return (
        "[LOG_ENTRY type={kind} num={num} session={short}]\n"
        "timestamp: {timestamp}\n"
        "model: {model}\n"
        "\n"
        "{body}\n"
    ).format(kind=kind, num=num, short=short, timestamp=timestamp, model=model, body=body)


def rewrite_session_file(log_path, meta, new_entry=None):
    if log_path.exists():
        existing = log_path.read_text(encoding="utf-8")
        marker = "[LOG_ENTRY "
        idx = existing.find(marker)
        entries = existing[idx:] if idx != -1 else ""
    else:
        entries = ""
    if new_entry:
        entries = entries + new_entry
    log_path.parent.mkdir(parents=True, exist_ok=True)
    log_path.write_text(header_text(meta) + "\n" + entries, encoding="utf-8")


def ensure_session(registry, logs_dir, data, timestamp):
    sid = session_key(data)
    meta = registry.get(sid)
    if meta:
        return meta
    stamp = utc_filename_stamp(timestamp)
    log_name = "{stamp}_{sid}.md".format(stamp=stamp, sid=sid)
    meta = {
        "session_id": sid,
        "short_id": short_id(sid),
        "date": timestamp[:10],
        "author": AUTHOR,
        "model": model_name(data),
        "tool": TOOL,
        "project": PROJECT,
        "total_exchanges": 0,
        "first_prompt_time": timestamp,
        "last_prompt_time": timestamp,
        "log_file": log_name,
        "pending": None,
    }
    registry[sid] = meta
    rewrite_session_file(logs_dir / log_name, meta)
    return meta


def flush_pending(logs_dir, meta, timestamp=None):
    pending = meta.get("pending")
    if not pending:
        return False
    text = pending.get("response_text")
    if text is None:
        return False
    ts = timestamp or utc_now()
    entry = format_entry(
        "RESPONSE",
        pending["num"],
        meta["short_id"],
        ts,
        pending.get("model") or meta["model"],
        text,
    )
    rewrite_session_file(logs_dir / meta["log_file"], meta, entry)
    meta["pending"] = None
    return True


def handle_prompt(registry, logs_dir, data, timestamp):
    meta = ensure_session(registry, logs_dir, data, timestamp)
    flush_pending(logs_dir, meta, timestamp)
    meta["total_exchanges"] = int(meta.get("total_exchanges") or 0) + 1
    meta["last_prompt_time"] = timestamp
    meta["model"] = model_name(data)
    if not meta.get("first_prompt_time"):
        meta["first_prompt_time"] = timestamp
    num = meta["total_exchanges"]
    entry = format_entry(
        "PROMPT",
        num,
        meta["short_id"],
        timestamp,
        meta["model"],
        data.get("prompt") or "",
    )
    rewrite_session_file(logs_dir / meta["log_file"], meta, entry)
    meta["pending"] = {
        "generation_id": data.get("generation_id"),
        "num": num,
        "model": meta["model"],
        "response_text": None,
    }


def handle_response(registry, logs_dir, data, timestamp):
    sid = session_key(data)
    meta = registry.get(sid)
    pending = (meta or {}).get("pending")
    if not meta or not pending:
        # No matching prompt in this process (e.g. hook installed mid-turn).
        return
    pending["model"] = model_name(data)
    # Last assistant message for this turn wins; flushed on stop / next prompt.
    pending["response_text"] = data.get("text") if data.get("text") is not None else ""
    meta["model"] = pending["model"]


def handle_flush(registry, logs_dir, data, timestamp):
    sid = session_key(data)
    meta = registry.get(sid)
    if not meta:
        return
    flush_pending(logs_dir, meta, timestamp)


def process(data):
    _, logs_dir, state_dir = paths()
    debug(state_dir, data.get("hook_event_name") or "unknown", data)
    lock_path = state_dir / "lock"
    with lock_path.open("a+") as lock_fh:
        fcntl.flock(lock_fh.fileno(), fcntl.LOCK_EX)
        registry = load_registry(state_dir)
        timestamp = utc_now()
        event = data.get("hook_event_name") or ""
        if event == "beforeSubmitPrompt":
            handle_prompt(registry, logs_dir, data, timestamp)
        elif event == "afterAgentResponse":
            handle_response(registry, logs_dir, data, timestamp)
        elif event in ("stop", "sessionEnd"):
            handle_flush(registry, logs_dir, data, timestamp)
        save_registry(state_dir, registry)


def main():
    raw = sys.stdin.read()
    event_name = ""
    try:
        data = json.loads(raw) if raw.strip() else {}
        if not isinstance(data, dict):
            data = {}
        event_name = data.get("hook_event_name") or ""
        process(data)
    except Exception:
        try:
            _, _, state_dir = paths()
            (state_dir / "error.log").write_text(
                utc_now() + "\n" + traceback.format_exc() + "\n" + raw[:50000],
                encoding="utf-8",
            )
        except Exception:
            pass
    if event_name == "beforeSubmitPrompt":
        emit({"continue": True})
    # stop must not emit followup_message; observational events emit nothing.


if __name__ == "__main__":
    main()
