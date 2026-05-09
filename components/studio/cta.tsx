import { ServiceCTA } from "@/components/shared/service-cta";

export function StudioCTA() {
  return (
    <ServiceCTA
      eyebrow="— Work with us"
      title={
        <>
          Quiet studio.
          <br />
          <span className="italic font-light text-fog">Loud results.</span>
        </>
      }
      description="We take on a small number of new partners each year. If our principles match how you'd want the work to feel, we'd love to talk."
      primaryLabel="Start a project"
      ghostLabel="See selected work"
      ghostHref="/work"
      tone="warm"
    />
  );
}
