"use client";

import { motion } from "framer-motion";
import { hobby } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const iconMap: Record<string, string> = {
  compass: "\u25C7",
  code: "\u2328",
  content: "\u270E",
  book: "\u25B3",
  sports: "\u2665",
};

export default function Hobby() {
  return (
    <AnimatedSection id="hobby" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-purple-light text-xs font-medium tracking-widest uppercase">
            Personal
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              {hobby.title}
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {hobby.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-3"
          >
            {hobby.items.map((item, i) => (
              <GlassCard key={item.title}>
                <div className="flex items-start gap-4">
                  <span
                    className="text-lg text-purple-light mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    {iconMap[item.icon] || "\u25CF"}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-text mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
