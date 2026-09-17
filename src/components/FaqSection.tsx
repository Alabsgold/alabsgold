import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { FAQS, STUDIO_DATA } from '../data/content';
import { ChevronDown, HelpCircle, MessageSquare, Clock, CreditCard, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenIntake?: () => void;
  defaultCategory?: string;
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenIntake,
  defaultCategory = 'All',
  showHeader = true,
  title = 'Frequently Answered Architecture & Commercial Questions',
  subtitle = 'Definitive operational answers covering our engagement models, timeline SLAs, and transparent milestone payment structures.',
  className = '',
  id = 'faq',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);

  const categories = [
    { label: 'All Questions', value: 'All', icon: HelpCircle },
    { label: 'Engagement Models', value: 'Engagement Models', icon: Layers },
    { label: 'Project Timelines', value: 'Project Timelines', icon: Clock },
    { label: 'Payment Structures', value: 'Payment Structures', icon: CreditCard },
    { label: 'Technical Architecture', value: 'Technical Architecture', icon: ShieldCheck },
    { label: 'Security & Ownership', value: 'Security & Ownership', icon: ShieldCheck },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  return (
    <section id={id} className={`py-24 sm:py-28 bg-[#09090b] relative border-t border-[#27272a] ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span className="tracking-wider uppercase">COMMERCIAL & TECHNICAL GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {subtitle}
            </p>
          </motion.div>
        )}

        {/* Category Filter Pills */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-400 text-black font-semibold border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                    : 'bg-[#111114] border-[#27272a] text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Radix UI Accordion */}
        <div className="mt-10">
          <Accordion.Root type="single" collapsible defaultValue={filteredFaqs[0]?.id} className="space-y-3.5">
            {filteredFaqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="rounded-2xl bg-[#111114] border border-[#27272a] overflow-hidden data-[state=open]:border-amber-500/50 transition-all duration-200 shadow-sm hover:border-zinc-700"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-semibold text-zinc-200 hover:text-white transition-all cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-4">
                      {faq.tag && (
                        <span className="w-fit text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
                          {faq.tag}
                        </span>
                      )}
                      <span className="group-hover:text-amber-300 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1 rounded-lg bg-zinc-800/80 group-hover:bg-amber-400/20 text-zinc-400 group-hover:text-amber-400 transition-colors flex-shrink-0">
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 bg-[#0d0d10]/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200">
                  <p className="font-normal text-zinc-300 text-sm leading-relaxed">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Direct Technical Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors shadow-lg"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                Have a unique project timeline or custom deployment constraint?
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Speak directly with Founder & Lead Engineer Alabi Emmanuel for an architectural review.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
            {onOpenIntake && (
              <button
                onClick={onOpenIntake}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow cursor-pointer whitespace-nowrap text-center"
              >
                Initiate Project Scoping
              </button>
            )}
            <a
              href={`https://wa.me/${STUDIO_DATA.whatsappNumber}?text=${encodeURIComponent(
                'Hello Alabi, I am reviewing the ALABSGOLD FAQ and would like to discuss engagement models for our project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono text-zinc-300 hover:text-white bg-[#18181b] hover:bg-zinc-800 border border-[#27272a] hover:border-amber-500/40 rounded-xl transition-all text-center cursor-pointer"
            >
              Direct WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
