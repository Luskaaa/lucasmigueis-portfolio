"use client";

import { Fragment, type ReactNode } from "react";

export function ClassTip({
  classes,
  children,
  block = false,
}: {
  classes: string;
  children: ReactNode;
  block?: boolean;
}) {
  const tooltip = (
    <span
      aria-hidden
      className="border-editor-border bg-editor-bg pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-max max-w-2xl whitespace-normal rounded-md border p-2 font-mono text-xs leading-relaxed opacity-0 shadow-lg transition-opacity motion-reduce:transition-none lg:block lg:group-hover/tip:opacity-100"
    >
      <span className="text-syntax-attr">class</span>
      <span className="text-muted-foreground">=</span>
      <span className="text-syntax-string">&quot;</span>
      <ColorizedClasses classes={classes} />
      <span className="text-syntax-string">&quot;</span>
    </span>
  );

  const outlineClasses =
    "rounded-sm outline-offset-4 transition-[outline] motion-reduce:transition-none lg:group-hover/tip:outline-2 lg:group-hover/tip:outline-dashed lg:group-hover/tip:outline-ring";

  if (block) {
    return (
      <div className="group/tip relative w-fit max-w-full">
        <div className={outlineClasses}>{children}</div>
        {tooltip}
      </div>
    );
  }

  return (
    <span className="group/tip relative inline-block">
      <span className={outlineClasses}>{children}</span>
      {tooltip}
    </span>
  );
}

function ColorizedClasses({ classes }: { classes: string }) {
  const tokens = classes.split(/\s+/).filter(Boolean);
  return (
    <>
      {tokens.map((cls, i) => (
        <Fragment key={i}>
          <span className={classifyToken(cls)}>{cls}</span>
          {i < tokens.length - 1 ? (
            <span className="text-muted-foreground"> </span>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}

function classifyToken(cls: string): string {
  if (/\[.+\]/.test(cls)) return "text-syntax-arbitrary";
  if (/-\d/.test(cls)) return "text-syntax-numeric";
  return "text-syntax-class";
}
