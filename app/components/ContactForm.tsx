"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    if (searchParams.get("waitlist") === "android") {
      setFormData({
        email: "",
        message:
          "Add me to the Android waitlist. I'm ready to move more and scroll less.",
      });
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact from ${formData.email}`);
    const body = encodeURIComponent(
      `Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:berightbackapp@gmail.com?subject=${subject}&body=${body}`;

    setStatus("success");

    setTimeout(() => {
      setFormData({ email: "", message: "" });
      setStatus("idle");
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>

      <p className="text-text-muted text-lg mb-12">
        {`Have a question or feedback about brb? We'd love to hear from you.`}
      </p>

      {status === "success" && (
        <div className="bg-primary-green/20 border border-primary-green text-primary-green rounded-lg p-4 mb-8">
          Thanks! Your email client should open with your message.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-text-light mb-2">
            Email (required)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-dark-secondary border border-text-muted/20 rounded-lg px-4 py-3 text-text-light placeholder-text-muted focus:outline-none focus:border-primary-green transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-text-light mb-2">
            Message (required)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-dark-secondary border border-text-muted/20 rounded-lg px-4 py-3 text-text-light placeholder-text-muted focus:outline-none focus:border-primary-green transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary-green text-dark-bg font-bold text-lg px-8 py-3 rounded-full hover:bg-primary-green/90 transition-all duration-300 hover:scale-105"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>
          <p className="text-text-muted text-lg mb-12">Loading...</p>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
