import { ServiceCTA } from "@/components/shared/service-cta";

export function GrowthCTA() {
  return (
    <ServiceCTA
      eyebrow="— Growth with GMS"
      title={
        <>
          Build a growth engine
          <br />
          that{" "}
          <span className="italic font-light text-fog">
            keeps getting cheaper.
          </span>
        </>
      }
      description="You work directly with the two of us on the day-to-day growth work. If you're spending without a connected system, we'd love to talk."
      primaryLabel="Start with growth"
      ghostLabel="Explore our work"
      ghostHref="/work"
      tone="cool"
    />
  );
}
