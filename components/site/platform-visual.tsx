"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * System-style ecosystem visual.
 *
 * One dominant central card — Website Development & Platforms —
 * surrounded by five aligned service modules:
 *   • Branding (top-left)
 *   • SEO (top-right)
 *   • Social (bottom-left)
 *   • Content (bottom-center, micro)
 *   • Ads (bottom-right)
 *
 * The composition is symmetric and modular — like a service architecture
 * diagram, not a scattered floating composition. Lower visual intensity
 * than a hero: single soft glow, restrained motion, tight alignment.
 */
export function PlatformVisual() {
  return (
    <div className="relative">
      <div className="md:hidden">
        <MobileLayout />
      </div>
      <div className="hidden md:block">
        <SystemLayout />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   MOBILE — stacked service modules
   ════════════════════════════════════════════ */
function MobileLayout() {
  return (
    <div className="relative space-y-3">
      <SoftUnderGlow mobile />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease, delay: 0.3 }}
      >
        <CentralCard />
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        <ServiceCardWrapper delay={0.5}>
          <BrandingCard />
        </ServiceCardWrapper>
        <ServiceCardWrapper delay={0.6}>
          <SeoCard />
        </ServiceCardWrapper>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ServiceCardWrapper delay={0.7}>
          <SocialCard />
        </ServiceCardWrapper>
        <ServiceCardWrapper delay={0.8}>
          <AdsCard />
        </ServiceCardWrapper>
      </div>

      <ServiceCardWrapper delay={0.9}>
        <ContentCard />
      </ServiceCardWrapper>
    </div>
  );
}

