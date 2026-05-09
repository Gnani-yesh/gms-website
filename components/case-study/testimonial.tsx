"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyTestimonial({ study }: { study: CaseStudy }) {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="warm" position="top-right" size={680} />

      <div className="container relative">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
              07
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
            <span className="eyebrow">In their words</span>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.05 }}
            className="mt-10 font-display text-[28px] font-medium leading-[1.25] tracking-tight-display text-balance text-white md:mt-14 md:text-[40px] lg:text-[48px]"
          >
            <span className="text-fog">“</span>
            {study.testimonial.quote}
            <span className="text-fog">”</span>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="mt-10 flex items-center gap-4 border-t border-white/[0.05] pt-7"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] font-display text-[14px] font-medium tracking-tight-display text-fog">
              {study.testimonial.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="font-display text-[15px] font-medium tracking-tight-display text-white">
                {study.testimonial.author}
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                {study.testimonial.role}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
