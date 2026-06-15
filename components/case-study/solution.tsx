"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudySolution({ study }: { study: CaseStudy }) {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="warm" position="top-left" size={680} />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, ease }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                03
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <h2 className="mt-6 font-display text-[32px] font-medium leading-[1.05] tracking-tight-display md:text-[40px]">
              Solution
            </h2>
          </motion.div>

          <div className="md:col-span-9">
            {study.solution.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, ease, delay: 0.1 + i * 0.1 }}
                className="max-w-[720px] text-[16px] leading-[1.7] text-fog md:text-[17px] [&+p]:mt-6"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24 md:grid-cols-3">
          {study.solution.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              className="lift relative bg-ink-900/80 p-9 md:p-12"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-12 font-display text-[24px] font-medium leading-tight tracking-tight-display text-white md:mt-14 md:text-[28px]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[300px] text-[14px] leading-[1.65] text-fog-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What this means for you */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease }}
          className="mt-12 rounded-2xl border border-white/[0.06] bg-ink-900/60 p-9 md:mt-16 md:p-12"
        >
          <div className="eyebrow">What this means for you</div>
          <p className="mt-5 max-w-[760px] font-display text-[20px] font-medium leading-[1.4] tracking-tight-display text-balance text-white md:text-[26px]">
            {study.takeaway}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
