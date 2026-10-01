import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { ProcessSection } from '../components/ProcessSection';
import { WhyAlabsgoldSection } from '../components/WhyAlabsgoldSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenIntake: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenIntake }) => {
  useSEO({
    title: 'ALABSGOLD — Boutique Web Engineering Studio',
    description:
      'Boutique web engineering studio based in Lagos, Nigeria. We build high-speed web platforms, export compliance systems, and secure backend architectures for businesses operating across borders.',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'ALABSGOLD',
      alternateName: 'ALABSGOLD Engineering Studio',
      url: 'https://alabsgold.vercel.app',
      logo: 'https://alabsgold.vercel.app/favicon.svg',
      image: 'https://alabsgold.vercel.app/og-image.png',
      telephone: '+2347039960964',
      email: 'alabsgold31@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
      founder: {
        '@type': 'Person',
        name: 'Alabi Emmanuel',
        jobTitle: 'Lead Systems Architect & Founder',
      },
    },
  });

  return (
    <div className="space-y-0">
      {/* 1. Hero: One clear value proposition + one primary button */}
      <Hero onOpenIntake={() => onOpenIntake('Hero Consultation')} />

      {/* 2. Services: Core capabilities and deliverables */}
      <ServicesSection onSelectServiceForIntake={(title) => onOpenIntake(title)} />

      {/* 3. Selected Work & Case Studies: Production proofs (Kadie Fresh, NIRA-XT, Treasury) */}
      <CaseStudiesSection onOpenIntake={(ctx) => onOpenIntake(ctx)} />

      {/* 4. How We Work: 4 structured steps */}
      <ProcessSection onOpenIntake={(phase) => onOpenIntake(phase)} />

      {/* 5. Why ALABSGOLD: Trust pillars & invariants */}
      <WhyAlabsgoldSection onOpenIntake={(ctx) => onOpenIntake(ctx)} />

      {/* 6. Contact & Conversion: Simple enquiry form + WhatsApp */}
      <ContactSection />
    </div>
  );
};
