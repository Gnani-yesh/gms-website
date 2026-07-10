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
      description="You work directly with the two of us, not an account manager. If you're at a point where the work needs to be really good, we'd love to talk."
      primaryLabel="Start a project"
      ghostLabel="Read about the studio"
      ghostHref="/studio"
      tone="warm"
    />
  );
}
