"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudySystems({ study }: { study: CaseStudy }) {
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
                04
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <h2 className="mt-6 font-display text-[32px] font-medium leading-[1.05] tracking-tight-display md:text-[40px]">
              Systems built
            </h2>
            <p className="mt-6 max-w-[260px] text-[13.5px] leading-[1.65] text-fog-muted">
              What we built and handed over for the team to run on their own.
            </p>
          </motion.div>

          <div className="md:col-span-9">
            <ul className="divide-y divide-white/[0.05] border-t border-white/[0.05]">
              {study.systems.items.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.05 }}
                  className="grid grid-cols-1 items-baseline gap-4 py-7 md:grid-cols-12 md:gap-8"
                >
                  <div className="flex items-baseline gap-4 md:col-span-5">
                    <span className="font-mono text-[10.5px] tracking-[0.2em] text-fog-muted">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[19px] font-medium tracking-tight-display text-white md:text-[22px]">
                      {s.name}
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.65] text-fog md:col-span-7">
                    {s.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
