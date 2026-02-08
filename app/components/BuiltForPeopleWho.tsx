"use client";

import { motion } from "framer-motion";

const audiences = [
  "Want to prioritize movement and mental health",
  "Check social media before you even get out of bed",
  "Work from home and realize you've barely moved all day",
  "Set screen time limits, but always ignore them",
  "Want to build healthier habits that actually stick",
  "Doom scroll more than you'd like to admit (no judgment)",
];

export default function BuiltForPeopleWho() {
  return (
    <section className="py-32 px-6 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          Built For People Who...
        </motion.h2>

        <div className="space-y-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 py-4 px-6 rounded-lg hover:bg-dark-secondary/40 transition-all duration-300"
            >
              {/* Checkmark */}
              <svg 
                className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>

              {/* Text */}
              <p className="text-base md:text-lg text-text-light">
                {audience}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
