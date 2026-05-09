import { cn } from "@/lib/utils";

type Tone = "warm" | "cool" | "magenta" | "neutral";
type Position =
  | "top-left"
  | "top-right"
  | "top-center"
  | "center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

const TONES: Record<Tone, string> = {
  warm: "rgba(200, 169, 107, 0.10)",
  cool: "rgba(61, 107, 255, 0.09)",
  magenta: "rgba(185, 70, 200, 0.08)",
  neutral: "rgba(255, 255, 255, 0.04)",
};

const POSITIONS: Record<Position, React.CSSProperties> = {
  "top-left": { left: "-18%", top: "-22%" },
  "top-right": { right: "-18%", top: "-22%" },
  "top-center": { left: "50%", top: "-15%", transform: "translateX(-50%)" },
  center: { left: "50%", top: "50%", transform: "translate(-50%,-50%)" },
  "bottom-left": { left: "-18%", bottom: "-22%" },
  "bottom-right": { right: "-18%", bottom: "-22%" },
  "bottom-center": { left: "50%", bottom: "-15%", transform: "translateX(-50%)" },
};

interface SectionAuraProps {
  tone?: Tone;
  position?: Position;
  size?: number;
  className?: string;
  drift?: boolean;
}

/**
 * A restrained ambient glow used to give sections atmospheric variation
 * without ever showing a hard background change. Always pointer-events-none.
 */
export function SectionAura({
  tone = "warm",
  position = "top-right",
  size = 820,
  className,
  drift = false,
}: SectionAuraProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "ambient",
        drift && "animate-ambient-drift",
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(closest-side, ${TONES[tone]}, transparent)`,
        ...POSITIONS[position],
      }}
    />
  );
}
