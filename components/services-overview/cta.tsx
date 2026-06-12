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
      primaryHref="mailto:gnanimarketingsolutions@gmail.com?subject=Start a Project — GMS"
      ghostLabel="See how we work"
      ghostHref="/process"
      tone="warm"
    />
  );
}
