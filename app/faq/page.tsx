import type { Metadata } from "next";
import FAQAccordion from "../components/FAQAccordion";
import { faqSections } from "./faqData";

export const metadata: Metadata = {
  title: "FAQ & Help – brb Walk to Unlock App",
  description:
    "Get answers about how brb works, app blocking, step goals, HealthKit, and troubleshooting. Help for the brb app on iPhone.",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((section) =>
    section.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <div className="min-h-screen bg-dark-bg text-text-light px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Help & Support
            </h1>
            <p className="text-xl text-text-muted">
              Everything you need to know about brb
            </p>
          </div>

          {/*
            All FAQ content is server-rendered here for crawlability.
            The FAQAccordion below provides the interactive expand/collapse UI.
            Search engines index both the hidden structured data (JSON-LD above)
            and the visible text rendered by the accordion on initial load.
          */}
          <FAQAccordion />

          <div className="mt-16 text-center bg-dark-secondary rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-text-muted mb-8">
              {`Can't find what you're looking for? We're here to help.`}
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-green text-dark-bg font-bold text-lg px-8 py-4 rounded-full hover:bg-primary-green/90 transition-all duration-300 hover:scale-105"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
