"use client";

import { motion } from "framer-motion";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

type Person = {
  name: string;
  role: string;
  location: string;
  bio: string;
  /** Optional portrait — when present, overlays the atmospheric placeholder */
  photoId?: string;
  photoSrc?: string;
  /** Atmospheric portrait substitute */
  surface: string;
  glow: string;
  fig: string;
};

const PEOPLE: Person[] = [
  {
    name: "Gnani",
    role: "Founder",
    location: "Hyderabad, India",
    bio: "A builder, designer and operator who has spent the last decade running marketing, brand and product engagements across SaaS, hospitality, finance and editorial commerce — and sets the standard every engagement is held to.",
    surface:
      "linear-gradient(160deg, #2a221b 0%, #5a4733 35%, #1a1410 75%, #07070A 100%)",
    glow: "radial-gradient(ellipse at top right, rgba(255,210,140,0.30), transparent 70%)",
    fig: "FIG. 01 · FOUNDER",
  },
  {
    name: "Saitarun Yeshamalla",
    role: "UK Partner & Marketing Lead",
    location: "Swansea, Wales, UK",
    bio: "Saitarun leads client relationships and marketing strategy for GMS across the UK. With a Master's in Digital Marketing from Swansea University, he brings academic rigour and hands-on growth experience to every engagement — from SEO and paid media to brand positioning and conversion strategy.",
    photoId: "saitarun-photo",
    photoSrc: "/saitarun.jpg",
    surface:
      "linear-gradient(160deg, #1b2230 0%, #33485a 35%, #10141a 75%, #07070A 100%)",
    glow: "radial-gradient(ellipse at top right, rgba(140,190,255,0.30), transparent 70%)",
    fig: "FIG. 02 · UK PARTNER",
  },
];

export function StudioTeam() {
  return (
    <section className="relative py-32 md:py-44">
      <SectionAura tone="cool" position="top-left" size={680} />

      <div className="container relative">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
            04
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">The team</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.05 }}
          className="mt-6 font-display text-display-md font-medium text-balance md:max-w-[900px]"
        >
          The people
          <br />
          <span className="italic font-light text-fog">behind the work.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PEOPLE.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/50"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0" style={{ background: p.surface }} />
                <div
                  className="absolute right-0 top-0 h-2/3 w-2/3 blur-3xl"
                  style={{ background: p.glow }}
                />
                <div
                  className="absolute inset-0 opacity-[0.20]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                  }}
                />
                {p.photoSrc && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    id={p.photoId}
                    src={p.photoSrc}
                    alt={p.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-x-6 bottom-6 z-10 flex items-end justify-between font-mono text-[9px] tracking-[0.22em] text-white/65">
                  <span>{p.fig}</span>
                  <span>MMXXVI</span>
                </div>
              </div>

              {/* Detail */}
              <div className="p-7 md:p-9">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
                  {p.role}
                </div>
                <h3 className="mt-3 font-display text-[24px] font-medium tracking-tight-display text-white md:text-[28px]">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
                  <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
                  {p.location}
                </div>
                <p className="mt-5 text-[14.5px] leading-[1.7] text-fog">
                  {p.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
