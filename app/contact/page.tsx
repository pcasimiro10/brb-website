"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open user's email client
    window.location.href = `mailto:betterdailyapp@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setStatus("success");
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
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
    <div className="min-h-screen bg-dark-bg text-text-light px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>
        
        <p className="text-text-muted text-lg mb-12">
          Have a question or feedback about brb? We'd love to hear from you.
        </p>

        {status === "success" && (
          <div className="bg-primary-green/20 border border-primary-green text-primary-green rounded-lg p-4 mb-8">
            Thanks! Your email client should open with your message.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-text-light mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-dark-secondary border border-text-muted/20 rounded-lg px-4 py-3 text-text-light placeholder-text-muted focus:outline-none focus:border-primary-green transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-text-light mb-2">
              Email
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
              Message
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

        <div className="mt-16 pt-8 border-t border-dark-secondary text-center">
          <Link href="/" className="text-text-muted hover:text-text-light transition-colors">
            Home
          </Link>
          <span className="text-text-muted mx-4">|</span>
          <Link href="/privacy" className="text-text-muted hover:text-text-light transition-colors">
            Privacy
          </Link>
          <span className="text-text-muted mx-4">|</span>
          <Link href="/terms" className="text-text-muted hover:text-text-light transition-colors">
            Terms
          </Link>
          <span className="text-text-muted mx-4">|</span>
          <Link href="/contact" className="text-text-muted hover:text-text-light transition-colors">
            Contact
          </Link>
          <p className="text-text-muted text-sm mt-6">© 2025 brb. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

