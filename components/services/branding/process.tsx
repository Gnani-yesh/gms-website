"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const STEPS = [
  { n: "01", title: "Immersion", duration: "Week 1 — 2", body: "Founder interviews, audience research, category audit. We learn how the brand feels from the inside before drawing a line." },
  { n: "02", title: "Positioning", duration: "Week 2 — 4", body: "Territory, voice, narrative architecture. The decisions that determine whether the identity feels inevitable later." },
  { n: "03", title: "Identity", duration: "Week 4 — 8", body: "Wordmark, palette, typography, supporting marks. Designed in slow drafts, not by the dozen." },
  { n: "04", title: "Application", duration: "Week 6 — 10", body: "Photography, editorial, packaging, digital surfaces. The system meeting reality across every touchpoint." },
  { n: "05", title: "Brand book", duration: "Week 10 — 12", body: "Documentation, governance, working files. Everything your team and partners need to keep the work alive." },
];

export function BrandingProcess() {
  return (
    <section id="process" className="relative py-40 md:py-56">
      <SectionAura tone="cool" position="top-right" size={680} />
      <div className="container relative">
        <SectionHeading
          index="04"
          eyebrow="Process"
          title={
            <>
              From founder voice
              <br />
              <span className="text-fog">to a brand book your team owns.</span>
            </>
          }
          description="Branding engagements are deliberate, slow in the right places, and end with a system your team can carry."
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
            <span>Brand engagements typically run 10 — 16 weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
