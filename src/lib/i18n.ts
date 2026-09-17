import { useSyncExternalStore } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

type Messages = typeof en;
type MessageLeaf = { text: string };

type MessageKeyOf<T> = {
  [K in keyof T & string]: T[K] extends MessageLeaf
    ? K
    : T[K] extends object
      ? `${K}.${MessageKeyOf<T[K]>}`
      : never;
}[keyof T & string];

export type MessageKey = MessageKeyOf<Messages>;

export type LocaleId = "en" | "es";

export type Translate = (
  key: MessageKey,
  vars?: Record<string, string | number>,
) => string;

export const locales: {
  id: LocaleId;
  label: string;
  flagSrc: string;
  flagAlt: string;
}[] = [
  { id: "en", label: "English", flagSrc: "/country-flags/English.png", flagAlt: "English flag" },
  { id: "es", label: "Español", flagSrc: "/country-flags/Spanish.png", flagAlt: "Español flag" },
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

const catalogs: Record<LocaleId, Messages> = {
  en,
  es: es as Messages,
};

function readLeaf(node: unknown): string | undefined {
  if (!node || typeof node !== "object") return undefined;
  if ("text" in node && typeof (node as MessageLeaf).text === "string") {
    return (node as MessageLeaf).text;
  }
  return undefined;
}

function lookupIn(messages: Messages, key: MessageKey): string | undefined {
  const parts = key.split(".");
  let node: unknown = messages;

  for (const part of parts) {
    if (!node || typeof node !== "object" || "text" in node) return undefined;
    node = (node as Record<string, unknown>)[part];
  }

  return readLeaf(node);
}

function lookup(key: MessageKey): string | undefined {
  const locale = getLocale();
  return lookupIn(catalogs[locale], key) ?? lookupIn(catalogs.en, key);
}

export function t(
  key: MessageKey,
  vars?: Record<string, string | number>,
): string {
  const text = lookup(key) ?? key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, name: string) =>
    vars[name] == null ? `{${name}}` : String(vars[name]),
  );
}

/** Subscribe to locale changes, then translate. Use this in components — not `t` alone. */
export function useT(): Translate {
  useLocale();
  return t;
}
