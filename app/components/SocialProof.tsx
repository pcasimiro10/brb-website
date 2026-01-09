"use client";

import { motion } from "framer-motion";

const results = [
  {
    stat: "40%",
    label: "More walking on average",
  },
  {
    stat: "2+ hours",
    label: "Less scrolling daily",
  },
  {
    stat: "Sustainable",
    label: "Habits that stick",
  },
];

export default function SocialProof() {
  return (
    <section className="py-32 px-6 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real Results
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            brb users see real changes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary-green mb-3">
                {result.stat}
              </div>
              <p className="text-lg md:text-xl text-text-muted">{result.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-3"
        >
          <p className="text-lg text-text-muted">Plus:</p>
          <ul className="text-lg text-text-muted space-y-2 max-w-2xl mx-auto">
            <li>Feel more energized and focused throughout the day</li>
            <li>Improve both mental and physical wellbeing</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
