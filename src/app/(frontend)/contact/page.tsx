import { ContactPage } from "@/features/contact";
import { getProfileData, getSiteData } from "@/shared/data/portfolio";

export default async function Contact() {
  const [profile, site] = await Promise.all([getProfileData(), getSiteData()]);

  return <ContactPage profile={profile} site={site} />;
}
