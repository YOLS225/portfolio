import { AboutPage } from "@/features/about";
import { getProfileData, getStatsData } from "@/shared/data/portfolio";

export default async function About() {
  const profile = await getProfileData();

  return <AboutPage profile={profile} stats={getStatsData()} />;
}
