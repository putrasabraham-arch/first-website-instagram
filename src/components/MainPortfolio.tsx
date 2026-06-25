"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import WorkflowBackground from "@/components/ui/WorkflowBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";
import Ability from "@/components/sections/Ability";
import Hobby from "@/components/sections/Hobby";
import Contact from "@/components/sections/Contact";

interface MainPortfolioProps {
  userName: string;
  onResetName: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function MainPortfolio({ userName, onResetName, theme, onToggleTheme }: MainPortfolioProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative"
    >
      <WorkflowBackground variant="main" />
      <Navbar onResetName={onResetName} theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero userName={userName} />
        <About />
        <Experience />
        <Expertise />
        <Ability />
        <Hobby />
        <Contact />
      </main>
    </motion.div>
  );
}
