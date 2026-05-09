"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const ECOSYSTEM = [
  {
    label: "Build",
    href: "/services/websites",
    accent: "warm",
    intro:
      "Premium websites, custom platforms and operational systems — the digital infrastructure your business runs on.",
    items: [
      { name: "Premium Websites", href: "/services/websites" },
      { name: "Custom Platforms", href: "/services/platforms" },
      { name: "Internal Systems", href: "/services/platforms" },
    ],
  },
  {
    label: "Grow",
    href: "/services/growth",
    accent: "cool",
    intro:
      "SEO, paid media, content and lifecycle — operated as one growth system that compounds, not four retainers running in parallel.",
    items: [
      { name: "SEO & Content", href: "/services/growth" },
      { name: "Meta & Google Ads", href: "/services/growth" },
      { name: "Lifecycle & CRM", href: "/services/growth" },
    ],
  },
  {
    label: "Brand",
    href: "/services/branding",
    accent: "magenta",
    intro:
      "Identity systems, photography and creative direction — designed for companies built for the long view.",
    items: [
      { name: "Brand Identity", href: "/services/branding" },
      { name: "Photography", href: "/services/branding" },
      { name: "Creative Direction", href: "/services/branding" },
    ],
  },
];

export function ServicesEcosystem() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="cool" position="top-right" size={760} />

      <div className="container relative">
        <SectionHeading
          index="01"
          eyebrow="The ecosystem"
          title={
            <>
              Three faces of
              <br />
              <span className="text-fog">the same practice.</span>
            </>
          }
          description="Every engagement runs across some or all of these. The work compounds because the system is connected — measurement, brand, and surfaces share the same source of truth."
        />

        <div className="mt-20 space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-24">
          {ECOSYSTEM.map((e, i) => (
            <EcosystemRow key={e.label} pillar={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemRow({
  pillar,
  index,
}: {
  pillar: (typeof ECOSYSTEM)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease, delay: index * 0.06 }}
      className="group relative grid grid-cols-1 gap-12 bg-ink-900/80 p-10 transition-colors duration-500 hover:bg-ink-800/70 md:grid-cols-12 md:gap-12 md:p-14 lg:p-16"
    >
      {/* Left — index + label + intro */}
      <div className="md:col-span-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-accent/40" />
        </div>
        <h3 className="mt-7 font-display text-[52px] font-medium leading-[0.95] tracking-tightest md:text-[80px]">
          {pillar.label}
          <span className="text-accent">.</span>
        </h3>
        <p className="mt-7 max-w-[340px] text-[14.5px] leading-[1.65] text-fog-muted">
          {pillar.intro}
        </p>
        <Link
          href={pillar.href}
          className="mt-7 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:text-accent"
        >
          Explore {pillar.label.toLowerCase()}
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2.25}
          />
        </Link>
      </div>

      {/* Right — items */}
      <div className="md:col-span-7">
        <ul className="divide-y divide-white/[0.05] border-t border-white/[0.05]">
          {pillar.items.map((item, i) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group/item flex items-center justify-between py-6 transition-all duration-500"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] text-fog-muted">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[22px] font-medium tracking-tight-display text-white transition-colors duration-300 md:text-[26px]">
                    {item.name}
                  </span>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-fog-muted transition-all duration-500 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-accent"
                  strokeWidth={1.75}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
