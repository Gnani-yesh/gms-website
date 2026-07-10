import { ServiceCTA } from "@/components/shared/service-cta";

export function BrandingCTA() {
  return (
    <ServiceCTA
      eyebrow="— A brand with GMS"
      title={
        <>
          Build a brand
          <br />
          your category{" "}
          <span className="italic font-light text-fog">won&apos;t outgrow.</span>
        </>
      }
      description="It's a two-person studio, so you work directly with the people doing the work. If you're at a point where the brand needs to move ahead of the company, we'd love to talk."
      primaryLabel="Start a brand"
      ghostLabel="Explore our work"
      ghostHref="/work"
      tone="warm"
    />
  );
}
