"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepCounter() {
  const baseSteps = 69143010;
  const [steps, setSteps] = useState(baseSteps);
  const prevStepsRef = useRef(baseSteps);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prev) => {
        prevStepsRef.current = prev;
        return prev + 4;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  const stepsString = formatNumber(steps);
  const prevStepsString = formatNumber(prevStepsRef.current);
  const digits = stepsString.split('');
  const prevDigits = prevStepsString.split('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 left-0 right-0 z-40 flex justify-center"
    >
      <div className="bg-dark-secondary/60 backdrop-blur-sm border border-white/5 rounded-full px-4 py-2 shadow-xl opacity-70">
        <div className="flex items-center gap-2">
          <div className="flex items-center tabular-nums text-base md:text-lg font-bold text-gray-400 min-w-fit">
            {digits.map((digit, index) => {
              const hasChanged = prevDigits[index] !== digit;
              // Only animate the last 3 digits (ones, tens, hundreds)
              const shouldAnimate = hasChanged && index >= digits.length - 3;
              return (
                <span key={index} className="inline-block relative h-[1.2em] w-[0.6em]">
                  {shouldAnimate ? (
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={`${index}-${digit}`}
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 5, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {digit}
                      </motion.span>
                    </AnimatePresence>
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center">{digit}</span>
                  )}
                </span>
              );
            })}
          </div>
          <span className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
            steps taken with brb
          </span>
        </div>
      </div>
    </motion.div>
  );
}
