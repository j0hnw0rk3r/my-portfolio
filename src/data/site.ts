/**
 * Single source of truth for site-wide profile + content data.
 * Replace placeholder values with the real developer profile.
 */

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  url?: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export interface ProjectSummary {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  year: number;
}

export const site = {
  name: 'John Lopena',
  role: 'Full-Stack Developer',
  tagline: 'Building fast, scalable web products with TypeScript, Node.js, and modern frontends.',
  description:
    'Full-stack developer specializing in TypeScript, Node.js, and high-performance web applications. I design and ship resilient backends, accessible UIs, and SEO-optimized sites.',
  url: 'https://example.com',
  email: 'johnrlopena@gmail.com',
  location: 'Remote',
  locale: 'en_US',
  language: 'en',
  ogImage: '/og-image.svg',
  resume: '/resume.pdf',
} as const;

export const social: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/j0hnw0rk3r', handle: '@j0hnw0rk3r' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johnreylopena86', handle: 'in/johnreylopena86' },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Fastify', 'NestJS', 'GraphQL', 'REST', 'WebSockets'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Astro', 'Vue', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'React Native', 'Expo', 'iOS', 'Android', 'Push Notifications', 'App Store / Play Store'],
  },
  {
    category: 'AI & Agents',
    items: ['Anthropic Claude', 'OpenAI', 'LLM Tooling', 'Agentic Workflows', 'RAG', 'Vector DBs', 'MCP'],
  },
  {
    category: 'Data & Infra',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
  },
  {
    category: 'Practices',
    items: ['SSR / SSG', 'SEO', 'Core Web Vitals', 'CI/CD', 'TDD', 'Observability'],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Devion',
    start: '2020',
    end: 'Present',
    summary:
      'Full-stack developer building internal and client-facing products across call center, CRM, CMS, and admin tooling.',
    highlights: [
      'Built VCCA, a call center application with agent console, queuing, and supervisor dashboard.',
      'Developed CRM systems for managing customer data, pipelines, and communication workflows.',
      'Delivered CMS and admin platforms for content and operations management.',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Independent',
    start: '2012',
    end: 'Present',
    summary:
      'Built web and mobile products for clients and personal projects, including Pabs and Pabsync.',
    highlights: [
      'Designed and shipped Pabs, a food, grocery, and errands delivery mobile app.',
      'Built Pabsync, a work management platform for developers with AI collaboration.',
      'Delivered end-to-end client projects spanning frontend, backend, and mobile.',
    ],
  },
];

export const projectsMeta: Pick<ProjectSummary, 'slug' | 'featured'>[] = [];
