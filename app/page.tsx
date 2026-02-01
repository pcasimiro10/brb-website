import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import AppleHealthCompatibility from "./components/AppleHealthCompatibility";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <AppleHealthCompatibility />
      <Footer />
      <BackToTop />
    </main>
  );
}

