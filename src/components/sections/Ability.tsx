"use client";

import { motion } from "framer-motion";
import { abilities } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const levelColors: Record<string, string> = {
  Strong: "border-l-emerald bg-emerald/5",
  Intermediate: "border-l-cyan bg-cyan/5",
  Familiar: "border-l-purple bg-purple/5",
};

const dotColors: Record<string, string> = {
  Strong: "bg-emerald",
  Intermediate: "bg-cyan",
  Familiar: "bg-purple",
};

const dotCount: Record<string, number> = {
  Strong: 3,
  Intermediate: 2,
  Familiar: 1,
};

export default function Ability() {
  return (
    <AnimatedSection id="ability" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-purple-light text-xs font-medium tracking-widest uppercase">
            Ability
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Skills & Proficiency
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {abilities.map((group, gi) => (
            <motion.div
              key={group.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
            >
              <GlassCard hover={false}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-semibold text-text">{group.level}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < (dotCount[group.level] || 0)
                            ? dotColors[group.level]
                            : "bg-[var(--clr-glass-input-border)]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-text-muted flex items-center gap-3"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[group.level]} shrink-0`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
