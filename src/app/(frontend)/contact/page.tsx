import { ContactPage } from "@/features/contact";
import { getSiteData } from "@/shared/data/portfolio";

export default async function Contact() {
  const site = await getSiteData();

  return <ContactPage site={site} />;
}
