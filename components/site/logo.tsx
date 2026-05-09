import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className, showSubtitle = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="GMS — Gnani Marketing Solutions"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="font-display text-[18px] font-medium tracking-tight-display text-white">
        GMS
      </span>
      {showSubtitle && (
        <span className="mt-[3px] font-mono text-[9.5px] uppercase tracking-[0.22em] text-fog-muted transition-colors group-hover:text-fog">
          Gnani Marketing Solutions
        </span>
      )}
    </Link>
  );
}
