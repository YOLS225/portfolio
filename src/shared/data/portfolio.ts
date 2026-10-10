import type {
  Experience as PayloadExperience,
  Project as PayloadProject,
  Skill,
  SiteSetting,
  TechStack,
  Testimonial as PayloadTestimonial,
} from "@/payload-types";
import {
  expertise as fallbackExpertise,
  skillLevels as fallbackSkills,
  stats as fallbackStats,
  techStack as fallbackTechStack,
  testimonials as fallbackTestimonials,
} from "@/shared/config/profile";
import {
  featuredProjects as fallbackFeaturedProjects,
  getProjectBySlug as getFallbackProjectBySlug,
  projects as fallbackProjects,
  type Project,
} from "@/shared/config/projects";
import { siteConfig as fallbackSiteConfig } from "@/shared/config/site";

import { getPayloadClient } from "./payload";

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  achievements: string[];
};

export type TechStackGroup = {
  category: string;
  icon: string;
  description: string;
  items: string[];
};

export type SkillLevel = {
  label: string;
  value: number;
};

export type TestimonialItem = {
  name: string;
  role: string;
  feedback: string;
};

export type ProfileData = {
  name: string;
  logo: string;
  role: string;
  intro: string;
  email: string;
  location: string;
  roles: string[];
  expertise: string[];
};

export type SiteData = typeof fallbackSiteConfig;

const fallbackExperience: ExperienceItem[] = [
  {
    period: "2024 - Aujourd'hui",
    title: "Developpeur Fullstack",
    company: "Projets independants",
    achievements: [
      "Construction d'applications fullstack avec Next.js, NestJS, PostgreSQL et Docker.",
      "Conception d'API backend avec authentification, validation et frontieres de services claires.",
      "Exploration de workflows produit IA avec OpenAI API, concepts RAG et bases de recherche vectorielle.",
    ],
  },
  {
    period: "2022 - 2024",
    title: "Ingenieur Backend",
    company: "Apprentissage applique et projets de production",
    achievements: [
      "Developpement d'API REST avec Spring Boot, Java, Node.js et NestJS.",
      "Modelisation de donnees relationnelles pour job boards, livraison, chat et projets analytiques.",
      "Ajout de tests, workflows Docker et structures de projet orientees CI.",
    ],
  },
  {
    period: "2020 - 2022",
    title: "Developpeur Web",
    company: "Projets frontend et data",
    achievements: [
      "Construction d'interfaces responsives avec React, TypeScript et TailwindCSS.",
      "Creation de projets d'analyse de donnees avec SQL, Python, Pandas et Power BI.",
      "Amelioration de la structure UI, du routing, des composants reutilisables et des layouts dashboard.",
    ],
  },
];

function mapProject(project: PayloadProject): Project {
  return {
    slug: project.slug,
    title: project.title,
    year: project.year,
    category: project.category,
    summary: project.summary,
    outcome: project.outcome || "",
    role: project.role || "",
    stack: project.stack?.map((item) => item.label) || [],
    metrics: project.metrics?.map((metric) => ({ label: metric.label, value: metric.value })) || [],
    highlights: project.highlights?.map((highlight) => highlight.text) || [],
    gradient: project.gradient || "from-primary-container via-secondary-container to-tertiary-container",
    githubUrl: project.githubUrl || "https://github.com/",
    liveUrl: project.liveUrl?.trim() || undefined,
    coverImage: project.coverImage && typeof project.coverImage === "object" && project.coverImage.url
      ? { url: project.coverImage.url, alt: project.coverImage.alt || project.title }
      : undefined,
  };
}

function mapExperience(experience: PayloadExperience): ExperienceItem {
  return {
    period: experience.period,
    title: experience.title,
    company: experience.company,
    achievements: experience.achievements?.map((item) => item.text) || [],
  };
}

function mapTechStack(group: TechStack): TechStackGroup {
  return {
    category: group.category,
    icon: group.icon,
    description: group.description,
    items: group.items?.map((item) => item.label) || [],
  };
}

