import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

