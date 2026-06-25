"use client";

import { useState, useEffect } from "react";
import IntroScreen from "@/components/IntroScreen";
import MainPortfolio from "@/components/MainPortfolio";

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolioUserName");
    if (saved) {
      setUserName(saved);
    }
    const savedTheme = localStorage.getItem("portfolioTheme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolioTheme", theme);
  }, [theme]);

  const handleEnter = (name: string) => {
    setUserName(name);
  };

  const handleResetName = () => {
    localStorage.removeItem("portfolioUserName");
    setUserName(null);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: "var(--clr-deep)" }}>
        <div className="w-6 h-6 rounded-full border-2 border-purple/30 border-t-purple animate-spin" />
      </div>
    );
  }

  if (!userName) {
    return <IntroScreen onEnter={handleEnter} />;
  }

  return <MainPortfolio userName={userName} onResetName={handleResetName} theme={theme} onToggleTheme={toggleTheme} />;
}
