"use client";

import { motion } from "framer-motion";
import {
  Type,
  Palette,
  Camera,
  BookOpen,
  Award,
  Compass,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const CAPABILITIES = [
  { icon: Type, label: "Typography systems", body: "Display, body, and editorial pairings — chosen for the long view, never the season." },
  { icon: Palette, label: "Visual identity", body: "Wordmarks, monograms, palettes, and the supporting marks that hold the system together." },
  { icon: Compass, label: "Creative direction", body: "End-to-end art direction across every surface where the brand is met." },
  { icon: Camera, label: "Photography", body: "Editorial, product, and architectural shoots — directed in-house, shot with intent." },
  { icon: BookOpen, label: "Editorial systems", body: "Brand books, journals, magazines and the publications that carry the voice." },
  { icon: Award, label: "Brand operations", body: "Asset libraries, governance, and the systems that keep brand standards alive past launch." },
];

export function BrandingCapabilities() {
  return (
    <section className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="top-left" size={760} />
      <div className="container relative">
        <SectionHeading
          index="03"
          eyebrow="Capabilities"
          title={
            <>
              Identity, voice,
              <br />
              <span className="text-fog">and the surfaces between.</span>
            </>
          }
          description="Every brand we build is a system — designed to feel deliberate everywhere it lands, from logo lockup to long-form editorial."
        />
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease, delay: (i % 3) * 0.07 }}
              className="group relative bg-ink-900/80 p-9 transition-colors duration-500 hover:bg-ink-800/70 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.07] bg-white/[0.02] transition-colors duration-500 group-hover:border-accent/40">
                  <c.icon className="h-4 w-4 text-fog-muted transition-colors duration-500 group-hover:text-accent" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
                  /{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-12 max-w-[260px] font-display text-[22px] font-medium leading-tight tracking-tight-display text-white md:text-[24px]">
                {c.label}
              </h3>
              <p className="mt-3 max-w-[300px] text-[13.5px] leading-[1.6] text-fog-muted">
                {c.body}
              </p>
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
