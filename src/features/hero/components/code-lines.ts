export type TokenKind =
  | "tag"
  | "attr"
  | "string"
  | "tw-class"
  | "tw-numeric"
  | "tw-arbitrary"
  | "text"
  | "plain"
  | "comment";

export type Token = { kind: TokenKind; value: string };
export type Line = { tokens: Token[] };

const T = {
  tag: (v: string): Token => ({ kind: "tag", value: v }),
  attr: (v: string): Token => ({ kind: "attr", value: v }),
  str: (v: string): Token => ({ kind: "string", value: v }),
  cls: (v: string): Token => ({ kind: "tw-class", value: v }),
  num: (v: string): Token => ({ kind: "tw-numeric", value: v }),
  arb: (v: string): Token => ({ kind: "tw-arbitrary", value: v }),
  text: (v: string): Token => ({ kind: "text", value: v }),
  plain: (v: string): Token => ({ kind: "plain", value: v }),
  comment: (v: string): Token => ({ kind: "comment", value: v }),
};

const sp: Token = T.plain(" ");

export const CODE_LINES: ReadonlyArray<Line> = [
  {
    tokens: [
      T.plain("<"),
      T.tag("section"),
      sp,
      T.attr("className"),
      T.plain("="),
      T.str('"'),
      T.cls("grid"),
      sp,
      T.arb("lg:grid-cols-[1.15fr_1fr]"),
      sp,
      T.num("gap-12"),
      T.str('"'),
      T.plain(">"),
    ],
  },
  {
    tokens: [
      T.plain("  <"),
      T.tag("div"),
      sp,
      T.attr("className"),
      T.plain("="),
      T.str('"'),
      T.cls("flex"),
      sp,
      T.cls("flex-col"),
      sp,
      T.cls("items-start"),
      sp,
      T.num("gap-6"),
      T.str('"'),
      T.plain(">"),
    ],
  },
  {
    tokens: [
      T.plain("    <"),
      T.tag("span"),
      sp,
      T.attr("className"),
      T.plain("="),
      T.str('"'),
      T.cls("inline-flex"),
      sp,
      T.cls("items-center"),
      sp,
      T.num("gap-2"),
      sp,
      T.cls("rounded-full"),
      sp,
      T.cls("border"),
      T.str('"'),
      T.plain(">"),
    ],
  },
  {
    tokens: [
      T.plain("      <"),
      T.tag("span"),
      sp,
      T.attr("className"),
      T.plain("="),
      T.str('"'),
      T.cls("bg-success"),
      sp,
      T.num("size-2"),
      sp,
      T.cls("rounded-full"),
      sp,
      T.cls("animate-pulse"),
      T.str('"'),
      T.plain(" />"),
    ],
  },
  { tokens: [T.plain("      "), T.text("Available for new opportunities")] },
  { tokens: [T.plain("    </"), T.tag("span"), T.plain(">")] },
  {
    tokens: [
      T.plain("    <"),
      T.tag("h1"),
      sp,
      T.attr("className"),
      T.plain("="),
      T.str('"'),
      T.cls("text-hero-name"),
      sp,
      T.cls("font-bold"),
      sp,
      T.cls("leading-none"),
      T.str('"'),
      T.plain(">"),
    ],
  },
  { tokens: [T.plain("      "), T.text("Lucas Migueis")] },
  { tokens: [T.plain("    </"), T.tag("h1"), T.plain(">")] },
  {
    tokens: [
      T.plain("    <"),
      T.tag("p"),
      sp,
      T.attr("className"),
      T.plain("="),
      T.str('"'),
      T.cls("text-muted-foreground"),
      sp,
      T.num("max-w-xl"),
      sp,
      T.cls("text-pretty"),
      T.str('"'),
      T.plain(">"),
    ],
  },
  { tokens: [T.plain("      "), T.text("I build polished, accessible web.")] },
  { tokens: [T.plain("    </"), T.tag("p"), T.plain(">")] },
  {
    tokens: [
      T.plain("    <"),
      T.tag("a"),
      sp,
      T.attr("className"),
      T.plain("="),
      T.str('"'),
      T.cls("bg-primary"),
      sp,
      T.cls("text-primary-foreground"),
      sp,
      T.cls("rounded-md"),
      sp,
      T.num("px-5"),
      T.str('"'),
      T.plain(">"),
    ],
  },
  { tokens: [T.plain("      "), T.text("See my work")] },
  { tokens: [T.plain("    </"), T.tag("a"), T.plain(">")] },
  { tokens: [T.plain("  </"), T.tag("div"), T.plain(">")] },
  { tokens: [T.plain("</"), T.tag("section"), T.plain(">")] },
];
