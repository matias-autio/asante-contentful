import getFooter from '@/lib/api/getFooter';
import ImageComponent from '@/components/ImageComponent';
import Navigation from './Navigation';
import Link from 'next/link';

// Render the footer
export default async function Footer() {
  const footer = await getFooter();

  if (!footer) {
    return null;
  }

  return (
    <footer className='flex flex-col md:flex-row gap-4 md:gap-16 px-8 py-12 md:items-center border-t border-t-primary mt-16'>
      <div className='grid gap-4'>
        {/* Link logo to frontpage */}
        <Link aria-label="Home" href={`/`}>
          <ImageComponent className="h-8 md:h-12 w-auto" image={footer.logo} />
        </Link>
      </div>
      <Navigation navigationId={footer.navigationId} />
    </footer>
  );
}
