import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import AppleHealthCompatibility from "./components/AppleHealthCompatibility";
import BuiltForPeopleWho from "./components/BuiltForPeopleWho";
import FinalCTA from "./components/FinalCTA";
import StepCounter from "./components/StepCounter";
import BackToTop from "./components/BackToTop";

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "brb - Walk to Unlock Apps",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://apps.apple.com/app/brb-walk-to-unlock-apps/id6757323160",
  description:
    "brb blocks your chosen apps every morning. As you walk and reach your daily step goal, your apps unlock. Move first, scroll later.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <main className="min-h-screen">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <KeyFeatures />
        <AppleHealthCompatibility />
        <BuiltForPeopleWho />
        <FinalCTA />
        <StepCounter />
        <BackToTop />
      </main>
    </>
  );
}

