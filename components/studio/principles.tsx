"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const PRINCIPLES = [
  {
    n: "01",
    title: "Restraint over spectacle",
    body: "The most premium work looks the most quiet. We design less, more intentionally — the absence of noise is the product.",
  },
  {
    n: "02",
    title: "Ship infrastructure, not deliverables",
    body: "We don't deliver assets and walk away. Every engagement leaves behind a system the team can run, extend and own.",
  },
  {
    n: "03",
    title: "A small team you work with directly",
    body: "It's just the two of us, so you talk to the people doing the actual work — not an account manager passing on messages.",
  },
  {
    n: "04",
    title: "Transparency over pitch theater",
    body: "We share the work in progress, the trade-offs, the numbers. No status decks designed to obscure where things actually are.",
  },
  {
    n: "05",
    title: "Long arcs, slow improvements",
    body: "We measure success in years, not launch posts. The standard is whether the work still looks right two years later.",
  },
  {
    n: "06",
    title: "Build with a small team",
    body: "Just the two of us, working closely. No layered account teams between you and the people doing the work.",
  },
];

export function StudioPrinciples() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="warm" position="bottom-left" size={760} />
      <div className="container relative">
        <SectionHeading
          index="02"
          eyebrow="Operating principles"
          title={
            <>
              The standards
              <br />
              <span className="text-fog">we hold ourselves to.</span>
            </>
          }
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.07 }}
              className="group relative bg-ink-900/80 p-9 transition-colors duration-500 hover:bg-ink-800/70 md:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                  {p.n}
                </span>
                <span className="h-1 w-1 rounded-full bg-accent/60 transition-all duration-500 group-hover:bg-accent" />
              </div>
              <h3 className="mt-10 max-w-[480px] font-display text-[24px] font-medium leading-[1.15] tracking-tight-display text-white md:mt-12 md:text-[28px]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[480px] text-[14px] leading-[1.7] text-fog-muted">
                {p.body}
              </p>
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
