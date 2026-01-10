"use client";

import { motion } from "framer-motion";

const deviceCategories = [
  {
    icon: "⌚",
    title: "Smartwatches",
    devices: ["Apple Watch", "Fitbit", "Garmin", "COROS"],
  },
  {
    icon: "💪",
    title: "Smart Wearables",
    devices: ["Oura Ring", "Whoop", "Amazfit"],
  },
  {
    icon: "📱",
    title: "Built-In Sensors",
    devices: ["No watch needed", "Automatic iPhone tracking"],
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            Compatible with All Your Wearables
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto">
            brb syncs with Apple Health, which means it works with virtually any step-tracking device
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {deviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-secondary to-dark-secondary/50 rounded-2xl p-8 text-center border border-primary-green/10 hover:border-primary-green/30 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/10"
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <div className="text-sm text-text-muted space-y-1">
                  {category.devices.map((device, idx) => (
                    <p key={idx}>{device}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

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
