import en from "../locales/en.json";

type MessageLeaf = { text: string };
type MessageNode = MessageLeaf | { [key: string]: MessageNode };

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
