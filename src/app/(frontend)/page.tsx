import { HomePage } from "@/features/home";
import {
  getFeaturedProjectsData,
  getProfileData,
  getSkillLevelsData,
  getStatsData,
  getTechStackData,
  getTestimonialsData,
} from "@/shared/data/portfolio";

export default async function Home() {
  const [featuredProjects, profile, skillLevels, techStack, testimonials] = await Promise.all([
    getFeaturedProjectsData(),
    getProfileData(),
    getSkillLevelsData(),
    getTechStackData(),
    getTestimonialsData(),
  ]);

  return (
    <HomePage
      featuredProjects={featuredProjects}
      profile={profile}
      skillLevels={skillLevels}
      stats={getStatsData()}
      techStack={techStack}
      testimonials={testimonials}
    />
  );
}
