import Link from 'next/link';
import getNavigation from '@/lib/api/getNavigation';

// Render the navigation based on the passed id
export default async function Navigation({ navigationId }) {
  if (!navigationId) {
    return null;
  }

  const navigation = await getNavigation(navigationId);
  
  return (
    <nav>
      <ul className='grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-8'>

      {navigation.pages.map((page) => {
        switch (page.__typename) {
          case "Page":
            return (
              <li key={page.slug}>
                <Link className="hover:underline md:text-xl" href={page.slug === 'home' ? '/' : `/${page.slug}`}>{page.title}</Link>
              </li>
            )
          case "Url":
            return (
              <li key={page.url}>
                <Link className="hover:underline md:text-xl" target={page.externalLink ? '_blank' : false } href={page.url}>{page.title}</Link>
              </li>
            )
          default:
            return null;
        }
      })}
      </ul>
    </nav>
  );
}
