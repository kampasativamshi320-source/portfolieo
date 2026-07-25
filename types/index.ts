export interface Skill {
  name: string;
  category: "Data & ML" | "Frontend" | "Backend & DB" | "Tools & Others";
  level: number; // 0-100
  proficiency: "Expert" | "Advanced" | "Proficient";
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: "AI & ML" | "Data Analytics" | "Web Development" | "Full Stack";
  image: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  type: "Virtual Simulation" | "Academic Leadership" | "Project Lead";
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  percentageOrGpa?: string;
  details: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
