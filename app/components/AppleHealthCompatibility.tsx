"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppleHealthCompatibility() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Text Content - Centered, No Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-text-light leading-relaxed">
              brb works with Apple Health to track your steps automatically. Compatible with any wearable or just your iPhone in your pocket.
            </p>
          </motion.div>

          {/* Apple Watch Mockup - Centered Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg"
          >
            <Image
              src="/watch.png"
              alt="brb on Apple Watch with Works with Apple Health badge"
              width={500}
              height={600}
              className="w-full h-auto drop-shadow-2xl mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
