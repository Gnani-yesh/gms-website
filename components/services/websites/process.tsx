"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const TIERS = [
  {
    title: "Landing page or simple site",
    duration: "4 — 5 days",
    body: "A single page or a small site — designed, built and ready to go live.",
  },
  {
    title: "Standard website",
    duration: "7 — 10 days",
    body: "A full multi-page website with the pages most businesses need.",
  },
  {
    title: "E-commerce site",
    duration: "2 — 3 weeks",
    body: "A full online store — products, cart and checkout, ready to take orders.",
  },
];

export function WebsitesProcess() {
  return (
    <section id="process" className="relative py-40 md:py-56">
      <SectionAura tone="magenta" position="top-left" size={680} />

      <div className="container relative">
        <SectionHeading
          index="04"
          eyebrow="Timeline"
          title={
            <>
              Most sites ship in days,
              <br />
              <span className="text-fog">not months.</span>
            </>
          }
          description="How long it takes depends on the size of the site. Here's what to expect."
        />

        <div className="relative mt-24">
          <ol>
            {TIERS.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.06,
                }}
                className="group relative grid grid-cols-1 gap-4 border-t border-white/[0.05] py-9 md:grid-cols-12 md:gap-10 md:py-12"
              >
                <div className="md:col-span-5">
                  <h3 className="font-display text-[24px] font-medium tracking-tight-display md:text-[30px]">
                    {t.title}
                  </h3>
                  <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
                    {t.duration}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-[520px] text-[15px] leading-[1.65] text-fog">
                    {t.body}
                  </p>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
              </motion.li>
            ))}
          </ol>

          {/* Bottom rail anchor */}
          <div className="mt-12 flex items-center gap-3 border-t border-white/[0.05] pt-8 font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>We confirm the exact timeline with you before we start</span>
          </div>
        </div>
      </div>
    </section>
  );
}
