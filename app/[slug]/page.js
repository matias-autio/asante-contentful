import getComponentsByIds from '@/lib/api/getComponentsByIds';
import getPageBySlug from '@/lib/api/getPageBySlug';
import getSiteSettings from '@/lib/api/getSiteSettings';
import getAllPages from '@/lib/api/getAllPages';
import Components from '@/components/Components';
import { notFound } from 'next/navigation';

// Dynamically generate html title and meta description
export async function generateMetadata({ params }) {

  const { slug } = await params;
  const page = await getPageBySlug(slug);
  const siteSettings = await getSiteSettings();

  return {
    title: `${page.title} - ${siteSettings.siteName}`,
    description: page.description ? page.description : siteSettings.siteDescription,
  }
}

export async function generateStaticParams() {
  const pages = await getAllPages();
  const filtered = pages.filter((page) => page.slug !== 'home');
  return filtered.map((page) => ({ slug: page.slug }));
}

// Get page by slug and display the components
export default async function Page({ params }) {

  const { slug } = await params;
  // Fetch page data based on slug
  const page = await getPageBySlug(slug);
  const componentIds = page?.componentsCollection?.items.map(c => c.sys.id) || [];
  const components = await getComponentsByIds(componentIds);

  // Handle 404 if page doesn't exist
  if (!page) {
    notFound();
  }

  return (
    <div className='container mx-auto'>
      <div className='prose mx-auto p-8'>
        <main>
          <h1>{page.title}</h1>
        </main>
        <article>
          <Components components={components} />
        </article>
      </div>
    </div>
  );
}
