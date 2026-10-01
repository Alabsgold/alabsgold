import React, { useState } from 'react';
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
  title = 'Frequently Answered Questions',
  subtitle = 'Definitive answers covering our delivery process, timeline SLAs, and milestone payment structures.',
  className = '',
  id = 'faq',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);

  const categories = [
    { label: 'All Questions', value: 'All', icon: HelpCircle },
    { label: 'Engagement Models', value: 'Engagement Models', icon: Layers },
    { label: 'Project Timelines', value: 'Project Timelines', icon: Clock },
    { label: 'Payment Structures', value: 'Payment Structures', icon: CreditCard },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  return (
    <section id={id} className={`py-16 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md rounded-3xl border border-white/40 dark:border-white/10 p-6 sm:p-10 ${className}`}>
      <div className="max-w-4xl mx-auto relative z-10">
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>COMMERCIAL & TECHNICAL GOVERNANCE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>
        )}

        {/* Category Filter Pills: OS 26 Liquid Glass */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-200/50 dark:bg-white/[0.04] backdrop-blur-xl rounded-full border border-white/40 dark:border-white/10 w-fit mx-auto mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-white dark:bg-white/20 text-slate-900 dark:text-white font-semibold shadow-sm'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions: OS 26 Liquid Glass */}
        <Accordion.Root type="single" collapsible className="space-y-3">
          {filteredFaqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-sm transition-all"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer group">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-data-[state=open]:rotate-180 transition-transform duration-200 shrink-0 ml-3" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal border-t border-slate-200/60 dark:border-white/5">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* Bottom Help Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-600 dark:text-zinc-300 text-center sm:text-left">
            Have a specific requirement not addressed in our governance documentation?
          </div>
          <a
            href={STUDIO_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 font-bold hover:underline whitespace-nowrap"
          >
            Ask Founder on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
