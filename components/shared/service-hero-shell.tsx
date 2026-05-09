"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Tone = "warm" | "cool" | "magenta";

const AMBIENT: Record<Tone, [string, string, string]> = {
  warm: [
    "rgba(168,136,74,0.16)",
    "rgba(184,149,110,0.14)",
    "rgba(200,169,107,0.12)",
  ],
  cool: [
    "rgba(61,107,255,0.16)",
    "rgba(80,140,255,0.14)",
    "rgba(200,169,107,0.10)",
  ],
  magenta: [
    "rgba(185,70,200,0.16)",
    "rgba(220,90,200,0.13)",
    "rgba(200,169,107,0.10)",
  ],
};

interface ServiceHeroShellProps {
  serviceNumber: string;
  serviceLabel: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryLabel: string;
  primaryHref?: string;
  ghostLabel: string;
  ghostHref: string;
  tone?: Tone;
  children: React.ReactNode;
}

/**
 * Shared chrome around every service-page hero.
 * Pages provide the page-specific visual via children.
 */
export function ServiceHeroShell({
  serviceNumber,
  serviceLabel,
  title,
  description,
  primaryLabel,
  primaryHref = "/#contact",
  ghostLabel,
  ghostHref,
  tone = "warm",
  children,
}: ServiceHeroShellProps) {
  const [a, b, c] = AMBIENT[tone];
  return (
    <section className="relative isolate overflow-hidden pt-36 sm:pt-44 md:pt-56">
      <AmbientField a={a} b={b} c={c} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container relative">
        {/* Service tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
            <Link
              href="/"
              className="text-fog-muted transition-colors hover:text-fog"
            >
              GMS
            </Link>
            <span className="mx-2 text-fog-muted">/</span>
            Service · {serviceNumber} — {serviceLabel}
          </span>
        </motion.div>

        {/* Headline + subtext */}
        <div className="mx-auto mt-8 max-w-[1100px] text-center sm:mt-10 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
            className="font-display text-display-xl font-medium text-balance"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="mx-auto mt-7 max-w-[640px] text-pretty text-[15.5px] leading-[1.6] text-fog sm:mt-9 sm:text-[16px] md:text-[17.5px]"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row"
          >
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
            </Link>
            <Link href={ghostHref} className="btn-ghost">
              <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              {ghostLabel}
            </Link>
          </motion.div>
        </div>

        {/* Page-specific hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease, delay: 0.55 }}
          className="relative mx-auto mt-20 max-w-[1180px] sm:mt-28 md:mt-40"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function AmbientField({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1200px] overflow-hidden">
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 820,
          height: 820,
          left: "-14%",
          top: "-20%",
          background: `radial-gradient(closest-side, ${a}, transparent)`,
        }}
        animate={{ opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 880,
          height: 880,
          right: "-14%",
          top: "-10%",
          background: `radial-gradient(closest-side, ${b}, transparent)`,
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div
        className="ambient"
        style={{
          width: 1100,
          height: 460,
          left: "50%",
          top: "38%",
          transform: "translateX(-50%)",
          opacity: 0.78,
          background: `radial-gradient(closest-side, ${c}, transparent)`,
        }}
      />
    </div>
  );
}
