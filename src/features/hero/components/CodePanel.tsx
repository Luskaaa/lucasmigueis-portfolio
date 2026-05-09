"use client";

import { m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { CODE_LINES, type TokenKind } from "./code-lines";

export function CodePanel() {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? CODE_LINES.length : 0);
  const writing = shown < CODE_LINES.length;

  useEffect(() => {
    if (reduced) return;
    if (shown >= CODE_LINES.length) return;
    const id = setTimeout(() => setShown((n) => n + 1), 90);
    return () => clearTimeout(id);
  }, [shown, reduced]);

  return (
    <div
      role="presentation"
      aria-hidden
      className="bg-editor-bg border-editor-border overflow-hidden rounded-xl border shadow-2xl"
    >
      <div className="bg-editor-bg-elevated border-editor-border flex h-9 items-center justify-between border-b px-3">
        <span className="text-syntax-tag font-mono text-xs">◆ Hero.tsx</span>
        <span className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
          tailwindcss
          <m.span
            className="text-syntax-numeric"
            animate={writing ? { opacity: [1, 0.3, 1] } : { opacity: 0.3 }}
            transition={{ duration: 1.2, repeat: writing ? Infinity : 0 }}
          >
            ●
          </m.span>
        </span>
      </div>

      <div className="grid grid-cols-[2.5rem_1fr] py-3 font-mono text-xs leading-relaxed sm:text-sm">
        <div className="text-muted-foreground pr-3 text-right">
          {CODE_LINES.map((line, i) => (
            <div key={line.id} className={i < shown ? "opacity-100" : "opacity-30"}>
              {i + 1}
            </div>
          ))}
        </div>
        <div className="pr-3">
          {CODE_LINES.slice(0, shown).map((line) => (
            <m.div
              key={line.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="whitespace-pre"
            >
              {line.tokens.map((tok, j) => (
                <span key={`${line.id}-${j}`} className={tokenClass(tok.kind)}>
                  {tok.value}
                </span>
              ))}
            </m.div>
          ))}
          {writing ? (
            <m.span
              className="bg-syntax-numeric inline-block h-4 w-2 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function tokenClass(kind: TokenKind): string {
  switch (kind) {
    case "tag":
      return "text-syntax-tag";
    case "attr":
      return "text-syntax-attr";
    case "string":
      return "text-syntax-string";
    case "tw-class":
      return "text-syntax-class";
    case "tw-numeric":
      return "text-syntax-numeric";
    case "tw-arbitrary":
      return "text-syntax-arbitrary";
    case "comment":
      return "text-syntax-comment";
    default:
      return "text-foreground";
  }
}
