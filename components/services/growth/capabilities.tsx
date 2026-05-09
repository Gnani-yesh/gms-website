"use client";

import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  FileText,
  MessageSquare,
  LineChart,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const CAPABILITIES = [
  { icon: Search, label: "SEO systems", body: "Technical SEO, semantic content architecture, topical authority — engineered into the product." },
  { icon: Target, label: "Paid media", body: "Meta, Google, LinkedIn — performance creative and audience systems built around your unit economics." },
  { icon: FileText, label: "Editorial content", body: "Long-form, short-form and editorial pipelines — written like you'd want to read it." },
  { icon: MessageSquare, label: "Social systems", body: "Brand-led organic on the surfaces that compound, with a cadence your team can keep." },
  { icon: LineChart, label: "Attribution & analytics", body: "Server-side, privacy-first measurement that actually answers the questions leadership asks." },
  { icon: TrendingUp, label: "Lifecycle & CRM", body: "Email, SMS and product-led journeys that close the loop between acquisition and retention." },
];

export function GrowthCapabilities() {
  return (
    <section className="relative py-40 md:py-56">
      <SectionAura tone="cool" position="top-left" size={760} />
      <div className="container relative">
        <SectionHeading
          index="03"
          eyebrow="Capabilities"
          title={
            <>
              Six channels.
              <br />
              <span className="text-fog">One growth system.</span>
            </>
          }
          description="No retainers running in parallel. Every channel feeds the same model and shares the same source of truth."
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
