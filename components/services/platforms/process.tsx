"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    duration: "Week 1 — 2",
    body: "We embed with your operations team, map the actual workflows, and surface the constraints that any tool will have to live with.",
  },
  {
    n: "02",
    title: "Architecture",
    duration: "Week 2 — 4",
    body: "Data model, integrations, identity, hosting topology. The decisions that determine whether the platform compounds or rots.",
  },
  {
    n: "03",
    title: "Design",
    duration: "Week 4 — 7",
    body: "Operational interfaces designed for high-frequency use — calm at rest, clear under pressure.",
  },
  {
    n: "04",
    title: "Engineering",
    duration: "Week 6 — 14",
    body: "Production-grade builds with observability, automated testing, and a deployment surface your team controls.",
  },
  {
    n: "05",
    title: "Launch & operate",
    duration: "Week 14 +",
    body: "Phased rollout, training, runbooks, and an ongoing operating relationship for the systems we ship.",
  },
];

export function PlatformsProcess() {
  return (
    <section id="process" className="relative py-40 md:py-56">
      <SectionAura tone="magenta" position="top-right" size={680} />
      <div className="container relative">
        <SectionHeading
          index="04"
          eyebrow="Process"
          title={
            <>
              From workflow audit
              <br />
              <span className="text-fog">to live operating system.</span>
            </>
          }
          description="Every platform engagement runs on the same operating model — designed to ship in phases, not in a single launch event."
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
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
              </motion.li>
            ))}
          </ol>

          <div className="mt-12 flex items-center gap-3 border-t border-white/[0.05] pt-8 font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>Most platforms ship in phases · MVP in 8 — 14 weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
