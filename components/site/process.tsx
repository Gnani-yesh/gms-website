"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { SectionAura } from "./section-aura";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    body: "We embed with leadership to understand the business model, audience and the ambition behind the work.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "Positioning, narrative, brand architecture and the technical roadmap are defined as one connected system.",
  },
  {
    n: "03",
    title: "Design",
    body: "Identity, interface and editorial systems are crafted with restraint, precision and a sense of taste.",
  },
  {
    n: "04",
    title: "Engineering",
    body: "Production-grade builds engineered for speed, accessibility, scale and long-term maintainability.",
  },
  {
    n: "05",
    title: "Growth",
    body: "Content, SEO, paid media and lifecycle programs are operated as compounding, measurable infrastructure.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-40 md:py-56">
      <SectionAura tone="magenta" position="top-right" size={760} />
      <div className="container relative">
        <SectionHeading
          index="04"
          eyebrow="Process"
          title={
            <>
              A calm, deliberate
              <br />
              <span className="text-fog">way of working.</span>
            </>
          }
          description="Every engagement runs on the same operating model — designed for clarity, momentum and quality, without the noise of traditional agencies."
        />

        <div className="relative mt-24">

          <ol>
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.06,
                }}
                className="group relative grid grid-cols-1 gap-6 border-t border-white/[0.05] py-9 md:grid-cols-12 md:gap-10 md:py-12"
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.02] font-mono text-[11.5px] tracking-wider text-fog">
                      {s.n}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[28px] font-medium tracking-tight-display md:text-[36px]">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-[480px] text-[15px] leading-[1.65] text-fog">
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
        </div>
      </div>
    </section>
  );
}
