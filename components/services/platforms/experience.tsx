"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  { label: "Uptime", metric: "99.99%", detail: "Monitored, autoscaled, observable end-to-end." },
  { label: "Response", metric: "p95 · 180ms", detail: "Edge-rendered with regional caches." },
  { label: "Coverage", metric: "100%", detail: "Automated tests on critical paths." },
];

export function PlatformsExperience() {
  return (
    <section className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="bottom-left" size={760} />

      <div className="container relative">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
              05
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
            <span className="eyebrow">The experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.05 }}
            className="mt-7 font-display text-display-md font-medium text-balance md:max-w-[1000px]"
          >
            Platforms should feel{" "}
            <span className="italic font-light text-fog">calm at rest</span> and{" "}
            <span className="italic font-light text-fog">clear under pressure</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.12 }}
            className="mt-8 max-w-[640px] text-pretty text-[16px] leading-[1.65] text-fog md:text-[17.5px]"
          >
            We engineer for the day a million records go through the system,
            not just the marketing demo. Observability, runbooks, and graceful
            degradation are baked into the foundation — not tacked on after the
            launch party.
          </motion.p>
        </div>

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
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                  {p.label}
                </span>
              </div>
              <div
                className="mt-12 font-display font-medium leading-[0.92] tracking-tightest text-white md:mt-16"
                style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
              >
                {p.metric}
              </div>
              <p className="mt-5 max-w-[280px] text-[13.5px] leading-[1.6] text-fog-muted">
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          className="mx-auto mt-20 max-w-[820px] text-center md:mt-24"
        >
          <div className="hairline mx-auto" />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            <span>Multi-region</span>
            <span className="h-1 w-1 rounded-full bg-fog-muted/60" />
            <span>SOC2-aware</span>
            <span className="h-1 w-1 rounded-full bg-fog-muted/60" />
            <span>Observable</span>
            <span className="h-1 w-1 rounded-full bg-fog-muted/60" />
            <span>Auto-scaled</span>
            <span className="h-1 w-1 rounded-full bg-fog-muted/60" />
            <span>Runbooks · day one</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
