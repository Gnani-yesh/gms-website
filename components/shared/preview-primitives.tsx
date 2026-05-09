/**
 * Shared primitives for site/platform preview cards used across service pages.
 */

export function ChromeBar({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 py-1">
        <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
        <span className="font-mono text-[9px] tracking-wider text-fog-muted">
          {url}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <span className="h-1 w-1 rounded-full bg-white/15" />
        <span className="h-1 w-1 rounded-full bg-white/15" />
        <span className="h-1 w-1 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

export function ScanLight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-scan opacity-[0.035]"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)",
      }}
    />
  );
}

export function TopInnerWash() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-40"
      style={{
        background:
          "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.04), transparent)",
      }}
    />
  );
}
