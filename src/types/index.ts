export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'All' | 'Full Stack' | 'AI/ML' | 'Web App';
  techBadges: string[];
  features: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0-100
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Education' | 'Internship' | 'Project' | 'Achievement';
  description: string[];
  technologies?: string[];
  location?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
  image: string;
  link?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  link?: string;
}
