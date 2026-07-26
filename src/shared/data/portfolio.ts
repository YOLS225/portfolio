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
    period: "2024 - Now",
    title: "Fullstack Developer",
    company: "Independent projects",
    achievements: [
      "Built fullstack applications with Next.js, NestJS, PostgreSQL, and Docker.",
      "Designed backend APIs with authentication, validation, and clean service boundaries.",
      "Explored AI product workflows using OpenAI API, RAG concepts, and vector search foundations.",
    ],
  },
  {
    period: "2022 - 2024",
    title: "Backend Engineer",
    company: "Applied learning and production projects",
    achievements: [
      "Developed REST APIs with Spring Boot, Java, Node.js, and NestJS.",
      "Modeled relational data for job boards, delivery workflows, chat systems, and analytics projects.",
      "Added testing, Docker workflows, and CI-oriented project structure.",
    ],
  },
  {
    period: "2020 - 2022",
    title: "Web Developer",
    company: "Frontend and data projects",
    achievements: [
      "Built responsive interfaces with React, TypeScript, and TailwindCSS.",
      "Created data analysis projects with SQL, Python, Pandas, and Power BI.",
      "Improved UI structure, routing, reusable components, and dashboard layouts.",
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
    liveUrl: project.liveUrl || `/projects/${project.slug}`,
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
    intro: "I build scalable web applications, modern backend systems and data-driven products.",
    email: fallbackSiteConfig.email,
    location: fallbackSiteConfig.location,
    roles: ["Fullstack Developer", "Backend Engineer", "AI Enthusiast"],
    expertise: fallbackExpertise,
  });
}

export async function getProjectsData(): Promise<Project[]> {
  return safePayload(async () => {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "projects",
      depth: 0,
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
      depth: 0,
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
