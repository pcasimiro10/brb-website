"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppleHealthCompatibility() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="text-base md:text-lg lg:text-xl font-bold text-text-light leading-tight max-w-xl">
              brb works with Apple Health<br />
              to track your steps automatically.<br />
              <br />
              Compatible with any wearable -<br />
              Apple Watch, Oura Ring, Whoop, and more.<br />
              <br />
              No wearable? No problem.<br />
              Just keep your iPhone in your pocket<br />
              and move.
            </p>
          </motion.div>

          {/* Right: Apple Watch Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xs">
              <Image
                src="/watch.png"
                alt="brb on Apple Watch with Works with Apple Health badge"
                width={400}
                height={480}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
