import { Project, SkillCategory, ExperienceItem, CertificateItem, ServiceItem, TestimonialItem, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: "KAVYA DAVE",
  shortName: "Kavya Dave",
  tagline: "AI/ML Developer | MERN Stack Developer",
  roles: [
    "AI/ML Developer",
    "MERN Stack Developer",
    "Full Stack Engineer",
    "React & Node Specialist"
  ],
  bio: "Passionate MSc IT student and Full Stack AI/ML Developer dedicated to engineering high-performance web applications, intelligent machine learning models, and immersive digital experiences. Proficient across the entire software development lifecycle, from cloud architecture to pixel-perfect UI designs.",
  education: "MSc IT Student (Master of Science in Information Technology)",
  location: "Ahmedabad, Gujarat",
  email: "kavyaofficial.it@gmail.com",
  phone: "+91 98765 43210",
  availableForHire: true,
  socials: {
    github: "https://github.com/Kavya135399",
    linkedin: "https://www.linkedin.com/in/kavya-dave-baa617406?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "mailto:kavyaofficial.it@gmail.com"
  },
  stats: {
    projectsCompleted: 15,
    academicGpa: "9.2/10",
    technologiesMastered: 18,
    clientSatisfaction: "100%"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 82 },
      { name: "C", level: 78 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Bootstrap", level: 88 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "Laravel", level: 84 },
      { name: "Flask", level: 86 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 90 },
      { name: "Firebase", level: 82 }
    ]
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Data Analysis", level: 88 },
      { name: "Scikit Learn", level: 89 },
      { name: "TensorFlow", level: 82 }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 94 },
      { name: "VS Code", level: 96 },
      { name: "Figma", level: 85 },
      { name: "Render", level: 84 },
      { name: "Vercel", level: 92 },
      { name: "Docker", level: 78 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    subtitle: "Conversational AI Assistant & Real-time Chat UI",
    description: "An AI-powered chatbot built with modern web technologies that provides intelligent conversational responses. It features a clean UI, responsive design, and real-time interaction for a smooth chat experience.",
    longDescription: "An AI-powered chatbot application featuring a glassmorphism chat interface, custom quick-action prompts, date/time tools, theme toggles, and seamless integration with conversational AI APIs for instantaneous intelligent responses.",
    category: "AI/ML",
    techBadges: ["React", "JavaScript", "HTML", "CSS", "AI API Integration"],
    features: [
      "Real-time conversational AI responses",
      "Clean glassmorphism chat UI design",
      "Interactive quick prompt buttons & date tools",
      "Responsive layout for desktop & mobile",
      "Dark theme & chat history state management",
      "API integration for natural language processing"
    ],
    githubUrl: "https://github.com/Kavya135399/aichatbot",
    image: "/projects/aichatbot.png",
    featured: true
  },
  {
    id: "coffee-shop-website",
    title: "Coffee Shop Website",
    subtitle: "Noir Brew - Handcrafted Coffee Portal",
    description: "A responsive coffee shop website showcasing products, menu, services, and contact information. Designed with an attractive UI and smooth navigation to provide a great user experience.",
    longDescription: "Noir Brew is a luxury, cinematic coffee shop portal designed for handcrafted coffee lovers. Features single-origin product collections, brand storytelling, brewing processes, media galleries, and reservation contact modules.",
    category: "Full Stack",
    techBadges: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Cinematic typography & dark luxury design",
      "Handcrafted coffee collection showcase",
      "Interactive product menu & pricing guide",
      "Smooth scroll navigation & mobile menu",
      "Contact inquiry & reservation section",
      "Fully responsive cross-device layout"
    ],
    githubUrl: "https://github.com/Kavya135399/coffee",
    image: "/projects/coffee.png",
    featured: true
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    subtitle: "Gourmet Culinary & Dining Showcase",
    description: "A fully responsive restaurant website featuring menu sections, food gallery, booking/contact forms, and modern UI components. Optimized for desktop and mobile devices.",
    longDescription: "A full-featured restaurant web application offering culinary dish showcases, gourmet food galleries, interactive menu categories, customer booking forms, and dynamic backend management with PHP and MySQL.",
    category: "Full Stack",
    techBadges: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Dynamic food gallery & gourmet dish showcase",
      "Categorized menu with pricing & descriptions",
      "Table reservation & contact form validation",
      "PHP & MySQL database integration",
      "Mobile-optimized responsive design",
      "Modern UI elements & smooth transitions"
    ],
    githubUrl: "https://github.com/Kavya135399/restaurant",
    image: "/projects/restaurant.jpg",
    featured: true
  },
  {
    id: "om-shanti-travels",
    title: "Om Shanti Travels",
    subtitle: "Luxury Car Rental & Travel Portal",
    description: "Om Shanti Travels provides premium car rental services for city tours, airport transfers, and outstation trips. Built to make travel safe, comfortable, and enjoyable.",
    longDescription: "A full-featured web platform for Om Shanti Travels offering luxury car rentals, city tour packages, outstation trips, vehicle fleet showcase, booking contact system, and responsive user experience.",
    category: "Full Stack",
    techBadges: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Dynamic luxury vehicle rental showcase",
      "City tours, airport transfers & outstation trips",
      "Online booking inquiry & contact reservation system",
      "Responsive UI with dark theme",
      "Fleet inventory management system"
    ],
    githubUrl: "https://github.com/Kavya135399/car_rental_website",
    image: "/projects/car-rental.jpg",
    featured: true
  },
  {
    id: "placement-management",
    title: "Placement Portal (MERN Stack)",
    subtitle: "Campus Recruitment & Placement System",
    description: "A unified ecosystem empowering students, companies, and placement cells to connect, collaborate, and cultivate future success stories.",
    longDescription: "PlaceHub automates campus placement drives, student resume submissions, company job listings, interview slot schedules, and placement tracking for university placement officers and corporate recruiters.",
    category: "Full Stack",
    techBadges: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "Unified campus recruitment ecosystem",
      "Student profile & automated resume manager",
      "Corporate job drive posting & applicant tracking",
      "Interview calendar & placement status logs",
      "Eligibility verification & candidate shortlisting"
    ],
    githubUrl: "https://github.com/Kavya135399/Placement-Management-System",
    image: "/projects/placement-portal.jpg",
    featured: true
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction",
    subtitle: "Machine Learning Diagnostic System",
    description: "Leveraging Machine Learning algorithms to assist in early diagnosis. Fast, accurate, and secure analysis of cell nucleus characteristics to support medical decisions.",
    longDescription: "An advanced medical AI platform that analyzes cell nucleus characteristics from fine-needle aspirate (FNA) diagnostic metrics using trained Machine Learning models to assist healthcare professionals with 97%+ accuracy.",
    category: "AI/ML",
    techBadges: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    features: [
      "Early diagnostic ML prediction algorithms",
      "Analysis of cell nucleus diagnostic metrics",
      "Instantaneous risk assessment classification",
      "High accuracy confidence probability scoring",
      "Medical decision support dashboard"
    ],
    githubUrl: "https://github.com/Kavya135399/Breast-Cancer-Prediction",
    image: "/projects/breast-cancer.jpg",
    featured: true
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "msc-it",
    role: "MSc IT Student",
    organization: "Post Graduate Department of Computer Science",
    period: "2024 - Present",
    type: "Education",
    description: [
      "Specializing in Advanced Artificial Intelligence, Machine Learning algorithms, and Distributed Software Architecture.",
      "Maintaining an outstanding academic record with hands-on research in predictive healthcare ML modeling."
    ],
    technologies: ["AI/ML", "Python", "Full Stack Development", "Data Science"],
    location: "Ahmedabad, Gujarat"
  },
  {
    id: "fullstack-internship",
    role: "Full Stack Web Developer Intern",
    organization: "InnovateTech Software Solutions",
    period: "2023 - 2024",
    type: "Internship",
    description: [
      "Architected responsive web applications using React.js, Node.js, and MongoDB.",
      "Integrated secure payment gateways (PhonePe / Razorpay) and RESTful API authentication workflows.",
      "Optimized query performance for MySQL and MongoDB databases by 35%."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Payment Gateways"],
    location: "Remote / Hybrid"
  },
  {
    id: "ml-research-project",
    role: "Lead Developer & AI Researcher",
    organization: "Academic Projects & Open Source",
    period: "2023 - Present",
    type: "Project",
    description: [
      "Developed 4 major production-ready applications including HomeSeva and Breast Cancer Medical Diagnostic AI.",
      "Contributed to open-source libraries and created interactive web utilities for developer workflows."
    ],
    technologies: ["Python", "Scikit Learn", "Flask", "React", "Laravel"],
    location: "Ahmedabad, Gujarat"
  },
  {
    id: "tech-hackathon",
    role: "Hackathon Winner & Tech Achiever",
    organization: "State-level Tech Fest",
    period: "2024",
    type: "Achievement",
    description: [
      "Awarded 1st place for designing an automated Smart Campus Placement Portal in under 24 hours.",
      "Recognized for superior UI/UX architecture and zero-latency API integrations."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Figma"],
    location: "Ahmedabad, Gujarat"
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-ai-ml",
    title: "AI & Machine Learning Specialization",
    issuer: "Coursera / Stanford Online",
    date: "2024",
    credentialId: "AIML-98420-KD",
    category: "AI",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    link: "https://coursera.org/verify/AIML-98420-KD"
  },
  {
    id: "cert-fullstack",
    title: "Full Stack Web Development Masterclass",
    issuer: "Udemy Certified",
    date: "2024",
    credentialId: "FSWD-77124-KD",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    link: "https://udemy.com/certificate/FSWD-77124-KD"
  },
  {
    id: "cert-react",
    title: "Advanced React & Redux Architecture",
    issuer: "Meta Frontend Developer Professional",
    date: "2023",
    credentialId: "REACT-33921-KD",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    link: "https://coursera.org/verify/REACT-33921-KD"
  },
  {
    id: "cert-python-ds",
    title: "Python for Data Science & Machine Learning",
    issuer: "Kaggle & DataCamp",
    date: "2023",
    credentialId: "PYDS-55410-KD",
    category: "Python",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    link: "https://datacamp.com/statement/of/accomplishment/PYDS-55410-KD"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom, scalable, fast web applications built with modern frameworks and pixel-perfect responsive layouts.",
    icon: "Code2",
    features: ["Single Page Apps (SPA)", "SaaS Web Portals", "Responsive Design", "SEO Optimization"]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Intelligent AI integrations, LLM prompt engineering, automated workflows, and custom AI chatbots.",
    icon: "BrainCircuit",
    features: ["LLM API Integration", "Custom AI Workflows", "Intelligent Chatbots", "NLP Processing"]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Predictive model training, data pipeline engineering, and ML model deployment to cloud APIs.",
    icon: "Cpu",
    features: ["Classification & Regression", "Scikit-Learn & TensorFlow", "Data Preprocessing", "REST API Deployment"]
  },
  {
    id: "react-dev",
    title: "React Development",
    description: "High-performance React components with sleek animations, state management, and Three.js 3D visuals.",
    icon: "Atom",
    features: ["Component Libraries", "State Management", "Framer Motion & GSAP", "Three.js 3D Visuals"]
  },
  {
    id: "api-dev",
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs built with Node.js, Express, and Laravel with secure JWT auth.",
    icon: "Server",
    features: ["RESTful Architecture", "JWT & OAuth Security", "Database Query Optimization", "Swagger API Docs"]
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Luxury, high-converting 3D portfolios that wow clients, showcase skills, and land high-paying contracts.",
    icon: "Sparkles",
    features: ["3D Interactive Canvases", "Glassmorphic UI", "Smooth Scrolling", "High Conversion"]
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Enterprise web solutions with integrated booking systems, payment gateways, and custom admin dashboards.",
    icon: "Briefcase",
    features: ["PhonePe/Stripe Payments", "Admin Dashboards", "Booking & Reservation", "Customer Portals"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Rajesh V. Patel",
    role: "Head of IT Department",
    company: "PG Department of Computer Science",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "Kavya Dave is an exceptional student and developer. Her Breast Cancer Prediction ML model demonstrated research-level precision and clean engineering.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Vikram Sharma",
    role: "Managing Director",
    company: "HomeSeva Network Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Kavya built our HomeSeva platform from scratch. The PhonePe payment integration, live tracking, and admin dashboard exceeded our expectations!",
    rating: 5
  },
  {
    id: "test-3",
    name: "Ananya Desai",
    role: "Product Manager",
    company: "Om Shanti Travels",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote: "The car rental web application created by Kavya Dave increased our online bookings by 180%. Extremely reliable and highly skilled developer.",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Predictive ML Models with Python & Scikit-Learn",
    excerpt: "A deep dive into medical data classification, handling imbalanced datasets, and evaluating model metrics for healthcare applications.",
    date: "July 12, 2026",
    readTime: "6 min read",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "blog-2",
    title: "Integrating PhonePe Payment Gateway in Modern React Apps",
    excerpt: "Step-by-step guide to seamlessly handling server-to-server callbacks, checksum generation, and redirect responses.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "blog-3",
    title: "Mastering Three.js & React Three Fiber for Futuristic Web UIs",
    excerpt: "How to combine WebGL 3D canvas elements with Framer Motion scroll triggers without sacrificing 60fps performance.",
    date: "May 15, 2026",
    readTime: "5 min read",
    category: "3D & Web Graphics",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
  }
];
