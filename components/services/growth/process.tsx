"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const STEPS = [
  { n: "01", title: "Audit", duration: "Week 1 — 2", body: "Funnel, channels, attribution, content surfaces, and the actual unit economics — assessed against where the business is going." },
  { n: "02", title: "Strategy", duration: "Week 2 — 3", body: "Channel mix, content thesis, paid model, measurement plan. The decisions that determine whether growth compounds." },
  { n: "03", title: "Build", duration: "Week 3 — 6", body: "Tracking, creative systems, content infrastructure, automation. The plumbing the program runs on for years." },
  { n: "04", title: "Operate", duration: "Ongoing", body: "Weekly compounding work — content, paid creative, optimization, lifecycle. With reporting your team can read." },
  { n: "05", title: "Compound", duration: "Quarter 2 +", body: "Quarterly review, model recalibration, expansion into new surfaces. Growth that keeps getting cheaper to run." },
];

export function GrowthProcess() {
  return (
    <section id="process" className="relative py-40 md:py-56">
      <SectionAura tone="magenta" position="top-right" size={680} />
      <div className="container relative">
        <SectionHeading
          index="04"
          eyebrow="Process"
          title={
            <>
              Built in weeks.
              <br />
              <span className="text-fog">Operated in years.</span>
            </>
          }
          description="Growth is the program we operate the longest with our partners — designed to compound past the initial build."
        />
        <div className="relative mt-24">
          <ol>
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="group relative grid grid-cols-1 gap-6 border-t border-white/[0.05] py-9 md:grid-cols-12 md:gap-10 md:py-12"
              >
                <div className="md:col-span-2">
                  <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.02] font-mono text-[11.5px] tracking-wider text-fog">
                    {s.n}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-[28px] font-medium tracking-tight-display md:text-[36px]">
                    {s.title}
                  </h3>
                  <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
                    {s.duration}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-[520px] text-[15px] leading-[1.65] text-fog">
                    {s.body}
                  </p>
                </div>
                <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </motion.li>
            ))}
          </ol>
          <div className="mt-12 flex items-center gap-3 border-t border-white/[0.05] pt-8 font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>Quarterly engagements · cancel any quarter</span>
          </div>
        </div>
      </div>
    </section>
  );
}
