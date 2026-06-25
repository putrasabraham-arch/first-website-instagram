"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export default function AnimatedButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  href,
  target,
  rel,
  disabled = false,
  ariaLabel,
}: AnimatedButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 overflow-hidden";

  const secondaryStyle: React.CSSProperties = {
    borderColor: "var(--clr-border-light)",
    backgroundColor: "var(--clr-glass)",
    color: "var(--clr-text)",
  };

  const ghostStyle: React.CSSProperties = {
    color: "var(--clr-text-muted)",
  };

  const content = (
    <motion.span
      className="relative z-10 inline-flex items-center gap-2"
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variant === "primary" ? "bg-purple text-white hover:bg-purple-light shadow-lg shadow-purple/20 hover:shadow-purple/30" : variant === "ghost" ? "hover:text-[var(--clr-text)]" : ""} ${className}`}
        style={variant === "secondary" ? secondaryStyle : variant === "ghost" ? ghostStyle : undefined}
        aria-label={ariaLabel}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variant === "primary" ? "bg-purple text-white hover:bg-purple-light shadow-lg shadow-purple/20 hover:shadow-purple/30" : variant === "ghost" ? "hover:text-[var(--clr-text)]" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      style={variant === "secondary" ? secondaryStyle : variant === "ghost" ? ghostStyle : undefined}
      aria-label={ariaLabel}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {content}
    </motion.button>
  );
}
