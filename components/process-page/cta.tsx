import { ServiceCTA } from "@/components/shared/service-cta";

export function ProcessCTA() {
  return (
    <ServiceCTA
      eyebrow="— Engage with GMS"
      title={
        <>
          Move from{" "}
          <span className="italic font-light text-fog">briefs and decks</span>
          <br />
          to a system that ships.
        </>
      }
      description="Tell us where the company is, where you'd like it to be in 12 months, and what's in the way. We'll respond within two business days."
      primaryLabel="Start a project"
      primaryHref="/start-project"
      ghostLabel="Read about the studio"
      ghostHref="/studio"
      tone="cool"
    />
  );
}
