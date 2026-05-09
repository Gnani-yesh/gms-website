import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { StartProjectHero } from "@/components/start-project/hero";
import { StartProjectForm } from "@/components/start-project/form";

export const metadata: Metadata = {
  title: "Start a project — GMS",
  description:
    "Begin a project with GMS. A premium onboarding for ambitious modern businesses ready to build, grow and brand on one connected operating system.",
  alternates: { canonical: "/start-project" },
};

export default function StartProjectPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <StartProjectHero />
      <StartProjectForm />
      <Footer />
    </main>
  );
}
