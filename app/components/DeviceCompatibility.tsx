"use client";

import { motion } from "framer-motion";

const devices = [
  "Apple Watch",
  "Oura Ring",
  "Garmin",
  "Fitbit",
  "Whoop",
  "COROS",
  "Amazfit",
  "Polar",
  "& more",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            Compatible with All Your Wearables
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto">
            brb syncs with Apple Health for accurate step tracking
          </p>

          {/* Badge Grid */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
            {devices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-primary-green/20 rounded-full px-5 py-2.5 text-sm md:text-base text-text-light hover:border-primary-green/50 hover:bg-primary-green/5 transition-all duration-200 cursor-default"
              >
                {device}
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
