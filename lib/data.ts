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
  "Java 21",
  "Spring Boot",
  "Kafka",
  "AWS",
  "Next.js",
  "CI/CD",
  "Docker"
];

export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Next.js", category: "Frontend", icon: Layers3 },
  { name: "TypeScript", category: "Frontend", icon: Figma },
  { name: "Java 21", category: "Backend", icon: ServerCog },
  { name: "Spring Boot", category: "Backend", icon: Settings2 },
  { name: "Python", category: "Backend", icon: Code2 },
  { name: "Kafka", category: "Backend", icon: Layers3 },
  { name: "SQL + MongoDB", category: "Backend", icon: Database },
  { name: "Git & GitHub", category: "Tools", icon: Github },
  { name: "CI/CD", category: "Tools", icon: Settings2 },
  { name: "Docker", category: "Tools", icon: Layers3 },
  { name: "AWS (EC2, S3, Lambda)", category: "Cloud", icon: Cloud },
  { name: "Kubernetes (Basics)", category: "Cloud", icon: Globe }
];

export const projects: Project[] = [
  {
    name: "Test Automation Platform (No-code)",
    description:
      "Built a no-code test automation platform with Next.js and Python enabling users to create, run, and manage automated tests through an intuitive UI.",
    stack: ["Next.js", "React", "Python", "REST APIs", "AWS"],
    github: "#",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1655258103166-8935d8fd3208?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    name: "Ride Booking Backend",
    description:
      "Implemented Kafka-based event streaming for ride booking, driver tracking, and cancellations in a decoupled microservices architecture.",
    stack: ["Java 21", "Spring Boot", "Kafka", "Microservices"],
    github: "#",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1737113202251-5bc40a896de0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    name: "Realtime Latency Dashboard",
    description:
      "Created a real-time dashboard to visualize cryptocurrency exchange latency with live API data and historical insights.",
    stack: ["Next.js", "TypeScript", "Charts", "APIs"],
    github: "#",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    name: "Chat Application",
    description:
      "Built a real-time chat system with room-based messaging using Spring Boot and WebSockets for low-latency communication.",
    stack: ["Spring Boot", "WebSockets", "Java", "Realtime"],
    github: "#",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1682941664177-7920d0e59418?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    name: "Local Marketplace App",
    description:
      "Built a mobile marketplace for local sellers to list and sell products with a smooth, accessible shopping flow.",
    stack: ["Flutter", "Mobile", "E-commerce"],
    github: "#",
    demo: "#",
    image:
      "https://images.pexels.com/photos/35765454/pexels-photo-35765454.jpeg?cs=srgb&dl=pexels-v-h-2158749783-35765454.jpg&fm=jpg"
  }
];
