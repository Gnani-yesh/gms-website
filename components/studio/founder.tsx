"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

export function StudioFounder() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="warm" position="top-right" size={680} />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Founder portrait — abstract */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
              {/* Atmospheric portrait substitute */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #2a221b 0%, #5a4733 35%, #1a1410 75%, #07070A 100%)",
                }}
              />
              <div
                className="absolute right-0 top-0 h-2/3 w-2/3 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(255,210,140,0.30), transparent 70%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.20]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                }}
              />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between font-mono text-[9px] tracking-[0.22em] text-white/65">
                <span>FIG. 01 · FOUNDER</span>
                <span>MMXXVI</span>
              </div>
            </div>
          </motion.div>

          {/* Founder text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                03
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
              <span className="eyebrow">Founder</span>
            </div>

            <h2 className="mt-7 font-display text-display-md font-medium text-balance">
              We started GMS to build the way
              <br />
              <span className="italic font-light text-fog">
                we wished agencies built.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[15.5px] leading-[1.7] text-fog md:text-[16.5px]">
              GMS is led by Gnani — a builder, designer and operator who has
              spent the last decade running marketing, brand and product
              engagements for ambitious teams across SaaS, hospitality, finance
              and editorial commerce.
            </p>

            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-fog-muted md:text-[16.5px]">
              The studio is small on purpose. Two people, working directly with
              each client, and the long view. Most of our work comes from
              referral. We&apos;d rather get the next thing right than ship the
              next thing fast.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/[0.05] pt-8">
              {[
                { label: "Studio of", v: "2" },
                { label: "Founded", v: "2025" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
                    {s.label}
                  </div>
                  <div className="mt-2 font-display text-[28px] font-medium tracking-tight-display text-white md:text-[32px]">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