function mapSkill(skill: Skill): SkillLevel {
  return {
    label: skill.label,
    value: skill.value,
  };
}

function mapSiteSettings(settings: SiteSetting): SiteData {
  return {
    ...fallbackSiteConfig,
    socials: {
      github: settings.socials?.github || fallbackSiteConfig.socials.github,
      linkedin: settings.socials?.linkedin || fallbackSiteConfig.socials.linkedin,
      twitter: settings.socials?.twitter || fallbackSiteConfig.socials.twitter,
    },
    nav: settings.navigation?.length
      ? settings.navigation.map((item) => ({ href: item.href, label: item.label }))
      : fallbackSiteConfig.nav,
  };
}

async function safePayload<T>(query: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await query();
  } catch {
    return fallback;
  }
}

export async function getSiteData(): Promise<SiteData> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const settings = await payload.findGlobal({ slug: "site-settings" });

    return mapSiteSettings(settings);
  }, fallbackSiteConfig);
}

export async function getProfileData(): Promise<ProfileData> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const profile = await payload.findGlobal({ slug: "profile" });

    return {
      name: profile.name,
      logo: profile.logo,
      role: profile.role,
      intro: profile.intro,
      email: profile.email,
      location: profile.location || fallbackSiteConfig.location,
      roles: profile.roles?.map((item) => item.label) || [],
      expertise: profile.expertise?.map((item) => item.label) || [],
    };
  }, {
    name: fallbackSiteConfig.name,
    logo: fallbackSiteConfig.logo,
    role: fallbackSiteConfig.role,
    intro: "Je construis des applications web scalables, des systemes backend modernes et des produits data-driven.",
    email: fallbackSiteConfig.email,
    location: fallbackSiteConfig.location,
    roles: ["Developpeur Fullstack", "Ingenieur Backend", "Passionne IA"],
    expertise: fallbackExpertise,
  });
}

export async function getProjectsData(): Promise<Project[]> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "projects",
      depth: 1,
      limit: 100,
      sort: "-featured,-year,title",
    });

    return result.docs.length ? result.docs.map(mapProject) : fallbackProjects;
  }, fallbackProjects);
}

export async function getFeaturedProjectsData(): Promise<Project[]> {
  const projects = await getProjectsData();
  const featured = projects.filter((project) =>
    fallbackFeaturedProjects.some((fallbackProject) => fallbackProject.slug === project.slug),
  );

  return featured.length ? featured.slice(0, 4) : projects.slice(0, 4);
}

export async function getProjectDataBySlug(slug: string): Promise<Project | undefined> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "projects",
      depth: 1,
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    return result.docs[0] ? mapProject(result.docs[0]) : getFallbackProjectBySlug(slug);
  }, getFallbackProjectBySlug(slug));
}

export async function getExperienceData(): Promise<ExperienceItem[]> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "experiences",
      depth: 0,
      limit: 50,
      sort: "order",
    });

    return result.docs.length ? result.docs.map(mapExperience) : fallbackExperience;
  }, fallbackExperience);
}

export async function getTechStackData(): Promise<TechStackGroup[]> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "tech-stacks",
      depth: 0,
      limit: 50,
      sort: "order",
    });

    return result.docs.length ? result.docs.map(mapTechStack) : fallbackTechStack;
  }, fallbackTechStack);
}

export async function getSkillLevelsData(): Promise<SkillLevel[]> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "skills",
      depth: 0,
      limit: 50,
      sort: "order",
    });

    return result.docs.length ? result.docs.map(mapSkill) : fallbackSkills;
  }, fallbackSkills);
}

export async function getTestimonialsData(): Promise<TestimonialItem[]> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "testimonials",
      depth: 0,
      limit: 20,
      sort: "order",
    });

    return result.docs.length
      ? result.docs.map((item: PayloadTestimonial) => ({
          name: item.name,
          role: item.role,
          feedback: item.feedback,
        }))
      : fallbackTestimonials;
  }, fallbackTestimonials);
}

export function getStatsData() {
  return fallbackStats;
}
