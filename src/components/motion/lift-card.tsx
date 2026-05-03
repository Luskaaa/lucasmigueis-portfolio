"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export function LiftCard(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    />
  );
}
