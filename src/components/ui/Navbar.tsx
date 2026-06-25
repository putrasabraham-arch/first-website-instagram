"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/portfolio";

interface NavbarProps {
  onResetName: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ onResetName, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--clr-nav)" : "transparent",
        borderColor: scrolled ? "var(--clr-nav-border)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("#hero")}
            className="text-sm font-semibold tracking-wider hover:text-purple-light transition-colors"
            style={{ color: "var(--clr-text)" }}
          >
            ABRAHAM
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-purple-light bg-purple/10"
                    : "hover:text-[var(--clr-text)]"
                }`}
                style={{ color: activeSection === item.href.slice(1) ? undefined : "var(--clr-text-muted)" }}
              >
                {item.label}
              </button>
            ))}

            <span className="w-px h-4 mx-2" style={{ backgroundColor: "var(--clr-border)" }} />

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-xs transition-all duration-300 hover:bg-[var(--clr-glass-hover)]"
              style={{ color: "var(--clr-text-muted)" }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={onResetName}
              className="p-2 rounded-lg text-xs transition-all duration-300 hover:bg-[var(--clr-glass-hover)]"
              style={{ color: "var(--clr-text-dim)" }}
              aria-label="Change name"
              title="Change name"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg transition-all duration-300"
              style={{ color: "var(--clr-text-muted)" }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-px"
                  style={{ backgroundColor: "var(--clr-text)" }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-px"
                  style={{ backgroundColor: "var(--clr-text)" }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-px"
                  style={{ backgroundColor: "var(--clr-text)" }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              backgroundColor: "var(--clr-mobile-nav)",
              borderColor: "var(--clr-nav-border)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-purple-light bg-purple/10"
                      : ""
                  }`}
                  style={{
                    color: activeSection === item.href.slice(1) ? undefined : "var(--clr-text-muted)",
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
              <hr className="my-2" style={{ borderColor: "var(--clr-border)" }} />
              <button
                onClick={onResetName}
                className="px-4 py-3 rounded-lg text-sm text-left transition-colors"
                style={{ color: "var(--clr-text-dim)" }}
              >
                Change Name
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
