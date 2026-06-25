"use client";

import { motion } from "framer-motion";
import { expertise } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const iconMap: Record<string, string> = {
  gear: "\u2699",
  chart: "\u2191",
  nodes: "\u221E",
  users: "\u263C",
  calculator: "\u2248",
  digital: "\u25C6",
};

export default function Expertise() {
  return (
    <AnimatedSection id="expertise" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-purple-light text-xs font-medium tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            What I Do
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-xl text-purple-light" aria-hidden="true">
                    {iconMap[area.icon] || "\u25CF"}
                  </span>
                  <h3 className="text-lg font-semibold text-text">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-muted flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan/60 shrink-0" />
                      {item}
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
