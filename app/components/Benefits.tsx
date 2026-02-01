"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: "40",
    suffix: "%",
    label: "More steps\ndaily",
  },
  {
    value: "2",
    suffix: "+ hrs",
    label: "Less scrolling\ndaily",
  },
  {
    value: "100",
    suffix: "%",
    label: "Put movement\nbefore screen time",
  },
];

function CountUpNumber({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value);

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-green" style={{ textShadow: '0 0 40px rgba(191, 242, 77, 0.3)' }}>
      {isNaN(numericValue) ? value : count}
      {suffix}
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-base md:text-lg text-text-light mt-4 whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-text-light italic mb-3">
            {`"I've walked more in the last 2 weeks than I did all last month. This app actually works."`}
          </p>
          <p className="text-sm text-text-muted">- Christine C.</p>
        </motion.div>
      </div>
    </section>
  );
}
