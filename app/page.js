import getComponentsByIds from '@/lib/api/getComponentsByIds';
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

  // Handle 404 if page with the slug '/' doesn't exist
  if (!frontPage) {
    notFound();
  }

  const componentIds = frontPage?.componentsCollection?.items.map(c => c.sys.id) || [];
  const components = await getComponentsByIds(componentIds);

  return (
    <div className='container mx-auto'>
      <div className='prose mx-auto p-4 md:p-8'>
        <main>
          <h1>{frontPage.title}</h1>
        </main>
        <article>
          <Components components={components} />
        </article>
      </div>
    </div>
  );
}
