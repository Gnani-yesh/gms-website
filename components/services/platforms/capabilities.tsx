"use client";

import { motion } from "framer-motion";
import {
  Database,
  Shield,
  Workflow,
  Cable,
  GaugeCircle,
  LineChart,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const CAPABILITIES = [
  {
    icon: Database,
    label: "Bespoke CMS",
    body: "Headless content platforms tuned to editorial teams — not bent around generic SaaS schemas.",
  },
  {
    icon: Shield,
    label: "Auth & members",
    body: "Multi-tenant identity, gated portals, role-based access, and customer accounts that actually scale.",
  },
  {
    icon: Workflow,
    label: "Workflows & ops",
    body: "Booking engines, scheduling, approvals, and operational pipelines built around how the team actually works.",
  },
  {
    icon: Cable,
    label: "Integrations",
    body: "Connected to your CRM, payments, ERP, analytics — wired with care, observable end-to-end.",
  },
  {
    icon: GaugeCircle,
    label: "Performance & uptime",
    body: "Edge-rendered, autoscaled, and monitored end-to-end — built for uptime and fast response across regions.",
  },
  {
    icon: LineChart,
    label: "Reporting layer",
    body: "Operational dashboards, cohort views, and the analytics surfaces leadership actually opens.",
  },
];

export function PlatformsCapabilities() {
  return (
    <section className="relative py-40 md:py-56">
      <SectionAura tone="cool" position="top-left" size={760} />

      <div className="container relative">
        <SectionHeading
          index="03"
          eyebrow="Capabilities"
          title={
            <>
              Engineered as
              <br />
              <span className="text-fog">a single operating layer.</span>
            </>
          }
          description={
            <>
              Six operational disciplines, designed to compound. Not stitched
              together from off-the-shelf tools your team has to babysit.
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
