"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

import { getCaseStudy, type CaseStudy } from "@/lib/case-studies";

type ShowcaseSite = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  url: string;
  image: { src: string; alt: string };
};

const toSite = (c: CaseStudy): ShowcaseSite => ({
  slug: c.slug,
  client: c.client,
  sector: c.sector,
  year: c.year,
  url: c.url,
  image: c.image,
});

// Real delivered sites, pulled from the case-study source of truth.
const FEATURED: ShowcaseSite = toSite(getCaseStudy("happy-herbals")!);

const SUPPORTING: ShowcaseSite[] = [
  getCaseStudy("dr-krishna")!,
  getCaseStudy("navavarna")!,
  getCaseStudy("meltd")!,
].map(toSite);

export function WebsitesShowcase() {
  return (
    <section id="showcase" className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="top-right" size={760} />
      <SectionAura tone="cool" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow="Selected websites"
            title={
              <>
                Sites built to
                <br />
                <span className="text-fog">be remembered.</span>
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

        <div className="mt-20 space-y-10 md:space-y-14">
          {/* Featured */}
          <ShowcaseCard site={FEATURED} featured priority />

          {/* Three supporting */}
          <div className="grid grid-cols-1 gap-8 md:gap-8 lg:grid-cols-3">
            {SUPPORTING.map((s) => (
              <ShowcaseCard key={s.client} site={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({
  site,
  featured = false,
  priority = false,
}: {
  site: ShowcaseSite;
  featured?: boolean;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease }}
    >
      <Link
        href={`/work/${site.slug}`}
        className="lift group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/40 hover:border-white/[0.10]"
      >
        <SiteImage site={site} featured={featured} priority={priority} />

        {/* Caption rail */}
        <div className="flex items-end justify-between gap-6 border-t border-white/[0.05] px-6 pb-7 pt-5 md:px-8 md:pb-8 md:pt-6">
          <div>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog-muted">
              <span className="text-fog">{site.client}</span>
              <span className="h-2.5 w-px bg-white/15" />
              <span>{site.sector}</span>
              <span className="h-2.5 w-px bg-white/15" />
              <span>{site.year}</span>
            </div>
            <div className="mt-2 font-mono text-[10.5px] tracking-[0.18em] text-fog-muted">
              {site.url}
            </div>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-fog-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            strokeWidth={1.5}
          />
        </div>
      </Link>
    </motion.div>
  );
}

function SiteImage({
  site,
  featured,
  priority,
}: {
  site: ShowcaseSite;
  featured?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`glass-strong relative w-full overflow-hidden ${
        featured ? "rounded-t-2xl" : "rounded-t-2xl"
      } shadow-premium`}
      style={{ aspectRatio: featured ? "16 / 9" : "4 / 3" }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.05] bg-ink-900/80 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 py-1">
          <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
          <span className="font-mono text-[9px] tracking-wider text-fog-muted">
            {site.url}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span className="h-1 w-1 rounded-full bg-white/15" />
        </div>
      </div>

      {/* The site mockup */}
      <div className="relative h-[calc(100%-44px)] w-full">
        <Image
          src={site.image.src}
          alt={site.image.alt}
          fill
          priority={priority}
          sizes={
            featured
              ? "(min-width: 1280px) 1180px, 100vw"
              : "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
        />
        {/* Top-edge highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />
      </div>
    </div>
  );
}
