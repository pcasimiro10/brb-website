"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Next Scroll Starts With Your Next Step
          </h2>
          <p className="text-xl md:text-2xl text-text-muted mb-8">
            Join thousands of people who are walking more and scrolling less.
          </p>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-green/20 mb-12 max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-text-light italic mb-4">
              &quot;I&apos;ve walked more in the last 2 weeks than I did all last month. This app actually works.&quot;
            </p>
            <p className="text-sm text-text-muted">— Sarah M.</p>
          </motion.div>

          <div className="flex flex-col items-center gap-3">
            <a href="#">
              <Image
                src="/app-store-badge.png"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <p className="text-sm text-text-muted">Start your free 7-day trial</p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-dark-secondary/50">
            <p className="text-sm text-text-muted">
              Privacy First: Your health data stays entirely on your device
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

