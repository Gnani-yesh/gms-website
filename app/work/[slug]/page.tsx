import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { CASE_STUDIES, getCaseStudy, getNextCaseStudy } from "@/lib/case-studies";

import { CaseStudyHero } from "@/components/case-study/hero";
import { CaseStudyOverview } from "@/components/case-study/overview";
import { CaseStudyChallenge } from "@/components/case-study/challenge";
import { CaseStudySolution } from "@/components/case-study/solution";
import { CaseStudySystems } from "@/components/case-study/systems";
import { CaseStudyResults } from "@/components/case-study/results";
import { CaseStudyGallery } from "@/components/case-study/gallery";
import { CaseStudyTestimonial } from "@/components/case-study/testimonial";
import { CaseStudyMetrics } from "@/components/case-study/metrics";
import { CaseStudyNext } from "@/components/case-study/next";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case study — GMS" };
  return {
    title: `${study.client} — Case study · GMS`,
    description: study.overview.summary,
    openGraph: {
      title: `${study.client} — ${study.hero.title} ${study.hero.italic}`,
      description: study.overview.summary,
      type: "article",
    },
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);
  if (!study) return notFound();

  const next = getNextCaseStudy(study.slug);

  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <CaseStudyHero study={study} />
      <CaseStudyOverview study={study} />
      <CaseStudyChallenge study={study} />
      <CaseStudySolution study={study} />
      <CaseStudySystems study={study} />
      <CaseStudyResults study={study} />
      <CaseStudyGallery study={study} />
      <CaseStudyTestimonial study={study} />
      <CaseStudyMetrics study={study} />
      <CaseStudyNext next={next} />
      <Footer />
    </main>
  );
}
