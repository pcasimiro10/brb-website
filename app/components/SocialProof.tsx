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
    suffix: "+ hours",
    label: "Less daily\nscreen time",
  },
  {
    value: "67",
    suffix: " days",
    label: "Average\nstreak",
  },
];

const testimonials = [
  {
    quote: "I've walked more in the last 2 weeks than I did all last month. This app actually works.",
    author: "Christine C.",
  },
  {
    quote: "Screen time dropped from 5 hours to 90 minutes. Steps went from 3K to 10K daily. I love this app.",
    author: "Sam K.",
  },
  {
    quote: "I was averaging 2,500 steps a day. Now I'm at 12K. Can't believe how simple it was.",
    author: "Jordan P.",
  },
  {
    quote: "Didn't realize how sedentary I was until this app. From 2K steps to 11K daily. Actually life-changing.",
    author: "Taylor M.",
  },
];

function CountUpNumber({ value, suffix }: { value: string; suffix: string }) {
  const numericValue = parseInt(value);
  // Initialise with final value so SSR HTML shows the real number, not 0
  const [count, setCount] = useState(isNaN(numericValue) ? 0 : numericValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isNaN(numericValue) && !hasAnimated) {
      setHasAnimated(true);
      setCount(0);
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
  }, [isInView, numericValue, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-green" style={{ textShadow: '0 0 40px rgba(191, 242, 77, 0.3)' }}>
      {isNaN(numericValue) ? value : count}
      {suffix}
    </div>
  );
}

export default function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per testimonial

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-32 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          Real Results
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
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

        {/* Single Large Testimonial Carousel */}
        <div 
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Testimonial Content */}
            <div className="flex flex-col items-center text-center min-h-[280px] justify-center">
              {/* 5 Stars */}
              <motion.div
                key={`stars-${activeTestimonial}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex gap-1 mb-8"
              >
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </motion.div>
              
              {/* Quote */}
              <motion.p
                key={`quote-${activeTestimonial}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl text-text-light italic mb-8 max-w-2xl leading-relaxed"
              >
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </motion.p>
              
              {/* Author */}
              <motion.p
                key={`author-${activeTestimonial}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base text-text-muted"
              >
                - {testimonials[activeTestimonial].author}
              </motion.p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-dark-secondary hover:bg-primary-green/20 flex items-center justify-center text-text-light hover:text-primary-green transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-dark-secondary hover:bg-primary-green/20 flex items-center justify-center text-text-light hover:text-primary-green transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-primary-green w-8'
                    : 'bg-text-muted hover:bg-text-light'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
