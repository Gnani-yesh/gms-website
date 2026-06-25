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
      primaryHref="https://wa.me/447442559228?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20GMS%20and%20what%20you%20can%20build%20for%20my%20business."
      ghostLabel="Read about the studio"
      ghostHref="/studio"
      tone="cool"
    />
  );
}
