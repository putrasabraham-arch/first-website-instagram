"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-xl backdrop-blur-sm p-6 transition-colors duration-300 ${hover ? "hover:border-purple/30 hover:bg-purple-glow" : ""} ${className}`}
      style={{
        backgroundColor: "var(--clr-glass)",
        borderColor: "var(--clr-border)",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      {children}
    </motion.div>
  );
}
