"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Search,
  Zap,
  Smartphone,
  TrendingUp,
  FileText,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const CAPABILITIES = [
  {
    icon: LayoutGrid,
    label: "Premium UI / UX",
    body: "Design systems engineered for editorial restraint and product-grade clarity.",
  },
  {
    icon: Search,
    label: "SEO-ready architecture",
    body: "Technical SEO, semantic structure and discovery built into the foundation — not bolted on.",
  },
  {
    icon: Zap,
    label: "Cinematic performance",
    body: "Sub-1s loads, 100/100 Lighthouse, and motion that feels considered — never decorative.",
  },
  {
    icon: Smartphone,
    label: "Responsive systems",
    body: "Mobile, tablet and desktop are designed handcrafted — not scaled mechanically from one canvas.",
  },
  {
    icon: TrendingUp,
    label: "Conversion-focused",
    body: "Layouts and journeys engineered around your actual business model and pipeline economics.",
  },
  {
    icon: FileText,
    label: "Content infrastructure",
    body: "Bespoke CMS, journal pipelines and editorial systems your team can own and operate.",
  },
];

export function WebsitesCapabilities() {
  return (
    <section className="relative py-40 md:py-56">
      <SectionAura tone="cool" position="top-right" size={760} />

      <div className="container relative">
        <SectionHeading
          index="03"
          eyebrow="Capabilities"
          title={
            <>
              Engineered like
              <br />
              <span className="text-fog">a product, not a brochure.</span>
            </>
          }
          description={
            <>
              Six disciplines compounded into every site we ship. No retainers
              for things that should already be there.
            </>
          }
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
                  <c.icon
                    className="h-4 w-4 text-fog-muted transition-colors duration-500 group-hover:text-accent"
                    strokeWidth={1.5}
                  />
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
