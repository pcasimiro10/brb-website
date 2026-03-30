"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqSections } from "../faq/faqData";

export default function FAQAccordion() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set([0])
  );
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
    const key = `${sectionIndex}-${questionIndex}`;
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedQuestions(newExpanded);
  };

  return (
    <div className="space-y-6">
      {faqSections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="bg-dark-secondary rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => toggleSection(sectionIndex)}
            className="w-full flex items-center justify-between p-6 hover:bg-dark-secondary/80 transition-colors"
            aria-expanded={expandedSections.has(sectionIndex)}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">
                {section.emoji}
              </span>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <motion.div
              animate={{ rotate: expandedSections.has(sectionIndex) ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-3xl text-primary-green"
              aria-hidden="true"
            >
              +
            </motion.div>
          </button>

          <AnimatePresence>
            {expandedSections.has(sectionIndex) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const key = `${sectionIndex}-${faqIndex}`;
                    const isExpanded = expandedQuestions.has(key);

                    return (
                      <div
                        key={faqIndex}
                        className="border-t border-text-muted/10 pt-4"
                      >
                        <button
                          onClick={() =>
                            toggleQuestion(sectionIndex, faqIndex)
                          }
                          className="w-full flex items-start justify-between gap-4 text-left hover:text-primary-green transition-colors"
                          aria-expanded={isExpanded}
                        >
                          <span className="text-lg font-medium flex-1">
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-2xl text-primary-green flex-shrink-0"
                            aria-hidden="true"
                          >
                            +
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="text-text-muted leading-relaxed mt-3 whitespace-pre-line">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
