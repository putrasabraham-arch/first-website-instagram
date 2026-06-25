"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact, personalInfo } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

const inputStyle: React.CSSProperties = {
  backgroundColor: "var(--clr-glass-input)",
  borderColor: "var(--clr-glass-input-border)",
  color: "var(--clr-text)",
};

const placeholderStyle = "placeholder:text-[var(--clr-text-dim)]";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) return;
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-purple-light text-xs font-medium tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4" style={{ color: "var(--clr-text)" }}>
            {contact.headline}
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "var(--clr-text-muted)" }}>
            {contact.subtext}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            <GlassCard hover={false} className="p-5">
              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--clr-text)" }}>
                Quick Contact
              </h3>
              <div className="space-y-2.5">
                <AnimatedButton
                  href={personalInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full text-xs"
                  ariaLabel="Contact via WhatsApp"
                >
                  WhatsApp
                </AnimatedButton>
                <AnimatedButton
                  href={personalInfo.social.email}
                  variant="secondary"
                  className="w-full text-xs"
                  ariaLabel="Send email"
                >
                  Email
                </AnimatedButton>
                <AnimatedButton
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full text-xs"
                  ariaLabel="Visit LinkedIn"
                >
                  LinkedIn
                </AnimatedButton>
                <AnimatedButton
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full text-xs"
                  ariaLabel="Visit GitHub"
                >
                  GitHub
                </AnimatedButton>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-lg font-semibold mb-2" style={{ color: "var(--clr-text)" }}>
                    Message sent!
                  </p>
                  <p className="text-sm" style={{ color: "var(--clr-text-muted)" }}>
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs mb-1.5 font-medium" style={{ color: "var(--clr-text-muted)" }}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:border-purple/50 focus:ring-1 focus:ring-purple/20 transition-all duration-300 ${placeholderStyle}`}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs mb-1.5 font-medium" style={{ color: "var(--clr-text-muted)" }}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:border-purple/50 focus:ring-1 focus:ring-purple/20 transition-all duration-300 ${placeholderStyle}`}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs mb-1.5 font-medium" style={{ color: "var(--clr-text-muted)" }}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or question..."
                      className={`w-full px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:border-purple/50 focus:ring-1 focus:ring-purple/20 transition-all duration-300 resize-none ${placeholderStyle}`}
                      style={inputStyle}
                    />
                  </div>
                  <AnimatedButton type="submit" variant="primary" className="w-full">
                    Send Message
                  </AnimatedButton>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-xs" style={{ color: "var(--clr-text-dim)" }}>
            Built with Code
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
