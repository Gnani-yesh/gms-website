"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const FACTS = [
  ["Founded", "2022"],
  ["Studio", "Hyderabad · IN"],
  ["Team", "8"],
  ["Partners · 2026", "9 active"],
  ["Disciplines", "Build · Grow · Brand"],
  ["Languages", "EN · HI · TE"],
  ["Engagements", "12 — 16 weeks · avg"],
  ["Working hours", "10:00 — 19:00 IST"],
];

export function StudioFacts() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="cool" position="bottom-right" size={680} />

      <div className="container relative">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
            04
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">Studio facts</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.05 }}
          className="mt-6 font-display text-display-md font-medium text-balance md:max-w-[900px]"
        >
          The boring details,
          <br />
          <span className="italic font-light text-fog">because they matter.</span>
        </motion.h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:grid-cols-2">
          {FACTS.map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: (i % 2) * 0.06 }}
              className="flex items-center justify-between bg-ink-900/80 px-7 py-6 transition-colors duration-500 hover:bg-ink-800/70 md:px-10 md:py-7"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                {label}
              </span>
              <span className="font-display text-[16px] font-medium tracking-tight-display text-white md:text-[18px]">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
