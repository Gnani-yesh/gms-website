"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const FACTS = [
  ["Build phase", "8 — 14 weeks"],
  ["Operate phase", "Ongoing · quarterly"],
  ["Team allocated", "Gnani and Saitarun, directly"],
  ["Cadence", "Weekly working sessions"],
  ["Reporting", "Monthly + quarterly review"],
  ["Cancellation", "Any quarter, no penalty"],
];

export function ProcessEngagement() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="cool" position="bottom-right" size={680} />

      <div className="container relative">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
            02
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">Engagement model</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.05 }}
          className="mt-6 font-display text-display-md font-medium text-balance md:max-w-[1000px]"
        >
          Fixed-price first phase.
          <br />
          <span className="italic font-light text-fog">
            Quarterly operating thereafter.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.12 }}
          className="mt-8 max-w-[640px] text-pretty text-[15.5px] leading-[1.7] text-fog md:text-[16.5px]"
        >
          The build phase is scoped, fixed-price, and ships on a known
          timeline. The operate phase runs quarterly with a flat retainer —
          cancellable any quarter, no penalty. We&apos;d rather earn the next
          quarter than lock you in for a year.
        </motion.p>

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
