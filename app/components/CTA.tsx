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
            Earn Your Apps Back
          </h2>
          <p className="text-xl md:text-2xl text-text-muted mb-8">
            Join thousands of people who are moving more and scrolling less.
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
              {`"I've walked more in the last 2 weeks than I did all last month. This app actually works."`}
            </p>
            <p className="text-sm text-text-muted">— Christine C.</p>
          </motion.div>

          <div className="flex flex-col items-center">
            <a href="#">
              <Image
                src="/app-store-badge.png"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

