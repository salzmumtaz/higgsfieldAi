# Capture test — 8x assignment, Salman

## Tool and model

- **Tool:** Cursor
- **Exact model:** Grok 4.6 High Fast
- **Reasoning/effort:** High
- Hook slug recorded in the logs: `cursor-grok-4.6-high-fast`
- Same model plans and executes. No model switch during the canaries.

## Capture mechanism

Cursor project hooks. They run on their own; nothing is logged by hand.

- **Config file:** `.cursor/hooks.json`
- **Capture script:** `.cursor/hooks/agent-capture.py`
- **Prompt event:** `beforeSubmitPrompt` writes the user prompt
- **Final reply:** `afterAgentResponse` stores the last assistant text for the turn; `stop` (and `sessionEnd` / the next prompt) flushes it once
- **Output directory:** `.agent-logs/` (not gitignored)
- **Not wired:** `afterAgentThought`, tool events, file reads, diffs, retries

## Session log paths

- Session 1: `.agent-logs/2026-09-16_17-14-20_8fe5f3a4-e788-4c23-b5ef-900ee788d49b.md`
- Session 2: `.agent-logs/2026-09-16_17-16-01_25baaadf-d9a4-4ddf-be83-2dd1a9be3fe6.md`

## Session 1 canary (raw)

Copied from `.agent-logs/2026-09-16_17-14-20_8fe5f3a4-e788-4c23-b5ef-900ee788d49b.md`.

````
[LOG_ENTRY type=PROMPT num=1 session=8fe5f3a4]
timestamp: 2026-09-16T17:14:20.722Z
model: cursor-grok-4.6-high-fast

CAPTURE TEST — 8x assignment, Salman


[LOG_ENTRY type=RESPONSE num=1 session=8fe5f3a4]
timestamp: 2026-09-16T17:14:40.531Z
model: cursor-grok-4.6-high-fast

**Prompt captured.** The hook fired on `beforeSubmitPrompt` and wrote:

`.agent-logs/2026-09-16_17-14-20_8fe5f3a4-e788-4c23-b5ef-900ee788d49b.md`

```
[LOG_ENTRY type=PROMPT num=1 session=8fe5f3a4]
timestamp: 2026-09-16T17:14:20.722Z
model: cursor-grok-4.6-high-fast

CAPTURE TEST — 8x assignment, Salman
```

This reply is not in the file yet. `afterAgentResponse` / `stop` write it when the turn ends, so the RESPONSE line should appear as soon as this message finishes.

**Still needed**

1. After this turn, that same file should also contain a `RESPONSE num=1` with this confirmation text. I will check it on the next message.
2. Open a **new Agent chat** in this repo and send:

`CAPTURE TEST — 8x assignment, Salman — session 2`

A hook that only works in the session that created it is not installed, so that second canary is required. Then I will write `CAPTURE-TEST.md`. No assignment work until that is done.

````

## Session 2 canary (raw)

Copied from `.agent-logs/2026-09-16_17-16-01_25baaadf-d9a4-4ddf-be83-2dd1a9be3fe6.md`.

```
[LOG_ENTRY type=PROMPT num=1 session=25baaadf]
timestamp: 2026-09-16T17:16:01.018Z
model: cursor-grok-4.6-high-fast

CAPTURE TEST — 8x assignment, Salman — session 2


[LOG_ENTRY type=RESPONSE num=1 session=25baaadf]
timestamp: 2026-09-16T17:16:24.356Z
model: cursor-grok-4.6-high-fast

**Session 2 captured.** The hook is project-installed, not bound to the chat that created it.

| Session | File | Prompt | Response |
| --- | --- | --- | --- |
| 1 `8fe5f3a4` | `.agent-logs/2026-09-16_17-14-20_8fe5f3a4-e788-4c23-b5ef-900ee788d49b.md` | pass | pass |
| 2 `25baaadf` | `.agent-logs/2026-09-16_17-16-01_25baaadf-d9a4-4ddf-be83-2dd1a9be3fe6.md` | pass | written when this turn ends |

Wrote `CAPTURE-TEST.md` with that evidence. `.agent-logs/` is not gitignored. Capture test is done.

```

## What was tried first that did not work

The first `.cursor/hooks.json` put `"loop_limit": 0` on the `stop` hook. Cursor rejected the whole file (`loop_limit` must be a positive integer), so no hooks loaded. The first canary in session 1 (`CAPTURE TEST — 8x assignment, Salman`) did not land. `loop_limit` was removed; Cursor then loaded `beforeSubmitPrompt`, `afterAgentResponse`, `stop`, and `sessionEnd`. The same canary was sent again and captured (session 1 entries above). Session 2 was a new Agent chat after that fix.

## Checks after session 2 completed

- Session 2 `RESPONSE num=1` exists in full (timestamp `2026-09-16T17:16:24.356Z`, body through “Capture test is done.”).
- `.agent-logs/` contains only `PROMPT` and `RESPONSE` entries. No thinking, tool calls, file reads, diffs, or other intermediate agent activity.
- Each canary has one `RESPONSE`, not two. `afterAgentResponse` stores the text; `stop` flushes it once and clears pending, so the two events do not duplicate the reply.
