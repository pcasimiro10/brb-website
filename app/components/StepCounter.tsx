"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StepCounter() {
  // Starting number (can be adjusted based on actual data)
  const baseSteps = 50000000; // 50 million steps as starting point
  const [steps, setSteps] = useState(baseSteps);

  useEffect(() => {
    // Increment by approximately 1000 steps every second
    // (simulates collective user activity)
    const interval = setInterval(() => {
      setSteps((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-baseline gap-2 text-text-muted">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-green tabular-nums">
            {formatNumber(steps)}
          </span>
          <span className="text-lg md:text-xl lg:text-2xl">
            steps taken with brb
          </span>
        </div>
      </div>
    </motion.div>
  );
}
