export type NavItem = {
  label: string;
  href: string;
};

export type PillarIcon = "software" | "analytics" | "media" | "training";

export type Pillar = {
  icon: PillarIcon;
  eyebrow: string;
  title: string;
  description: string;
  services: readonly string[];
  metric: string;
  accent: string;
};

export type Feature = {
  title: string;
  description: string;
  metric: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: readonly string[];
  result: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const contactInfo = {
  email: "contact@bitwiseventuresgroup.org",
  phone: "+91 99887 28749",
  phoneHref: "tel:+919988728749",
  whatsappHref: "https://wa.me/919988728749",
  website: "bitwiseventuresgroup.org",
  websiteHref: "https://bitwiseventuresgroup.org",
  officeAddress: "Latghat Rohuwar, Azamgarh, Uttar Pradesh, 276136",
  proprietor: "Mrs. Ramita Patel",
  contactPerson: "Mr. Vikas Patel",
  contactRole: "Software Engineer & Trainer"
} as const;

export const navItems: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { value: 1, suffix: "", label: "one vision" },
  { value: 4, suffix: "", label: "four powers" },
  { text: "Endless", label: "possibilities" }
] as const;

export const pillars: readonly Pillar[] = [
  {
    icon: "software",
    eyebrow: "Build",
    title: "Bitwise Software Solutions",
    description:
      "Solutions and consultancy services for smart websites, SaaS systems, cloud platforms and AI-powered business software.",
    services: [
      "Website Development",
      "Mobile App Development",
      "Custom Software / SaaS",
      "API Development & Integration",
      "Cloud Setup",
      "AI Chatbot Development",
      "Business Tech Strategy",
      "Startup Tech Guidance"
    ],
    metric: "Building smart solutions for a better tomorrow",
    accent: "from-royal-500 to-electric-400"
  },
  {
    icon: "analytics",
    eyebrow: "Operate",
    title: "Bitwise Data Analytics",
    description:
      "Business support services that convert daily operations, reports and revenue data into confident decision systems.",
    services: [
      "Excel Dashboards",
      "Power BI Reports",
      "Sales / Revenue Analysis",
      "KPI Tracking",
      "MIS Reporting",
      "Data Entry / Processing",
      "CRM Data Handling",
      "Virtual Assistants"
    ],
    metric: "Turning data into decisions",
    accent: "from-emerald-500 to-electric-400"
  },
  {
    icon: "media",
    eyebrow: "Grow",
    title: "Bitwise Media & Marketing",
    description:
      "Digital marketing services that connect brand, acquisition, content and automation into measurable growth.",
    services: [
      "Digital Marketing / SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Lead Generation Campaigns",
      "Performance Marketing",
      "Branding & Identity",
      "Landing Pages"
    ],
    metric: "We market. You grow.",
    accent: "from-orange-500 to-violet-500"
  },
  {
    icon: "training",
    eyebrow: "Upskill",
    title: "Bitwise School of Technology",
    description:
      "Technology and training programs for students, professionals, institutions and corporate teams.",
    services: [
      "Programming Languages",
      "Full Stack Development",
      "Cloud Computing & DevOps",
      "Data Structures & Algorithms",
      "AI Tools & Prompt Engineering",
      "Corporate Training",
      "Internship & Placement Support",
      "College / School Partnerships"
    ],
    metric: "Learn. Practice. Succeed.",
    accent: "from-violet-600 to-purple-400"
  }
];

export const features: readonly Feature[] = [
  {
    title: "Innovation",
    description:
      "We turn emerging technology into practical systems that ship, scale and keep improving.",
    metric: "Future-ready"
  },
  {
    title: "Expert Team",
    description:
      "Cross-functional specialists align engineering, analytics, marketing and training under one group.",
    metric: "Multi-domain"
  },
  {
    title: "Quality & Trust",
    description:
      "Delivery runs on clear documentation, measurable standards and disciplined execution.",
    metric: "Reliable"
  },
  {
    title: "Scalable Solutions",
    description:
      "Every solution is planned for adoption, governance, performance and long-term extension.",
    metric: "Enterprise-grade"
  },
  {
    title: "Business Growth",
    description:
      "We focus on revenue, efficiency and customer experience, not technology theater.",
    metric: "Outcome-led"
  },
  {
    title: "Long-term Partnership",
    description:
      "Our teams stay close after launch with optimization, training and strategic support.",
    metric: "Always-on"
  }
];

export const industries = [
  "EdTech",
  "Agriculture",
  "Logistics",
  "Retail",
  "Startups",
  "Small Businesses"
] as const;

export const portfolioItems: readonly PortfolioItem[] = [
  {
    title: "AI Operations Console",
    category: "Software + AI",
    description:
      "A role-based workflow platform for service teams with AI triage, SLA tracking and live dashboards.",
    image: "/images/portfolio-ai-operations.svg",
    tags: ["SaaS", "AI", "Cloud"],
    result: "38% faster resolution"
  },
  {
    title: "Executive KPI Command Center",
    category: "Data Analytics",
    description:
      "Unified Power BI reporting for revenue, operations, customer pipelines and executive review rhythms.",
    image: "/images/portfolio-kpi-command.svg",
    tags: ["Power BI", "MIS", "Automation"],
    result: "One source of truth"
  },
  {
    title: "Digital Growth Engine",
    category: "Media & Marketing",
    description:
      "Full-funnel campaign architecture with brand refresh, paid acquisition and conversion analytics.",
    image: "/images/portfolio-growth-engine.svg",
    tags: ["SEO", "Ads", "Brand"],
    result: "2.4x qualified leads"
  },
  {
    title: "Cloud Career Academy",
    category: "Technology Training",
    description:
      "Blended learning platform for full stack, cloud and AI training with mentor-led placement support.",
    image: "/images/portfolio-cloud-academy.svg",
    tags: ["LMS", "Cloud", "Placement"],
    result: "Outcome-first learning"
  }
];

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Bitwise Ventures Group brought structure to a messy transformation. The technology roadmap, dashboards and launch discipline felt like working with a much larger enterprise partner.",
    name: "Ananya Rao",
    role: "Chief Operating Officer",
    company: "VertexEdge Logistics"
  },
  {
    quote:
      "The team connected product engineering with marketing outcomes. We moved from scattered tools to a scalable platform and a clear growth engine.",
    name: "Rohan Mehta",
    role: "Founder",
    company: "SkillForge Labs"
  },
  {
    quote:
      "Their training division helped our analysts become confident with automation, BI and cloud workflows. The impact showed up immediately in reporting quality.",
    name: "Meera Shah",
    role: "Director of People Enablement",
    company: "Northstar Retail Group"
  }
];
