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
  liveUrl?: string;
  coverImage?: { url: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "chat-backend",
    title: "Chat Backend",
    year: "2026",
    category: "Backend",
    summary:
      "API de messagerie temps reel scalable avec authentification, conversations, persistance des messages et frontieres de services pretes pour la production.",
    outcome:
      "Construction d'une base backend propre pour des produits de chat, avec contrats types, services modulaires et flux de messages fiables.",
    role: "Architecture backend, design d'API, tests",
    stack: ["NestJS", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    metrics: [
      { label: "Latence", value: "<80ms" },
      { label: "Couverture", value: "85%" },
      { label: "Modules", value: "12" },
    ],
    highlights: [
      "Authentification JWT avec canaux temps reel proteges.",
      "Modules conversation et message separes par des contrats de service clairs.",
      "Architecture compatible Redis pour le scaling horizontal.",
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
      "Application collaborative de gestion de taches avec mises a jour temps reel, tableaux d'equipe, filtres et interface orientee productivite.",
    outcome:
      "Creation d'une surface de travail responsive pour des equipes qui ont besoin d'une propriete claire des taches et d'une synchronisation rapide.",
    role: "Engineering fullstack, architecture frontend, UX temps reel",
    stack: ["Next.js", "React", "TypeScript", "Zustand", "Prisma"],
    metrics: [
      { label: "Tableaux", value: "Multi" },
      { label: "Sync", value: "Temps reel" },
      { label: "UI", value: "Responsive" },
    ],
    highlights: [
      "Mises a jour optimistes pour des interactions rapides.",
      "Vues tableau, liste et detail pensees pour un usage quotidien.",
      "Patterns d'etat reutilisables pour les filtres, vues et selections.",
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
      "Dashboard meteo avec recherche de localisation, panneaux de prevision, layout responsive clair et patterns de visualisation.",
    outcome:
      "Transformation de donnees meteo en interface produit soignee, avec hierarchie forte et lecture rapide sur mobile et desktop.",
    role: "Engineering frontend, design UI, integration API",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "REST API"],
    metrics: [
      { label: "Vues", value: "4" },
      { label: "Mobile", value: "100%" },
      { label: "API", value: "2" },
    ],
    highlights: [
      "Cartes de prevision avec hierarchie visuelle claire.",
      "Flux de donnees pret pour la recherche et la geolocalisation.",
      "Structure dashboard responsive pour les petits ecrans.",
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
      "Interface de decouverte de films avec recherche, categories, pages detail et systeme visuel clair pour le contenu media.",
    outcome:
      "Construction d'une experience de navigation fluide pour des donnees media structurees, avec cartes accessibles et parcours rapides.",
    role: "Engineering frontend, routing, composition UI",
    stack: ["React", "TypeScript", "TailwindCSS", "REST API"],
    metrics: [
      { label: "Pages", value: "6" },
      { label: "Recherche", value: "Rapide" },
      { label: "Cartes", value: "Reutilisables" },
    ],
    highlights: [
      "Cartes media et layouts detail reutilisables.",
      "Navigation orientee recherche pour une decouverte rapide.",
      "Grilles de contenu responsives.",
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
      "API REST pour offres, entreprises, candidatures et authentification avec modelisation metier pragmatique et validation.",
    outcome:
      "Livraison d'un service backend capable de supporter un MVP de marketplace emploi avec endpoints propres et structure de donnees claire.",
    role: "Engineering backend, modelisation data, documentation API",
    stack: ["Spring Boot", "Java", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Routes API", value: "35+" },
      { label: "Entites", value: "9" },
      { label: "Docker", value: "Oui" },
    ],
    highlights: [
      "Domaines entreprise, offre, utilisateur et candidature clairement separes.",
      "Validation et gestion d'erreurs pensees pour la consommation frontend.",
      "Workflow de developpement local dockerise.",
    ],
    gradient: "from-secondary-container via-tertiary-container to-primary-container",
    githubUrl: "https://github.com/",
    liveUrl: "/projects/job-board-api",
  },
  {
    slug: "gas-delivery-platform",
    title: "Plateforme de livraison de gaz",
    year: "2023",
    category: "Produit",
    summary:
      "Concept de plateforme de livraison pour commander des bouteilles de gaz, avec parcours client, operations admin et bases de suivi livraison.",
    outcome:
      "Transformation d'un produit de commerce local en workflows clairs pour commande, dispatch et suivi operationnel.",
    role: "Engineering produit, design backend, UX admin",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    metrics: [
      { label: "Flux", value: "5" },
      { label: "Rôles", value: "3" },
      { label: "Admin", value: "Pret" },
    ],
    highlights: [
      "Parcours de commande client avec etats de livraison.",
      "Dashboard admin pour revue des commandes et dispatch.",
      "Modele metier scalable pour operations de livraison locale.",
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
      "Projet analytique SQL explorant datasets business, KPI, requetes de reporting et insights prets pour dashboard.",
    outcome:
      "Production de segments de donnees clairs et de requetes reutilisables pour les decisions produit, revenu et operations.",
    role: "Analyse data, modelisation SQL, reporting",
    stack: ["SQL", "PostgreSQL", "Python", "Pandas", "Power BI"],
    metrics: [
      { label: "Requetes", value: "50+" },
      { label: "KPIs", value: "12" },
      { label: "Rapports", value: "4" },
    ],
    highlights: [
      "Requetes KPI reutilisables pour l'analyse revenu et produit.",
      "Nettoyage et exploration de donnees avec Python.",
      "Sorties pretes pour dashboard dans des workflows BI.",
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
