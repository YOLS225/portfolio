import { HomePage } from "@/features/home";
import {
  getFeaturedProjectsData,
  getProfileData,
  getSiteData,
  getSkillLevelsData,
  getStatsData,
  getTechStackData,
  getTestimonialsData,
} from "@/shared/data/portfolio";

export default async function Home() {
  const [featuredProjects, profile, site, skillLevels, techStack, testimonials] = await Promise.all([
    getFeaturedProjectsData(),
    getProfileData(),
    getSiteData(),
    getSkillLevelsData(),
    getTechStackData(),
    getTestimonialsData(),
  ]);

  return (
    <HomePage
      featuredProjects={featuredProjects}
      profile={profile}
      site={site}
      skillLevels={skillLevels}
      stats={getStatsData()}
      techStack={techStack}
      testimonials={testimonials}
    />
  );
}
