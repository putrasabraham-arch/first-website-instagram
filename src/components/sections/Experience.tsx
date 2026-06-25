"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-purple-light text-xs font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="relative pl-6 border-l-2 border-purple/30">
                <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-purple shadow-lg shadow-purple/30" />
                <div className="mb-2">
                  <span className="text-xs text-text-muted font-mono">
                    {experience.main.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text">
                  {experience.main.title}
                </h3>
                <p className="text-purple-light text-sm font-medium mb-4">
                  {experience.main.company}
                </p>
                <ul className="space-y-3">
                  {experience.main.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                      className="text-sm text-text-muted leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-cyan/50" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            {experience.cards.map((card, i) => (
              <GlassCard key={i}>
                <h4 className="text-base font-semibold text-text mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  {card.description}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
