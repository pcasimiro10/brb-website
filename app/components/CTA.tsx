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
            Ready to earn your apps?
          </h2>
          <p className="text-xl md:text-2xl text-text-muted mb-12">
            Download brb and start moving today.
          </p>
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

