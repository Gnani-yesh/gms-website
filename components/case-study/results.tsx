"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyResults({ study }: { study: CaseStudy }) {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="warm" position="bottom-right" size={760} />

      <div className="container relative">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            05
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">Growth results</span>
        </div>

        {/* Primary metric */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease }}
          className="mt-8 max-w-[1100px]"
        >
          <div
            className="font-display font-medium leading-[0.92] tracking-tightest text-white"
            style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
          >
            {study.results.primary.metric}
          </div>
          <div className="mt-3 max-w-[640px] text-[15px] uppercase tracking-[0.18em] text-fog-muted md:text-[16px]">
            {study.results.primary.label}
          </div>
        </motion.div>

        {/* Secondary metrics */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24 md:grid-cols-4">
          {study.results.secondary.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease, delay: i * 0.06 }}
              className="bg-ink-900/80 p-7 md:p-9"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
                /{String(i + 1).padStart(2, "0")}
              </div>
              <div
                className="mt-10 font-display font-medium leading-[0.95] tracking-tightest text-white md:mt-12"
                style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}
              >
                {m.metric}
              </div>
              <div className="mt-3 max-w-[200px] text-[12px] leading-[1.55] text-fog-muted">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
