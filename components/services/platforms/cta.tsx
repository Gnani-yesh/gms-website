import { ServiceCTA } from "@/components/shared/service-cta";

export function PlatformsCTA() {
  return (
    <ServiceCTA
      eyebrow="— A platform with GMS"
      title={
        <>
          Build the operating system
          <br />
          your team{" "}
          <span className="italic font-light text-fog">actually works in.</span>
        </>
      }
      description="It's a small, two-person studio — you work directly with us. If your operations are stitched together with tools you don't fully own, we'd love to talk."
      primaryLabel="Start a platform"
      ghostLabel="Explore our work"
      ghostHref="/work"
      tone="cool"
    />
  );
}
