"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { SectionAura } from "./section-aura";

const PILLARS = [
  {
    key: "Websites",
    desc: "Cinematic, high-conversion brand sites engineered for speed, taste and longevity.",
  },
  {
    key: "Platforms",
    desc: "Custom web applications, internal tools and product surfaces built end-to-end.",
  },
  {
    key: "Systems",
    desc: "Operational infrastructure that compounds — content, CRM, automation, analytics.",
  },
  {
    key: "Growth",
    desc: "Performance and brand programs that move the metrics modern boards care about.",
  },
];

export function Positioning() {
  return (
    <section className="relative py-40 md:py-56">
      <SectionAura tone="cool" position="top-left" size={760} />
      <div className="container relative">
        <SectionHeading
          index="01"
          eyebrow="Positioning"
          title={
            <>
              We build the digital
              <br />
              <span className="text-fog">infrastructure modern</span>{" "}
              <span className="italic font-light text-fog">businesses</span> run on.
            </>
          }
          description={
            <>
              GMS partners with leadership teams to design, engineer and operate
              the websites, platforms and growth systems behind durable brands —
              from launch through scale.
            </>
          }
        />

        <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="group lift relative bg-ink-900/80 p-9 pb-10 transition-colors duration-500 hover:bg-ink-800/80 md:p-10 md:pb-12"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
                  0{i + 1}
                </span>
                <span className="h-1 w-1 rounded-full bg-accent/60 transition-all duration-500 group-hover:bg-accent" />
              </div>
              <h3 className="mt-16 font-display text-[30px] font-medium tracking-tight-display md:mt-20 md:text-[34px]">
                {p.key}
              </h3>
              <p className="mt-4 max-w-[260px] text-[13.5px] leading-[1.6] text-fog-muted">
                {p.desc}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
