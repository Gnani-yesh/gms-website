import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { ContactHero } from "@/components/contact/hero";
import { ContactPanel } from "@/components/contact/panel";

export const metadata: Metadata = {
  title: "Contact — GMS",
  description:
    "Start a project with GMS — a small UK & India studio. You work directly with the founders on your website, platform, brand or growth.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <ContactHero />
      <ContactPanel />
      <Footer />
      <NetlifyShadowForm />
    </main>
  );
}

/**
 * Hidden static form so Netlify's build-time parser detects the "contact" form
 * and its full field list. The interactive wizard (client component) POSTs to
 * "/" with these exact field names + `form-name: contact`. Never shown or
 * filled by a real visitor. See wave-1-contact-fix.md.
 */
function NetlifyShadowForm() {
  return (
    <form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
      aria-hidden="true"
      {...{ netlify: "" }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="bot-field" />
      <input type="text" name="needs" />
      <input type="text" name="business-type" />
      <input type="text" name="business-type-other" />
      <input type="text" name="goal" />
      <input type="text" name="timeline" />
      <input type="text" name="budget" />
      <textarea name="notes" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="contact-method" />
      <input type="tel" name="phone" />
    </form>
  );
}
