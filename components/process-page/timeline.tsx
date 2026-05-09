"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const STAGES = [
  {
    n: "01",
    phase: "BUILD",
    title: "Discovery",
    duration: "Week 1 — 2",
    body:
      "We embed with leadership and the operating team. We learn the business model, the audience, the constraints any future system has to live with, and the ambition behind the work.",
    artifacts: [
      "Founder & operator interviews",
      "Audience & category research",
      "Competitive audit",
      "Constraints & success-criteria document",
    ],
  },
  {
    n: "02",
    phase: "BUILD",
    title: "Strategy",
    duration: "Week 2 — 4",
    body:
      "Positioning, narrative, information architecture, channel mix, and the technical roadmap are defined as one connected plan. The decisions that determine whether the work compounds.",
    artifacts: [
      "Positioning & narrative architecture",
      "Channel & content thesis",
      "Technical roadmap",
      "Measurement model & KPI tree",
    ],
  },
  {
    n: "03",
    phase: "BUILD",
    title: "Infrastructure",
    duration: "Week 4 — 12",
    body:
      "Identity, surfaces, platforms, content systems and measurement layers are designed and engineered. Production-grade builds — not deliverables — engineered to be operated for years.",
    artifacts: [
      "Brand identity & system",
      "Marketing site & platforms",
      "Editorial & content infrastructure",
      "Tracking, attribution, analytics",
    ],
  },
  {
    n: "04",
    phase: "OPERATE",
    title: "Launch",
    duration: "Week 12 — 14",
    body:
      "Phased rollout. QA, performance tuning, content migration, training and a clean handover. We document everything the in-house team needs to keep the system alive after we step back.",
    artifacts: [
      "QA & accessibility audit",
      "Performance tuning & monitoring",
      "Team training & runbooks",
      "Handover documentation",
    ],
  },
  {
    n: "05",
    phase: "OPERATE",
    title: "Growth",
    duration: "Quarter 2 +",
    body:
      "We continue to operate the program — content, paid creative, lifecycle, optimization. The work that compounds is the work we keep doing. Most of our partners stay with us through this stage for years.",
    artifacts: [
      "Editorial cadence",
      "Paid creative loop",
      "Lifecycle & retention",
      "Quarterly reporting",
    ],
  },
  {
    n: "06",
    phase: "OPERATE",
    title: "Refinement",
    duration: "Quarter 4 +",
    body:
      "Quarterly review of the whole system. Model recalibration, new surfaces, new programs. The studio you started with becomes the operating partner you stay with.",
    artifacts: [
      "Annual brand audit",
      "Model recalibration",
      "New surfaces & programs",
      "Strategic review with leadership",
    ],
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="warm" position="top-left" size={760} />

      <div className="container relative">
        <SectionHeading
          index="01"
          eyebrow="The timeline"
          title={
            <>
              Twelve to fourteen weeks
              <br />
              <span className="text-fog">to build the system.</span>
              <br />
              <span className="text-fog">Years to operate it.</span>
            </>
          }
          description="Each stage has explicit artifacts, named deliverables, and a known duration. No ambiguity. No status decks designed to obscure where things are."
        />

        <div className="relative mt-24">
          <ol>
            {STAGES.map((s, i) => (
              <Stage key={s.n} stage={s} index={i} />
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-8 font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted sm:flex-row sm:items-center">
            <span className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Build phase · weeks 1 — 14
            </span>
            <span className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
              Operate phase · ongoing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage({
  stage: s,
  index,
}: {
  stage: (typeof STAGES)[number];
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.95, ease, delay: (index % 3) * 0.06 }}
      className="group relative grid grid-cols-1 gap-8 border-t border-white/[0.05] py-12 md:grid-cols-12 md:gap-12 md:py-16"
    >
      <div className="md:col-span-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] font-mono text-[12px] tracking-wider text-fog">
            {s.n}
          </div>
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
              s.phase === "BUILD" ? "text-accent" : "text-emerald-300/80"
            }`}
          >
            {s.phase}
          </span>
        </div>
        <h3 className="mt-6 font-display text-[34px] font-medium leading-[1.05] tracking-tight-display md:text-[44px]">
          {s.title}
        </h3>
        <div className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
          {s.duration}
        </div>
      </div>

      <div className="md:col-span-5">
        <p className="max-w-[520px] text-[15px] leading-[1.7] text-fog md:text-[16px]">
          {s.body}
        </p>
      </div>

      <div className="md:col-span-4">
        <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-fog-muted">
          Artifacts
        </div>
        <ul className="mt-4 space-y-2.5">
          {s.artifacts.map((a) => (
            <li
              key={a}
              className="flex items-baseline gap-3 text-[13px] text-fog"
            >
              <span className="mt-1 h-px w-3 shrink-0 bg-white/20" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />
    </motion.li>
  );
}
