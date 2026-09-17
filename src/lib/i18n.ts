import { useSyncExternalStore } from "react";
import en from "../locales/en.json";

type MessageLeaf = { text: string };
type MessageNode = MessageLeaf | { [key: string]: MessageNode };

export type LocaleId = "en" | "es" | "ja" | "ko" | "de";

export const locales: {
  id: LocaleId;
  label: string;
  flagSrc: string;
  flagAlt: string;
}[] = [
  { id: "en", label: "English", flagSrc: "/country-flags/English.png", flagAlt: "English flag" },
  { id: "es", label: "Español", flagSrc: "/country-flags/Spanish.png", flagAlt: "Español flag" },
  { id: "ja", label: "日本語", flagSrc: "/country-flags/Japanese.png", flagAlt: "日本語 flag" },
  { id: "ko", label: "한국어", flagSrc: "/country-flags/Korean.png", flagAlt: "한국어 flag" },
  { id: "de", label: "Deutsch", flagSrc: "/country-flags/German.png", flagAlt: "Deutsch flag" },
];

let locale: LocaleId = "en";
const localeListeners = new Set<() => void>();

function emitLocale() {
  localeListeners.forEach((listener) => listener());
}

export function getLocale() {
  return locale;
}

export function setLocale(next: LocaleId) {
  if (locale === next) return;
  locale = next;
  emitLocale();
}

export function useLocale() {
  return useSyncExternalStore(
    (listener) => {
      localeListeners.add(listener);
      return () => localeListeners.delete(listener);
    },
    getLocale,
    getLocale,
  );
}

const messages = en as unknown as MessageNode;

function readLeaf(node: MessageNode | undefined): string | undefined {
  if (!node || typeof node !== "object") return undefined;
  if ("text" in node && typeof node.text === "string") return node.text;
  return undefined;
}

function lookup(key: string): string | undefined {
  const parts = key.split(".");
  let node: MessageNode | undefined = messages;

  for (const part of parts) {
    if (!node || typeof node !== "object" || "text" in node) return undefined;
    node = node[part];
  }

  return readLeaf(node);
}

export function t(
  key: string,
  vars?: Record<string, string | number>,
): string {
  const text = lookup(key) ?? key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, name: string) =>
    vars[name] == null ? `{${name}}` : String(vars[name]),
  );
}
