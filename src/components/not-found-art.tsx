"use client";

import { motion } from "motion/react";

export function NotFoundArt() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative font-mono leading-none"
    >
      <motion.span
        className="text-foreground block text-display font-bold tracking-tighter"
        animate={{ y: [0, -4, 0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        404
      </motion.span>
      <span
        className="text-success/40 absolute inset-0 -translate-x-1 translate-y-1 text-display font-bold tracking-tighter mix-blend-screen motion-reduce:hidden"
        style={{ filter: "blur(1px)" }}
      >
        404
      </span>
    </motion.div>
  );
}
