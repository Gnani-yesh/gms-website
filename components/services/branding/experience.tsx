"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const PRINCIPLES = [
  { n: "01", title: "Restraint over spectacle", body: "The most premium brands look the most quiet. We design less, more intentionally." },
  { n: "02", title: "Editorial, not decorative", body: "Words and images carrying meaning together — never typography for its own sake." },
  { n: "03", title: "Built to be operated", body: "Every brand we ship comes with the working files, governance, and system your team can run." },
];

export function BrandingExperience() {
  return (
    <section className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="bottom-right" size={760} />

      <div className="container relative">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">05</span>
            <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
            <span className="eyebrow">The standards</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.05 }}
            className="mt-7 font-display text-display-md font-medium text-balance md:max-w-[1000px]"
          >
            Brands that look <span className="italic font-light text-fog">expensive</span>{" "}
            because they were built <span className="italic font-light text-fog">deliberately</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.12 }}
            className="mt-8 max-w-[640px] text-pretty text-[16px] leading-[1.65] text-fog md:text-[17.5px]"
          >
            Premium isn&apos;t a finish. It&apos;s the cumulative result of a
            thousand decisions held to a higher standard than necessary —
            typography that breathes, palettes that age, photography that
            doesn&apos;t need a caption to land.
          </motion.p>
        </div>

        {/* Principles */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              className="lift relative bg-ink-900/80 p-9 md:p-12"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                {p.n}
              </span>
              <h3 className="mt-12 font-display text-[24px] font-medium leading-tight tracking-tight-display md:mt-14 md:text-[28px]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[280px] text-[14px] leading-[1.65] text-fog-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
