"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionAura } from "@/components/site/section-aura";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyNext({ next }: { next: CaseStudy }) {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone={next.tone} position="bottom-left" size={760} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
        >
          <Link
            href={`/work/${next.slug}`}
            className="lift group relative block overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-900/60 transition-colors duration-500 hover:border-white/[0.10]"
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              {/* Mockup preview */}
              <div className="relative md:col-span-5">
                <div className="relative aspect-[16/10] overflow-hidden md:h-full">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(200,169,107,0.08), rgba(15,17,21,0) 70%)",
                    }}
                  />
                  <Image
                    src={next.image.src}
                    alt={next.image.alt}
                    fill
                    sizes="(min-width: 768px) 540px, 100vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="flex flex-col justify-center px-8 pb-10 pt-2 md:col-span-7 md:p-12 lg:p-14">
                <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                  <span>Next case study</span>
                  <span className="h-px w-6 bg-gradient-to-r from-white/30 to-transparent" />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog-muted">
                  <span className="text-fog">{next.client}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{next.sector}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{next.year}</span>
                </div>
                <h3 className="mt-5 max-w-[560px] font-display text-[28px] font-medium leading-[1.1] tracking-tight-display text-balance md:text-[36px] lg:text-[40px]">
                  {next.hero.title}{" "}
                  <span className="italic font-light text-fog">
                    {next.hero.italic}
                  </span>
                </h3>
                <div className="mt-8 flex items-center gap-3 border-t border-white/[0.05] pt-6">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog">
                    View case study
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-5 w-5 text-fog-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Bottom rail */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-8 sm:flex-row sm:items-center">
          <Link
            href="/work"
            className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog transition-colors duration-300 hover:text-white"
          >
            ← All case studies
          </Link>
          <Link
            href="https://calendly.com/gnanimarketingsolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:text-accent"
          >
            Start a project ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
