"use client";

import { motion } from "framer-motion";

const devices = [
  { icon: "⌚", name: "Apple Watch" },
  { icon: "💍", name: "Oura Ring" },
  { icon: "🏃", name: "Garmin" },
  { icon: "📱", name: "Fitbit" },
  { icon: "💪", name: "Whoop" },
  { icon: "⚡", name: "COROS" },
  { icon: "🔄", name: "Amazfit" },
  { icon: "📊", name: "Polar" },
  { icon: "✨", name: "+ more" },
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

          {/* Icon Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-6 mb-12 max-w-4xl mx-auto">
            {devices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-200">
                  {device.icon}
                </div>
                <p className="text-xs md:text-sm text-text-muted group-hover:text-text-light transition-colors duration-200">
                  {device.name}
                </p>
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
