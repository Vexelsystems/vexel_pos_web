"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Vexel POS?",
    answer:
      "Vexel POS is a billing and inventory management system designed for retail and wholesale businesses in Sri Lanka. It handles everything from stock tracking to sales reporting with local tax support.",
  },
  {
    question: "Does Vexel Systems provide web development services?",
    answer:
      "Yes, Vexel Systems offers custom web development including modern landing pages, robust web applications, and feature-rich e-commerce solutions tailored for your business growth.",
  },
  {
    question: "What AI integration services does Vexel Systems offer?",
    answer:
      "We provide various AI services including custom chatbot development, intelligent business automation, predictive data analytics, and integration of LLMs into existing business workflows.",
  },
  {
    question: "Does Vexel POS support wholesale businesses?",
    answer:
      "Absolutely. Vexel POS includes dedicated features for wholesale, such as bulk pricing tiers, customer credit management, supplier debt tracking, and advanced inventory forecasting.",
  },
  {
    question: "Can Vexel Systems develop custom software solutions?",
    answer:
      "Yes, custom software development is our specialty. Whether you need a unique CRM, a specialized management tool, or a proprietary automation platform, we build it from the ground up.",
  },
  {
    question: "Is Vexel Systems available in Sri Lanka?",
    answer:
      "Yes, we are a Sri Lanka-based company located in Vavuniya. We provide nationwide support and services with consultants available for both remote and on-site meetings.",
  },
];

export default function FaqClient() {
  /**
   * ACCORDION STATE MACHINE
   * Strategy: Index-based toggle.
   * Logic:
   * 1. track 'openIndex' (number | null).
   * 2. If clicking already open, set to null (close all).
   * 3. Defaults to 0 (first item open) to encourage interaction.
   */
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-transparent transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Common <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 font-bold max-w-2xl mx-auto">
            Everything you need to know about our products, services, and how we
            help businesses in Sri Lanka scale.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl overflow-hidden transition-all shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-black text-slate-800 dark:text-slate-200 tracking-tight group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-xl transition-colors ${openIndex === index ? "bg-primary text-white" : "bg-slate-50 dark:bg-zinc-800 text-slate-400"}`}
                >
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
