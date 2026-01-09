"use client";

import { motion } from "framer-motion";

const devices = [
  "Apple Watch",
  "Fitbit",
  "Oura Ring",
  "Garmin",
  "Whoop",
  "Any HealthKit-compatible wearable",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Works with All Your Devices
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto">
            brb syncs with Apple Health, which means it works with virtually any step-tracking device
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {devices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-dark-secondary rounded-xl p-6 text-center"
              >
                <p className="text-lg font-medium">{device}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-green/10 border border-primary-green/30 rounded-2xl p-8"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary-green mb-3">
              No smartwatch? No problem.
            </p>
            <p className="text-lg text-text-muted">
              Your iPhone tracks steps automatically using its built-in motion sensors. Just keep your phone in your pocket and walk.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
