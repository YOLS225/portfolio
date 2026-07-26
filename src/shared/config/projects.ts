export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  outcome: string;
  role: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  gradient: string;
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    slug: "chat-backend",
    title: "Chat Backend",
    year: "2026",
    category: "Backend",
    summary:
      "Scalable realtime messaging API with authentication, conversations, message persistence, and production-ready service boundaries.",
    outcome:
      "Built a clean backend foundation for chat products with typed contracts, modular services, and reliable message flows.",
    role: "Backend architecture, API design, testing",
    stack: ["NestJS", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    metrics: [
      { label: "Latency", value: "<80ms" },
      { label: "Coverage", value: "85%" },
      { label: "Modules", value: "12" },
    ],
    highlights: [
      "JWT authentication with protected realtime channels.",
      "Conversation and message modules separated with clean service contracts.",
      "Redis-ready architecture for horizontal scaling.",
    ],
    gradient: "from-primary-container via-secondary-container to-tertiary-container",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/chat-backend",
  },
  {
    slug: "realtime-task-manager",
    title: "Realtime Task Manager",
    year: "2025",
    category: "Fullstack",
    summary:
      "Collaborative task management application with realtime updates, team boards, filters, and a focused productivity UI.",
    outcome:
      "Created a responsive workflow surface for teams that need clear task ownership and fast state synchronization.",
    role: "Fullstack engineering, frontend architecture, realtime UX",
    stack: ["Next.js", "React", "TypeScript", "Zustand", "Prisma"],
    metrics: [
      { label: "Boards", value: "Multi" },
      { label: "Sync", value: "Live" },
      { label: "UI", value: "RWD" },
    ],
    highlights: [
      "Optimistic task updates for fast interactions.",
      "Board, list, and detail views designed for daily use.",
      "Reusable state patterns for filters, views, and selections.",
    ],
    gradient: "from-secondary-container via-primary-container to-primary",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/realtime-task-manager",
  },
  {
    slug: "nimbus-weather",
    title: "Nimbus Weather",
    year: "2025",
    category: "Frontend",
    summary:
      "Weather dashboard with location search, forecast panels, clean responsive layout, and data visualization patterns.",
    outcome:
      "Turned weather data into a polished product surface with strong hierarchy and fast scanning on mobile and desktop.",
    role: "Frontend engineering, UI design, API integration",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "REST API"],
    metrics: [
      { label: "Views", value: "4" },
      { label: "Mobile", value: "100%" },
      { label: "APIs", value: "2" },
    ],
    highlights: [
      "Forecast cards with clear visual hierarchy.",
      "Search and geolocation-ready data flow.",
      "Responsive dashboard structure for compact screens.",
    ],
    gradient: "from-tertiary-container via-primary-container to-secondary-container",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/nimbus-weather",
  },
  {
    slug: "movie-app",
    title: "Movie App",
    year: "2024",
    category: "Frontend",
    summary:
      "Movie discovery interface with search, category browsing, detail pages, and a clean visual system for media content.",
    outcome:
      "Built a smooth browsing experience for structured media data with accessible cards and quick discovery paths.",
    role: "Frontend engineering, routing, UI composition",
    stack: ["React", "TypeScript", "TailwindCSS", "REST API"],
    metrics: [
      { label: "Pages", value: "6" },
      { label: "Search", value: "Fast" },
      { label: "Cards", value: "Reusable" },
    ],
    highlights: [
      "Reusable media card and detail layouts.",
      "Search-first navigation for quick discovery.",
      "Responsive content grids.",
    ],
    gradient: "from-primary-container via-tertiary-container to-secondary-container",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/movie-app",
  },
  {
    slug: "job-board-api",
    title: "Job Board API",
    year: "2024",
    category: "Backend",
    summary:
      "REST API for jobs, companies, applications, and authentication with pragmatic domain modeling and validation.",
    outcome:
      "Delivered a backend service that can support a job marketplace MVP with clean endpoints and database structure.",
    role: "Backend engineering, data modeling, API documentation",
    stack: ["Spring Boot", "Java", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Endpoints", value: "35+" },
      { label: "Entities", value: "9" },
      { label: "Docker", value: "Yes" },
    ],
    highlights: [
      "Company, job, user, and application domains separated clearly.",
      "Validation and error handling designed for frontend consumption.",
      "Dockerized local development workflow.",
    ],
    gradient: "from-secondary-container via-tertiary-container to-primary-container",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/job-board-api",
  },
  {
    slug: "gas-delivery-platform",
    title: "Gas Delivery Platform",
    year: "2023",
    category: "Product",
    summary:
      "Delivery platform concept for ordering gas bottles with customer flow, admin operations, and delivery tracking foundations.",
    outcome:
      "Mapped a practical local-commerce product into clear workflows for ordering, dispatch, and operational follow-up.",
    role: "Product engineering, backend design, admin UX",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    metrics: [
      { label: "Flows", value: "5" },
      { label: "Roles", value: "3" },
      { label: "Admin", value: "Ready" },
    ],
    highlights: [
      "Customer order flow with delivery status states.",
      "Admin dashboard for order review and dispatch.",
      "Scalable domain model for local delivery operations.",
    ],
    gradient: "from-tertiary-container via-secondary-container to-primary-container",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/gas-delivery-platform",
  },
  {
    slug: "sql-data-analysis",
    title: "SQL Data Analysis",
    year: "2023",
    category: "Data",
    summary:
      "Analytical SQL project exploring business datasets, KPIs, reporting queries, and dashboard-ready insights.",
    outcome:
      "Produced clear data slices and reusable queries for product, revenue, and operational decision-making.",
    role: "Data analysis, SQL modeling, reporting",
    stack: ["SQL", "PostgreSQL", "Python", "Pandas", "Power BI"],
    metrics: [
      { label: "Queries", value: "50+" },
      { label: "KPIs", value: "12" },
      { label: "Reports", value: "4" },
    ],
    highlights: [
      "Reusable KPI queries for revenue and product analysis.",
      "Data cleaning and exploration with Python.",
      "Dashboard-ready outputs for BI workflows.",
    ],
    gradient: "from-primary-container via-secondary-container to-tertiary-container",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/sql-data-analysis",
  },
];

export const featuredProjects = projects.slice(0, 4);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
