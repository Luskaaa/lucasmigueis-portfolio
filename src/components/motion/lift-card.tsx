"use client";

import { m, type HTMLMotionProps } from "motion/react";

export function LiftCard(props: HTMLMotionProps<"div">) {
  return (
    <m.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    />
  );
}
