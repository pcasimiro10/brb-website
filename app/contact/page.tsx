import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – brb app",
  description:
    "Get in touch with the brb team. Questions, feedback, bug reports, or feature requests — we read every message.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-light px-6 py-20">
      <ContactForm />
    </div>
  );
}
