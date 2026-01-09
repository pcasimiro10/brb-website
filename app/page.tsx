import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Differentiation from "./components/Differentiation";
import Features from "./components/Features";
import DeviceCompatibility from "./components/DeviceCompatibility";
import TargetAudience from "./components/TargetAudience";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <Differentiation />
      <Features />
      <DeviceCompatibility />
      <TargetAudience />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}

