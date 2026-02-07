import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import AppleHealthCompatibility from "./components/AppleHealthCompatibility";
import BuiltForPeopleWho from "./components/BuiltForPeopleWho";
import FinalCTA from "./components/FinalCTA";
import StepCounter from "./components/StepCounter";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <KeyFeatures />
      <AppleHealthCompatibility />
      <BuiltForPeopleWho />
      <FinalCTA />
      <StepCounter />
      <Footer />
      <BackToTop />
    </main>
  );
}

