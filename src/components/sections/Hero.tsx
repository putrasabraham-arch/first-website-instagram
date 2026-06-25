"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HeroProps {
  userName: string;
}

export default function Hero({ userName }: HeroProps) {
  return (
    <AnimatedSection id="hero" className="min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-purple-light text-sm font-medium tracking-widest uppercase mb-4"
          >
            {personalInfo.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight mb-6"
          >
            Welcome,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-purple-light to-cyan">
              {userName}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-text-muted font-normal mt-2">
              Here&apos;s how I can help your business work better.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mb-8"
          >
            {personalInfo.tagline}. {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg bg-purple text-white text-sm font-medium hover:bg-purple-light transition-all duration-300 shadow-lg shadow-purple/20 hover:shadow-purple/30"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/10 text-text text-sm font-medium hover:border-purple/40 hover:text-purple-light transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
