"use client";

import { motion } from "framer-motion";
import { ChromeBar, ScanLight, TopInnerWash } from "@/components/shared/preview-primitives";
import type { CaseStudy, CaseStudyVisual } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyGallery({ study }: { study: CaseStudy }) {
  return (
    <section className="relative py-32 md:py-44">
      <div className="container">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            06
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">Visual gallery</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease }}
          className="mt-6 font-display text-display-md font-medium text-balance md:max-w-[900px]"
        >
          The artifacts —{" "}
          <span className="italic font-light text-fog">
            site, brand, platform.
          </span>
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {study.gallery.items.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease, delay: (i % 2) * 0.08 }}
              className={`lift relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/40 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="p-3 md:p-4">
                <ArtifactVisual kind={item.kind} label={item.label} feature={i === 0} />
              </div>
              <figcaption className="flex items-center justify-between border-t border-white/[0.05] px-7 py-5 md:px-8 md:py-6">
                <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
                  <span className="text-fog">FIG. {String(i + 1).padStart(2, "0")}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{item.caption}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
                  {String(i + 1).padStart(2, "0")} / {String(study.gallery.items.length).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   ARTIFACT VISUALS — modular preview cards
   ════════════════════════════════════════════ */
function ArtifactVisual({
  kind,
  label,
  feature,
}: {
  kind: CaseStudyVisual;
  label: string;
  feature?: boolean;
}) {
  const aspect = feature ? "16 / 9" : "16 / 11";

  switch (kind) {
    case "marketing-site":
      return <MarketingSitePreview url={label} aspect={aspect} />;
    case "platform-console":
      return <PlatformConsolePreview label={label} aspect={aspect} />;
    case "brand-sheet":
      return <BrandSheetPreview label={label} aspect={aspect} />;
    case "editorial-spread":
      return <EditorialSpreadPreview label={label} aspect={aspect} />;
    case "mobile-app":
      return <MobilePreview label={label} aspect={aspect} />;
    case "operations-dashboard":
      return <OperationsPreview label={label} aspect={aspect} />;
    case "data-card":
      return <DataCardPreview label={label} aspect={aspect} />;
    case "photography":
      return <PhotographyPreview label={label} aspect={aspect} />;
  }
}

/* ─── Marketing site ─── */
function MarketingSitePreview({ url, aspect }: { url: string; aspect: string }) {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: aspect }}
    >
      <ChromeBar url={url} />
      <div className="relative flex h-[calc(100%-44px)] flex-col px-7 py-6 md:px-10 md:py-8">
        <div className="flex items-center justify-between">
          <span className="font-display text-[12px] font-medium tracking-tight-display text-white md:text-[14px]">
            {url.split(".")[0]}
          </span>
          <div className="flex items-center gap-3 md:gap-5">
            {["WORK", "STUDIO", "JOURNAL", "CONTACT"].map((n) => (
              <span
                key={n}
                className="font-mono text-[7.5px] tracking-[0.22em] text-fog-muted md:text-[8.5px]"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-fog-muted md:text-[8.5px]">
            — Studio · Spring 2026
          </div>
          <div
            className="mt-3 max-w-[80%] font-display font-medium leading-[0.92] tracking-tightest text-white"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            Built for
            <br />
            <span className="italic font-light text-fog">the long form.</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/[0.04] pt-3 font-mono text-[7.5px] tracking-wider text-fog-muted md:text-[8px]">
          <span>© 2026</span>
          <span>FEATURED ↗</span>
        </div>
        <ScanLight />
        <TopInnerWash />
      </div>
    </div>
  );
}

/* ─── Platform console ─── */
function PlatformConsolePreview({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: aspect }}
    >
      <ChromeBar url="admin / console" />
      <div className="relative grid h-[calc(100%-44px)] grid-cols-12 gap-px bg-white/[0.03]">
        <aside className="col-span-12 hidden bg-ink-900/80 p-5 md:col-span-3 md:block">
          <div className="font-mono text-[8px] tracking-[0.22em] text-fog-muted">
            {label.toUpperCase()}
          </div>
          <div className="mt-3 space-y-1.5">
            {["Overview", "Pipeline", "Customers", "Revenue", "Reports"].map(
              (it, i) => (
                <div
                  key={it}
                  className={`flex items-center justify-between rounded-md px-2.5 py-2 text-[10.5px] ${
                    i === 0
                      ? "bg-white/[0.05] text-white"
                      : "text-fog hover:bg-white/[0.03]"
                  }`}
                >
                  <span>{it}</span>
                  {i === 0 && <span className="h-1 w-1 rounded-full bg-accent" />}
                </div>
              )
            )}
          </div>
        </aside>
        <main className="col-span-12 bg-ink-900/60 p-5 md:col-span-9 md:p-7">
          <div className="font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
            — Last 30 days
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-[36px] font-medium leading-none tracking-tightest text-white md:text-[44px]">
              +218%
            </span>
            <span className="text-[12px] text-fog-muted">qualified pipeline</span>
          </div>
          <svg viewBox="0 0 320 60" className="mt-4 h-[44px] w-full" aria-hidden>
            <defs>
              <linearGradient id="cl" x1="0" x2="1">
                <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#C8A96B" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M 0 50 L 24 46 L 48 48 L 72 38 L 96 40 L 120 30 L 144 32 L 168 22 L 192 26 L 216 16 L 240 18 L 264 8 L 288 11 L 320 4"
              fill="none"
              stroke="url(#cl)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-4">
            {[
              { l: "ARR", v: "$4.6M" },
              { l: "ROAS", v: "4.2×" },
              { l: "CAC", v: "−34%" },
            ].map((t) => (
              <div key={t.l}>
                <div className="font-mono text-[7.5px] tracking-[0.18em] text-fog-muted">
                  {t.l}
                </div>
                <div className="mt-1 font-display text-[16px] font-medium tracking-tight-display text-white">
                  {t.v}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <ScanLight />
      <TopInnerWash />
    </div>
  );
}

/* ─── Brand sheet ─── */
function BrandSheetPreview({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: aspect }}
    >
      <div className="relative grid h-full grid-cols-12 gap-px bg-white/[0.03]">
        <div className="col-span-12 flex flex-col bg-ink-900/80 p-7 md:col-span-7 md:p-10">
          <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
            <span>— IDENTITY · 01</span>
            <span>{label}</span>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <div
              className="font-display font-medium leading-[0.85] tracking-tightest text-white"
              style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
            >
              Wordmark
            </div>
            <div
              className="mt-1 font-display italic font-light leading-none tracking-tightest text-fog"
              style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
            >
              Primary
            </div>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["#0F1115", "#FFFFFF", "#C8A96B", "#7D8596", "#1A1410"].map(
              (c, i) => (
                <div
                  key={c}
                  className="aspect-square rounded-sm ring-1 ring-white/5"
                  style={{
                    background: c,
                    boxShadow:
                      i === 1 ? "inset 0 1px 0 rgba(0,0,0,0.04)" : undefined,
                  }}
                />
              )
            )}
          </div>
        </div>
        <div className="relative col-span-12 overflow-hidden bg-ink-900/80 md:col-span-5">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #2a221b 0%, #5a4733 35%, #1a1410 75%, #07070A 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-2/3 w-2/3 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(255,210,140,0.30), transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between font-mono text-[9px] tracking-[0.22em] text-white/65">
            <span>FIG. 04 · ELEV.</span>
            <span>MMXXVI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Editorial spread ─── */
function EditorialSpreadPreview({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: aspect }}
    >
      <div className="flex h-full flex-col p-7 md:p-10">
        <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
          <span>— {label.toUpperCase()}</span>
          <span>04 / 12</span>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div
            className="font-display font-medium leading-[0.92] tracking-tightest text-white"
            style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
          >
            The economics of
            <br />
            <span className="italic font-light text-fog">brand-led growth.</span>
          </div>
          <div className="mt-6 max-w-[480px] space-y-2">
            <div className="h-px w-full bg-white/10" />
            <div className="h-px w-[88%] bg-white/8" />
            <div className="h-px w-[72%] bg-white/8" />
            <div className="h-px w-[54%] bg-white/8" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/[0.05] pt-3 font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
          <span>WRITTEN BY G. PATEL</span>
          <span>ESSAY · 7 MIN ↗</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile app ─── */
function MobilePreview({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-ink-900/40"
      style={{ aspectRatio: aspect }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(168,136,74,0.10), rgba(15,17,21,0) 75%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="relative flex h-full items-center justify-center p-7 md:p-10">
        {/* Phone frame */}
        <div
          className="glass-strong relative overflow-hidden rounded-[28px] shadow-premium ring-1 ring-white/[0.08]"
          style={{ width: "min(220px, 36%)", aspectRatio: "9 / 19.5" }}
        >
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-2 font-mono text-[8px] tracking-wider text-white/70">
            <span>9:41</span>
            <span>{label.split("·")[0]}</span>
          </div>
          <div className="flex h-full flex-col px-4 pb-4 pt-9">
            <div className="font-mono text-[7px] tracking-[0.22em] text-fog-muted">
              — STUDIO · 2026
            </div>
            <div className="mt-3 font-display text-[20px] font-medium leading-[0.95] tracking-tightest text-white">
              Built for
              <br />
              <span className="italic font-light text-fog">the long form.</span>
            </div>
            <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-1">
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="font-mono text-[6.5px] tracking-[0.2em] text-fog">
                NOW · 2026
              </span>
            </div>
            <div className="mt-auto space-y-1">
              <div className="h-px w-full bg-white/8" />
              <div className="h-px w-[80%] bg-white/8" />
              <div className="h-px w-[60%] bg-white/8" />
            </div>
          </div>
          <div className="absolute inset-x-12 bottom-1 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

/* ─── Operations dashboard ─── */
function OperationsPreview({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: aspect }}
    >
      <ChromeBar url="ops / live" />
      <div className="relative h-[calc(100%-44px)] p-7 md:p-9">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
              — {label.toUpperCase()}
            </div>
            <div className="mt-2 font-display text-[24px] font-medium tracking-tight-display text-white md:text-[28px]">
              This week
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {["DAY", "WEEK", "MONTH"].map((r, i) => (
              <span
                key={r}
                className={`rounded-md px-2 py-0.5 font-mono text-[8px] tracking-[0.18em] ${
                  i === 1 ? "bg-white/[0.06] text-white" : "text-fog-muted"
                }`}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-7 gap-2 font-mono text-[7.5px] uppercase tracking-[0.2em] text-fog-muted">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
              <div key={d} className="text-center">
                {d}
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-7 gap-2">
            {[3, 5, 4, 6, 4, 7, 5].map((rooms, i) => (
              <div key={i} className="space-y-1">
                {Array.from({ length: rooms }).map((_, r) => (
                  <div
                    key={r}
                    className={`h-2 rounded-sm ${
                      r === 0 ? "bg-accent/60" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-4">
          {[
            { l: "Occupancy", v: "87%" },
            { l: "RevPAR", v: "$842" },
            { l: "On-time", v: "99.4%" },
          ].map((t) => (
            <div key={t.l}>
              <div className="font-mono text-[7.5px] tracking-[0.18em] text-fog-muted">
                {t.l.toUpperCase()}
              </div>
              <div className="mt-1 font-display text-[16px] font-medium tracking-tight-display text-white">
                {t.v}
              </div>
            </div>
          ))}
        </div>
        <ScanLight />
        <TopInnerWash />
      </div>
    </div>
  );
}

/* ─── Data card ─── */
function DataCardPreview({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: aspect }}
    >
      <div className="relative flex h-full flex-col p-8 md:p-10">
        <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
          <span>— {label.toUpperCase()}</span>
          <span className="text-emerald-300/80">LIVE</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
              QUARTERLY
            </div>
            <div
              className="mt-2 font-display font-medium leading-[0.95] tracking-tightest text-white"
              style={{ fontSize: "clamp(56px, 9vw, 130px)" }}
            >
              +218%
            </div>
            <div className="mt-3 font-mono text-[10px] tracking-[0.22em] text-fog">
              QUALIFIED PIPELINE · YOY
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/[0.05] pt-3 font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
          <span>YOY · TTM</span>
          <span>Q1 26 ↗</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Photography ─── */
function PhotographyPreview({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl ring-1 ring-white/[0.08]"
      style={{ aspectRatio: aspect }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, #2a221b 0%, #5a4733 35%, #1a1410 75%, #07070A 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 h-2/3 w-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(255,210,140,0.32), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 200 130"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <line
          x1="0"
          y1="98"
          x2="200"
          y2="98"
          stroke="rgba(245,238,225,0.20)"
          strokeWidth="0.4"
        />
        <path
          d="M 60 98 L 60 56 Q 100 32 140 56 L 140 98"
          fill="none"
          stroke="rgba(245,238,225,0.32)"
          strokeWidth="0.6"
        />
        <path
          d="M 64 98 L 64 58 Q 100 36 136 58 L 136 98 Z"
          fill="rgba(0,0,0,0.18)"
        />
        <ellipse
          cx="100"
          cy="86"
          rx="22"
          ry="9"
          fill="rgba(255,210,140,0.08)"
          filter="blur(6px)"
        />
      </svg>
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between font-mono text-[9px] tracking-[0.22em] text-white/70">
        <span>{label}</span>
        <span>MMXXVI</span>
      </div>
    </div>
  );
}
