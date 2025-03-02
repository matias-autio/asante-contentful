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
      <ul className='flex flex-col md:flex-row gap-4 md:gap-8'>
        {navigation.pages.map((page) => (
          <li key={page.slug}>
            <Link className="hover:underline text-xl" href={page.slug === 'home' ? '/' : `/${page.slug}`}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
