"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import WorkflowBackground from "@/components/ui/WorkflowBackground";

interface IntroScreenProps {
  onEnter: (name: string) => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioUserName");
    if (saved) {
      setName(saved);
    }
  }, []);

  const handleEnter = () => {
    const userName = name.trim() || "Guest";
    localStorage.setItem("portfolioUserName", userName);
    setExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onEnter(userName);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleEnter();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--clr-deep)" }}
        >
          <WorkflowBackground variant="intro" />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, var(--clr-deep) 0%, transparent 50%, var(--clr-deep) 100%)`,
              opacity: 0.8,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 max-w-lg w-full mx-auto px-6 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-purple-light text-xs font-medium tracking-[0.2em] uppercase mb-4"
            >
              {personalInfo.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{ color: "var(--clr-text)" }}
            >
              {personalInfo.greeting}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-base sm:text-lg leading-relaxed mb-2"
              style={{ color: "var(--clr-text-muted)" }}
            >
              {personalInfo.tagline}.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--clr-text-dim)" }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="What should I call you?"
                  maxLength={30}
                  className="w-full px-4 py-3 rounded-xl text-sm text-center focus:outline-none focus:border-purple/50 focus:ring-1 focus:ring-purple/20 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--clr-glass-input)",
                    borderColor: "var(--clr-glass-input-border)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    color: "var(--clr-text)",
                  }}
                  aria-label="Your name"
                />
              </div>

              <motion.button
                onClick={handleEnter}
                disabled={!name.trim()}
                whileHover={name.trim() ? { scale: 1.02 } : undefined}
                whileTap={name.trim() ? { scale: 0.98 } : undefined}
                className={`w-full px-6 py-3 rounded-xl text-sm font-semibold shadow-lg transition-all duration-300 ${
                  name.trim()
                    ? "bg-gradient-to-r from-purple to-purple-light text-white shadow-purple/25 hover:shadow-purple/40 cursor-pointer"
                    : "bg-white/[0.05] text-text-dim cursor-not-allowed"
                }`}
              >
                Let&apos;s Go
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: exiting ? 0 : [0, 0.3, 0],
              scale: exiting ? 1.5 : 1,
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 1.2, ease: "easeInOut" },
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
