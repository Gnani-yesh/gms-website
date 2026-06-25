import { ServiceCTA } from "@/components/shared/service-cta";

export function ServicesCTA() {
  return (
    <ServiceCTA
      eyebrow="— Engage with GMS"
      title={
        <>
          Build, grow and brand
          <br />
          on a{" "}
          <span className="italic font-light text-fog">
            single operating system.
          </span>
        </>
      }
      description="Most engagements run across two or three of our disciplines. We start with a 30-minute call to scope the work — no decks, no pitch theater."
      primaryLabel="Start a project"
      primaryHref="https://wa.me/447442559228?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20GMS%20and%20what%20you%20can%20build%20for%20my%20business."
      ghostLabel="See how we work"
      ghostHref="/process"
      tone="warm"
    />
  );
}
