import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Quick answers to common voter concerns.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all hover:border-blue-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-btn-${i}`}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{faq.question}</span>
                <div className={cn(
                  "p-1 rounded-lg transition-all",
                  openIndex === i ? 'bg-blue-50 text-blue-600 rotate-180' : 'text-gray-400 group-hover:text-blue-600'
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed font-sans">
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
