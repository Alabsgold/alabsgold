import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenIntake: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenIntake }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Engagement', 'Technical', 'Security & IP', 'Delivery'];

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  return (
    <section id="faq" className="py-28 bg-[#09090b] relative border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>TRANSPARENCY & INQUIRIES</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently answered architecture questions.
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Straight answers for technical founders, CTOs, and product leaders evaluating an 
            engagement with ALABSGOLD.
          </p>
        </motion.div>

        {/* Category Filter with Motion */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-amber-400/10 border-amber-500 text-amber-400 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-[#111114] border-[#27272a] text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Radix Accordion */}
        <div className="mt-10">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="rounded-xl bg-[#111114] border border-[#27272a] overflow-hidden data-[state=open]:border-amber-500/50 transition-colors shadow-sm"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-zinc-200 hover:text-white transition-all cursor-pointer group">
                    <div className="flex items-center gap-3 pr-4">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700 flex-shrink-0">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-zinc-400 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="px-5 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 animate-accordion-down data-[state=open]:animate-in data-[state=open]:fade-in duration-200">
                  <p>{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Direct Contact Banner with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-[#111114] border border-[#27272a] hover:border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a specialized infrastructure challenge?</div>
              <div className="text-xs text-zinc-400">Direct technical consultations with our senior engineering leads.</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(245,158,11,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenIntake}
            className="px-4 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow cursor-pointer whitespace-nowrap"
          >
            Initiate Consultation
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
