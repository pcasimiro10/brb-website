"use client";

import { motion } from "framer-motion";

const audiences = [
  "Check Instagram before you even get out of bed",
  "Have a Fitbit/Apple Watch but rarely hit your step goal",
  "Work from home and realize you've barely moved all day",
  "Set Screen Time limits but always ignore them",
  "Want to be more active but can't afford a gym membership",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            {`You'll Love brb If You...`}
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            {`Sound familiar? You're exactly who we built this for.`}
          </p>

          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 text-left bg-dark-secondary rounded-xl p-6 hover:bg-dark-secondary/80 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/10"
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
