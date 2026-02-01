"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepCounter() {
  const baseSteps = 50000000;
  const [steps, setSteps] = useState(baseSteps);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  const stepsString = formatNumber(steps);
  const digits = stepsString.split('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-dark-secondary/90 backdrop-blur-sm border border-primary-green/30 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-baseline gap-2">
          <div className="flex items-center tabular-nums text-2xl md:text-3xl font-bold text-primary-green">
            <AnimatePresence mode="popLayout">
              {digits.map((digit, index) => (
                <motion.span
                  key={`${index}-${digit}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {digit}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
          <span className="text-sm md:text-base text-text-muted whitespace-nowrap">
            steps taken with brb
          </span>
        </div>
      </div>
    </motion.div>
  );
}
