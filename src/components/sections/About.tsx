"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-purple-light text-xs font-medium tracking-widest uppercase">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Who I Am
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {about.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {about.stats.map((stat) => (
              <GlassCard key={stat.label} hover={false} className="p-4 text-center">
                <div className="text-xs text-text-muted mb-1">{stat.label}</div>
                <div className="text-sm font-semibold text-purple-light">{stat.value}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
