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
      description="We work with a small number of partners on identity engagements each year. If you're at an inflection where the brand needs to move ahead of the company, we'd love to talk."
      primaryLabel="Start a brand"
      ghostLabel="Explore our work"
      ghostHref="/work"
      tone="warm"
    />
  );
}
