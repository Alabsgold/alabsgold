export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  metrics: string;
  architectureHighlights: string[];
  techStack: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  region: string;
  timeline: string;
  headline: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  architecturePoints: string[];
  tags: string[];
  liveUrl?: string;
  role?: string;
  whatMadeThisSpecial?: string;
  awardBadge?: string;
  statusBadge?: string;
}

export interface SelectedWorkItem {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  tags: string[];
  status: 'Live' | 'Completed' | 'In Development';
  category: 'Enterprise Platform' | 'AI & LLM' | 'Academic & CBT' | 'Atlassian Ecosystem' | 'Data & Financial';
  repoUrl?: string;
}

export interface DesignBrandItem {
  id: string;
  name: string;
  category: string;
  description: string;
  tools: string[];
  status: string;
}

export interface ExperimentItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'Practice Assessment Completed' | 'Applied / Mentorship Portfolio';
}

export interface TechCategory {
  category: string;
  description: string;
  technologies: {
    name: string;
    role: string;
    badge?: string;
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Engagement' | 'Technical' | 'Security & IP' | 'Delivery';
}

export interface SimulationStep {
  id: string;
  title: string;
  location: string;
  node: string;
  status: 'pending' | 'processing' | 'verified' | 'complete';
  latencyMs: number;
  details: string;
  protocol: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  priceNGN: string;
  priceIntl: string;
  billingPeriod: string;
  shortDesc: string;
  idealFor: string;
  features: string[];
  deliverables: string[];
  turnaround: string;
  highlighted?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  pricingModel: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics: string;
  licenseDetails: string;
  status: 'Production Ready' | 'Active Release' | 'Beta Available';
}

export interface IntakeFormData {
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  country: string;
  projectType: string;
  budgetRange: string;
  description: string;
}
