/**
 * Shared page atmosphere — film grain + soft global vignette.
 * Used on every page to maintain cinematic visual continuity.
 */
export function PageAtmosphere() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </>
  );
}