function ServiceCardWrapper({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   TABLET + DESKTOP — system-style floating
   Central website card flanked by service cards
   on the LEFT and RIGHT only. Nothing on top.
   ════════════════════════════════════════════ */
function SystemLayout() {
  return (
    <div className="relative">
      <SoftUnderGlow />

      <div className="relative aspect-[16/10] w-full">
        {/* CENTRAL — Website / Platforms.
            Wrapper handles absolute centering. Motion.div inside handles
            the entrance animation — keeping Framer Motion's transform from
            overriding Tailwind's -translate-x/y centering. */}
        <div className="absolute left-1/2 top-1/2 w-[48%] -translate-x-1/2 -translate-y-1/2 lg:w-[46%]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.4 }}
          >
            <CentralCard />
          </motion.div>
        </div>

        {/* ── LEFT COLUMN — staggered offsets for organic feel ── */}
        {/* Branding · top-left, slightly higher */}
        <FloatingSlot
          className="left-[2%] top-[3%] w-[19%]"
          delay={0.55}
          floatDuration={13}
          floatRange={-12}
          floatDelay={1.2}
        >
          <BrandingCard />
        </FloatingSlot>

        {/* Content · mid-left, indented more inward, lg+ only */}
        <FloatingSlot
          className="left-[5%] top-[44%] hidden w-[18%] lg:block"
          delay={0.7}
          floatDuration={16}
          floatRange={-9}
          floatDelay={2.6}
        >
          <ContentCard />
        </FloatingSlot>

        {/* Social · bottom-left, slight outward shift */}
        <FloatingSlot
          className="bottom-[4%] left-[3%] w-[19%]"
          delay={0.85}
          floatDuration={15}
          floatRange={-10}
          floatDelay={2}
        >
          <SocialCard />
        </FloatingSlot>

        {/* ── RIGHT COLUMN — different cadence than left ── */}
        {/* SEO · top-right, slightly lower than Branding */}
        <FloatingSlot
          className="right-[2%] top-[8%] w-[19%]"
          delay={0.65}
          floatDuration={12}
          floatRange={-13}
          floatDelay={0.4}
        >
          <SeoCard />
        </FloatingSlot>

        {/* Ads · bottom-right, slightly higher than Social */}
        <FloatingSlot
          className="bottom-[7%] right-[3%] w-[19%]"
          delay={0.95}
          floatDuration={14}
          floatRange={-11}
          floatDelay={1.4}
        >
          <AdsCard />
        </FloatingSlot>
      </div>
    </div>
  );
}

function FloatingSlot({
  children,
  className,
  delay,
  floatDuration,
  floatRange,
  floatDelay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  floatDuration: number;
  floatRange: number;
  floatDelay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease, delay }}
      className={`absolute ${className ?? ""}`}
    >
      <motion.div
        animate={{ y: [0, floatRange, 0] }}
        transition={{
          duration: floatDuration,
          ease: "easeInOut",
          repeat: Infinity,
          delay: floatDelay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   ATMOSPHERE — single soft glow, restrained
   ════════════════════════════════════════════ */
function SoftUnderGlow({ mobile }: { mobile?: boolean }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${
        mobile
          ? "inset-x-[5%] top-[10%] h-[60%]"
          : "inset-x-[8%] top-[12%] h-[76%]"
      } blur-[100px]`}
      style={{
        background:
          "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,169,107,0.10), transparent 75%)",
      }}
    />
  );
}

/* ════════════════════════════════════════════
   CENTRAL CARD — Website / Platforms
   ════════════════════════════════════════════ */
function CentralCard() {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-2xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: "16 / 10" }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 py-1">
          <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
          <span className="font-mono text-[9.5px] tracking-wider text-fog-muted">
            happyherbals.online
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span className="h-1 w-1 rounded-full bg-white/15" />
          <span className="h-1 w-1 rounded-full bg-white/15" />
        </div>
      </div>

      {/* Site body */}
      <div className="relative flex h-[calc(100%-44px)] flex-col px-5 py-4 sm:px-7 sm:py-5 lg:px-10 lg:py-7">
        <div className="flex items-center justify-between">
          <span className="font-display text-[11.5px] font-medium tracking-tight-display text-white sm:text-[12.5px]">
            Happy Herbals
          </span>
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {["WORK", "STUDIO", "JOURNAL", "CONTACT"].map((n) => (
              <span
                key={n}
                className="font-mono text-[7px] tracking-[0.2em] text-fog-muted sm:text-[8px]"
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-fog-muted sm:text-[8.5px]">
            — Studio + Platform · Spring 2026
          </div>
          <div
            className="mt-3 font-display font-medium leading-[0.92] tracking-tightest text-white"
            style={{ fontSize: "clamp(24px, 4vw, 46px)" }}
          >
            Built for
            <br />
            <span className="italic font-light text-fog">the long form.</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="relative flex h-1 w-1">
              <span className="absolute inset-0 animate-pulse-soft rounded-full bg-accent" />
              <span className="relative h-1 w-1 rounded-full bg-accent" />
            </span>
            <span className="text-[8px] text-fog sm:text-[8.5px]">
              Now booking new projects
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.04] pt-3">
          <span className="font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
            © 2026
          </span>
          <span className="flex items-center gap-1 font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
            FEATURED
            <span aria-hidden className="text-[9px]">↗</span>
          </span>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.04), transparent)",
          }}
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SERVICE CARDS — modular, system-style
   ════════════════════════════════════════════ */

/* ─── Branding ─── */
function BrandingCard() {
  return (
    <div className="glass-strong relative h-full w-full overflow-hidden rounded-xl p-3.5 shadow-premium">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-[9px]">Branding</span>
        <span className="h-1 w-1 rounded-full bg-accent" />
      </div>

      <div className="mt-3 flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-2">
        <span className="font-display text-[12.5px] font-medium leading-none tracking-tightest text-white">
          Happy Herbals
        </span>
        <span className="font-mono text-[7px] tracking-wider text-fog-muted">
          ®
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-4 gap-1">
        {["#0F1115", "#FFFFFF", "#C8A96B", "#7D8596"].map((c, i) => (
          <div
            key={c}
            className="aspect-square rounded-sm ring-1 ring-white/5"
            style={{
              background: c,
              boxShadow:
                i === 1 ? "inset 0 1px 0 rgba(0,0,0,0.04)" : undefined,
            }}
          />
        ))}
      </div>

      <div className="mt-2.5 flex items-end justify-between">
        <span className="font-display text-[16px] font-medium leading-none tracking-tightest text-white">
          Aa
        </span>
        <span className="font-mono text-[6.5px] tracking-[0.18em] text-fog-muted sm:text-[7px]">
          GEIST · INTER
        </span>
      </div>
    </div>
  );
}

/* ─── SEO ─── */
function SeoCard() {
  return (
    <div className="glass-strong relative h-full w-full overflow-hidden rounded-xl p-3.5 shadow-premium">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-[9px]">SEO</span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-pulse-soft rounded-full bg-emerald-400/70" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
      </div>

      <div className="mt-2.5 font-display text-[15px] font-medium leading-none tracking-tightest text-white sm:text-[16px]">
        Organic search
      </div>
      <div className="mt-1 text-[9px] text-fog-muted">Indexed &amp; ranking</div>

      <Sparkline gradientId="seo-spark" />

      <div className="mt-2 flex items-center justify-between border-t border-white/[0.04] pt-2 font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
        <span>GOOGLE</span>
        <span>SEO · CONTENT</span>
      </div>
    </div>
  );
}

/* ─── Ads ─── */
function AdsCard() {
  return (
    <div className="glass-strong relative h-full w-full overflow-hidden rounded-xl p-3.5 shadow-premium">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-[9px]">Ads</span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-pulse-soft rounded-full bg-emerald-400/70" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
      </div>

      <div className="mt-2.5 font-display text-[15px] font-medium leading-none tracking-tightest text-white sm:text-[16px]">
        Paid campaigns
      </div>
      <div className="mt-1 text-[9px] text-fog-muted">Meta &amp; Google · live</div>

      <Sparkline gradientId="ads-spark" />

      <div className="mt-2 flex items-center justify-between border-t border-white/[0.04] pt-2 font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
        <span>META · GOOGLE</span>
        <span>ACQUISITION</span>
      </div>
    </div>
  );
}

/* ─── Social Media ─── */
function SocialCard() {
  const tiles = [
    "linear-gradient(160deg, #1F2030 0%, #131520 100%)",
    "linear-gradient(180deg, #0F1115 0%, #1F2030 100%)",
    "linear-gradient(200deg, #1A1D26 0%, #0F1115 100%)",
  ];
  return (
    <div className="glass-strong relative h-full w-full overflow-hidden rounded-xl p-3.5 shadow-premium">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-[9px]">Social</span>
        <span className="font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
          @happyherbals
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {tiles.map((bg, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm ring-1 ring-white/5"
            style={{ background: bg }}
          />
        ))}
      </div>

      <div className="mt-3 font-display text-[15px] font-medium leading-none tracking-tightest text-white sm:text-[16px]">
        Content grid
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-white/[0.04] pt-2 font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
        <span>EDITORIAL · WEEKLY</span>
        <span>ORGANIC</span>
      </div>
    </div>
  );
}

/* ─── Content Production ─── */
function ContentCard() {
  return (
    <div className="glass-strong relative h-full w-full overflow-hidden rounded-xl p-3.5 shadow-premium">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-[9px]">Content</span>
        <span className="font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
          04 / 12
        </span>
      </div>

      <div className="mt-2.5 font-display text-[12.5px] font-medium leading-[1.18] tracking-tight-display text-white sm:text-[13.5px]">
        The economics of brand-led growth.
      </div>

      <div className="mt-2.5 flex items-center gap-2">
        <span className="font-mono text-[6.5px] tracking-[0.18em] text-fog-muted sm:text-[7px]">
          WRITTEN BY
        </span>
        <span className="text-[8px] text-fog sm:text-[8.5px]">G. Patel</span>
      </div>

      <div className="mt-3 space-y-1.5">
        <div className="h-px w-full bg-white/10" />
        <div className="h-px w-[78%] bg-white/8" />
        <div className="h-px w-[58%] bg-white/8" />
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-white/[0.04] pt-2 font-mono text-[7px] tracking-wider text-fog-muted sm:text-[7.5px]">
        <span>ESSAY · 7 MIN</span>
        <span aria-hidden>↗</span>
      </div>
    </div>
  );
}

/* ─── Sparkline primitive ─── */
function Sparkline({ gradientId }: { gradientId: string }) {
  return (
    <svg viewBox="0 0 80 24" className="mt-2 h-[22px] w-full" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C8A96B" stopOpacity="1" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 18 L 12 16 L 24 17 L 36 12 L 48 13 L 60 8 L 72 5 L 80 2"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease, delay: 1.6 }}
      />
      <motion.circle
        cx="80"
        cy="2"
        r="2"
        fill="#C8A96B"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.6, duration: 0.6 }}
      />
    </svg>
  );
}
