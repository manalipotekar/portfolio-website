import {
  Cloud,
  Code2,
  Database,
  Figma,
  Github,
  Globe,
  Layers3,
  ServerCog,
  Settings2
} from "lucide-react";

export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Cloud";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: typeof Code2;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
};

export const technologies = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "AWS"
];

export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Next.js", category: "Frontend", icon: Layers3 },
  { name: "Tailwind CSS", category: "Frontend", icon: Figma },
  { name: "Node.js", category: "Backend", icon: ServerCog },
  { name: "Express", category: "Backend", icon: Settings2 },
  { name: "PostgreSQL", category: "Backend", icon: Database },
  { name: "Git & GitHub", category: "Tools", icon: Github },
  { name: "CI/CD", category: "Tools", icon: Settings2 },
  { name: "Docker", category: "Tools", icon: Layers3 },
  { name: "AWS", category: "Cloud", icon: Cloud },
  { name: "Vercel", category: "Cloud", icon: Globe },
  { name: "Cloudflare", category: "Cloud", icon: Cloud }
];

export const projects: Project[] = [
  {
    name: "SaaS Analytics Dashboard",
    description:
      "A multi-tenant analytics platform with role-based access control, real-time charts, and exportable reports.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"],
    github: "https://github.com/your-username/saas-analytics-dashboard",
    demo: "https://saas-analytics-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "DevCollab API Platform",
    description:
      "Backend-first collaboration suite with JWT auth, webhook integrations, and resilient job processing.",
    stack: ["Node.js", "Express", "TypeScript", "Redis", "Docker"],
    github: "https://github.com/your-username/devcollab-api-platform",
    demo: "https://devcollab-api-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "E-commerce Storefront",
    description:
      "High-performance e-commerce frontend featuring server rendering, product search, and secure checkout flow.",
    stack: ["Next.js", "Tailwind CSS", "Stripe", "Sanity", "Zod"],
    github: "https://github.com/your-username/ecommerce-storefront",
    demo: "https://ecommerce-storefront-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Cloud Resume Deployer",
    description:
      "Infrastructure automation project that deploys portfolio builds through CI pipelines to a global CDN edge.",
    stack: ["Terraform", "GitHub Actions", "AWS S3", "CloudFront", "Route53"],
    github: "https://github.com/your-username/cloud-resume-deployer",
    demo: "https://cloud-resume-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  }
];
