"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const PLATFORMS = [
  {
    client: "Halcyon House",
    sector: "Hospitality · Operations",
    title: "Bookings, guests, and concierge as one connected system",
    metric: "99.4%",
    metricLabel: "on-time turnover",
    modules: ["Bookings", "Guests", "Rooms", "Concierge", "Reports"],
    accent: "rgba(168,136,74,0.18)",
  },
  {
    client: "Northwave",
    sector: "Studio · Workflow",
    title: "Studio operations, project pipelines, and resourcing",
    metric: "+62%",
    metricLabel: "billable utilization",
    modules: ["Pipeline", "Resourcing", "Briefs", "Time", "Invoicing"],
    accent: "rgba(61,107,255,0.16)",
  },
  {
    client: "Halcyon Capital",
    sector: "Finance · Investor Portal",
    title: "Fund factsheets and a quiet investor portal",
    metric: "$4.2B",
    metricLabel: "AUM under reporting",
    modules: ["Funds", "Statements", "Documents", "KYC", "Reports"],
    accent: "rgba(185,70,200,0.14)",
  },
];

export function PlatformsShowcase() {
  return (
    <section id="showcase" className="relative py-40 md:py-56">
      <SectionAura tone="cool" position="top-right" size={760} />
      <SectionAura tone="warm" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow="Selected platforms"
            title={
              <>
                Systems built
                <br />
                <span className="text-fog">to be operated.</span>
              </>
            }
          />
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 self-end text-[13px] text-fog transition-colors duration-300 hover:text-white"
          >
            View all case studies
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {PLATFORMS.map((p, i) => (
            <motion.div
              key={p.client}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease, delay: i * 0.07 }}
            >
            <Link
              href="/work"
              className="lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 hover:border-white/[0.10]"
            >
              {/* Module diagram */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 80% 100% at 50% 50%, ${p.accent}, rgba(15,17,21,0) 70%)`,
                  }}
                />
                <div className="absolute inset-0 grid-bg opacity-25" />

                <div className="relative flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.22em] text-fog-muted">
                      {p.client.toUpperCase()}
                    </span>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-pulse-soft rounded-full bg-emerald-400/70" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                  </div>

                  {/* Module nodes */}
                  <div className="mt-6 flex flex-1 flex-wrap content-center items-center gap-1.5">
                    {p.modules.map((m, idx) => (
                      <div
                        key={m}
                        className={`rounded-md border px-2.5 py-1.5 font-mono text-[8.5px] tracking-[0.16em] ${
                          idx === 0
                            ? "border-accent/30 bg-accent/10 text-accent"
                            : "border-white/[0.07] bg-white/[0.02] text-fog"
                        }`}
                      >
                        {m.toUpperCase()}
                      </div>
                    ))}
                  </div>

                  {/* Footer status */}
                  <div className="flex items-baseline justify-between border-t border-white/[0.05] pt-3 font-mono text-[8px] tracking-[0.18em] text-fog-muted">
                    <span>OPS · LIVE</span>
                    <span>v2.4 · IST</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="flex flex-col gap-4 px-7 pb-7 pt-5 md:px-7">
                <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
                  <span className="text-fog">{p.client}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{p.sector}</span>
                </div>
                <h3 className="font-display text-[19px] font-medium leading-[1.2] tracking-tight-display text-white">
                  {p.title}
                </h3>
                <div className="mt-auto flex items-baseline gap-3 border-t border-white/[0.06] pt-4">
                  <span className="font-display text-[20px] font-medium tracking-tightest text-accent">
                    {p.metric}
                  </span>
                  <span className="text-[12px] text-fog-muted">
                    {p.metricLabel}
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 text-fog-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
