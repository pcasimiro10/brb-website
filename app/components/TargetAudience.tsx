"use client";

import { motion } from "framer-motion";

const audiences = [
  "People who want to walk more but struggle with motivation",
  "Anyone caught in the doom-scrolling cycle",
  "Desk workers who need a reason to get up and move",
  "Users who have tried other screen time apps without success",
  "Anyone seeking a healthier relationship with their phone",
];

export default function TargetAudience() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            Perfect For
          </h2>

          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 text-left bg-dark-secondary rounded-xl p-6"
              >
                <div className="flex-shrink-0 text-2xl text-primary-green">✓</div>
                <p className="text-lg md:text-xl text-text-muted flex-1">{audience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
