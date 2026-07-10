"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const PRINCIPLES = [
  {
    n: "01",
    title: "Connected, not bundled",
    body: "Brand, surfaces and growth share one model and one source of truth — so every dollar of work strengthens the others.",
  },
  {
    n: "02",
    title: "Built to be operated",
    body: "Every engagement leaves behind a system the team can run, extend and own — never a deck or a deliverable.",
  },
  {
    n: "03",
    title: "Long arcs, slow improvements",
    body: "We build for the long run, not just launch day. What matters is whether the work still holds up two years later.",
  },
];

export function ServicesPrinciples() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="warm" position="bottom-left" size={760} />

      <div className="container relative">
        <SectionHeading
          index="02"
          eyebrow="Operating principles"
          title={
            <>
              How we work
              <br />
              <span className="text-fog">across all three.</span>
            </>
          }
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="lift relative bg-ink-900/80 p-9 md:p-12"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                {p.n}
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
      </div>
    </section>
  );
}
