"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    label: "Build",
    body: "Websites, platforms and operational systems engineered as compounding infrastructure — designed to be lived in, not redone every year.",
  },
  {
    label: "Grow",
    body: "SEO, paid media, content and lifecycle programs operated as one connected system, not four retainers running in parallel.",
  },
  {
    label: "Brand",
    body: "Identity, creative direction, photography and editorial — the visual backbone of companies built for the long view.",
  },
];

export function StudioPhilosophy() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="cool" position="top-right" size={760} />

      <div className="container relative">
        <SectionHeading
          index="01"
          eyebrow="Philosophy"
          title={
            <>
              Build, grow, brand —
              <br />
              <span className="text-fog">as one connected practice.</span>
            </>
          }
          description="Most studios specialize in one of these and outsource the rest. We chose to operate them together because that's where the compounding actually happens."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              className="lift relative bg-ink-900/80 p-9 md:p-12"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-12 font-display text-[40px] font-medium leading-[0.95] tracking-tightest md:mt-16 md:text-[56px]">
                {p.label}
                <span className="text-accent">.</span>
              </h3>
              <p className="mt-5 max-w-[300px] text-[14px] leading-[1.65] text-fog-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
