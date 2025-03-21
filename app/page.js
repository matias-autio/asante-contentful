import getPageBySlug from '@/lib/api/getPageBySlug';
import getSiteSettings from "@/lib/api/getSiteSettings";
import Components from '@/components/Components';
import { notFound } from 'next/navigation';

// Dynamically generate html title and meta description
export async function generateMetadata() {

  const frontPage = await getPageBySlug("home");
  const siteSettings = await getSiteSettings();

  return {
    title: `${frontPage.title} - ${siteSettings.siteName}`,
    description: frontPage.description ? frontPage.description : siteSettings.siteDescription,
  }
}

// Get the homepage (page with the slug '/') and display the components
export default async function Home() {

  const frontPage = await getPageBySlug("home");

  // Handle 404 if page with the slug 'home' doesn't exist
  if (!frontPage) {
    notFound();
  }

  const components = frontPage?.componentsCollection.items;

  if (process.env.NODE_ENV !== 'production') {
    console.log('Components:', components);
  }

  return (
    <main>
      <Components components={components} />
    </main>
  );
}
