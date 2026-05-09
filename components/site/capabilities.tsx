"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionAura } from "./section-aura";
import { cn } from "@/lib/utils";

type Group = {
  label: string;
  index: string;
  intro: string;
  items: string[];
};

const GROUPS: Group[] = [
  {
    label: "Build",
    index: "I",
    intro:
      "Engineering premium digital surfaces — from cinematic marketing sites to custom platforms.",
    items: ["Websites", "Platforms", "Apps", "Systems"],
  },
  {
    label: "Grow",
    index: "II",
    intro:
      "Performance and organic growth engines that compound — engineered around your business model.",
    items: ["SEO", "Meta Ads", "Social Media", "Content"],
  },
  {
    label: "Brand",
    index: "III",
    intro:
      "The visual language and creative direction behind companies that get remembered.",
    items: ["Branding", "Photography", "Creative Direction"],
  },
];

export function Capabilities() {
  return (
    <section id="services" className="relative py-40 md:py-56">
      <SectionAura tone="cool" position="top-right" size={900} />
      <SectionAura tone="warm" position="bottom-left" size={700} />
      <div className="container relative">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title={
            <>
              Three disciplines.
              <br />
              <span className="text-fog">One operating system.</span>
            </>
          }
          description={
            <>
              We work across the entire digital surface of a company —
              engineering, growth and brand — so the work compounds instead of
              fragmenting across vendors.
            </>
          }
        />

        <div className="mt-24 space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05]">
          {GROUPS.map((group, i) => (
            <CapabilityRow key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityRow({ group, index }: { group: Group; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.06,
      }}
      className={cn(
        "group relative grid grid-cols-1 gap-12 bg-ink-900/80 p-10 transition-colors duration-500 hover:bg-ink-800/70 md:grid-cols-12 md:gap-12 md:p-14 lg:p-16"
      )}
    >
      {/* Left — index + label + intro */}
      <div className="md:col-span-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {group.index}
          </span>
          <span className="h-px w-10 bg-accent/40" />
        </div>
        <h3 className="mt-7 font-display text-[52px] font-medium leading-[0.95] tracking-tightest md:text-[80px]">
          {group.label}
          <span className="text-accent">.</span>
        </h3>
        <p className="mt-7 max-w-[340px] text-[14.5px] leading-[1.65] text-fog-muted">
          {group.intro}
        </p>
      </div>

      {/* Right — minimal item list */}
      <div className="md:col-span-7">
        <ul className="divide-y divide-white/[0.05] border-t border-white/[0.05]">
          {group.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + i * 0.05,
              }}
            >
              <Link
                href="/contact"
                className="group/item flex items-center justify-between py-6 transition-all duration-500"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] text-fog-muted">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[22px] font-medium tracking-tight-display text-white transition-colors duration-300 md:text-[26px]">
                    {item}
                  </span>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-fog-muted transition-all duration-500 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-accent"
                  strokeWidth={1.75}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

