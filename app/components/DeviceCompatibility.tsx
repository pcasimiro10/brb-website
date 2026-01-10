"use client";

import { motion } from "framer-motion";

const deviceCategories = [
  {
    title: "Smartwatches",
    devices: ["Apple Watch", "Garmin", "Fitbit", "COROS", "Amazfit", "Polar"],
  },
  {
    title: "Smart Rings",
    devices: ["Oura Ring", "Circular", "Ultrahuman"],
  },
  {
    title: "Fitness Bands",
    devices: ["Whoop", "Mi Band", "& more"],
  },
];

export default function DeviceCompatibility() {
  return (
    <section className="py-32 px-6 bg-dark-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12">
            Compatible with All Wearables
          </h2>

          {/* Category Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {deviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-green/10 hover:border-primary-green/30 hover:bg-dark-secondary/80 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-text-light mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.devices.map((device, idx) => (
                    <li key={idx} className="text-sm text-text-muted">
                      {device}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* iPhone Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-green/10 border border-primary-green/30 rounded-2xl p-8 hover:bg-primary-green/15 transition-all duration-300"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary-green mb-3">
              No Smartwatch? No Problem.
            </p>
            <p className="text-lg text-text-muted mb-2">
              Your iPhone tracks steps automatically using its built-in motion sensors. Just keep your phone in your pocket and move.
            </p>
            <p className="text-base text-text-muted/80 italic">
              {`56% of brb users don't own a smartwatch.`}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
