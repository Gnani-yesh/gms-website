import { ServiceCTA } from "@/components/shared/service-cta";

export function WorkCTA() {
  return (
    <ServiceCTA
      eyebrow="— Become a partner"
      title={
        <>
          Add your company
          <br />
          to the{" "}
          <span className="italic font-light text-fog">next index.</span>
        </>
      }
      description="We take on a small number of new partners each year. If you're at an inflection where the work needs to be exceptional, we'd love to talk."
      primaryLabel="Start a project"
      ghostLabel="Read about the studio"
      ghostHref="/studio"
      tone="warm"
    />
  );
}
