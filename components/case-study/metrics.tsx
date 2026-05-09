"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyMetrics({ study }: { study: CaseStudy }) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="hairline" />

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:grid-cols-4">
          {study.closingMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.06 }}
              className="bg-ink-900/80 p-7 md:p-9"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
                {m.label}
              </div>
              <div className="mt-3 font-display text-[24px] font-medium leading-tight tracking-tight-display text-white md:text-[28px]">
                {m.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
