"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyOverview({ study }: { study: CaseStudy }) {
  return (
    <section className="relative py-32 md:py-44">
      <div className="container">
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
                01
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <h2 className="mt-6 font-display text-[32px] font-medium leading-[1.05] tracking-tight-display md:text-[40px]">
              Overview
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, ease, delay: 0.1 }}
            className="md:col-span-9"
          >
            <p className="max-w-[720px] font-display text-[20px] font-medium leading-[1.5] tracking-tight-display text-balance text-white md:text-[26px] lg:text-[30px]">
              {study.overview.summary}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
