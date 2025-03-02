import getHeader from '@/lib/api/getHeader';
import ImageComponent from '@/components/ImageComponent';
import Navigation from './Navigation';
import Link from 'next/link';

// Render the header
export default async function Header() {
  const header = await getHeader();

  if (!header) {
    return null;
  }

  return (
    <header className='flex flex-col md:flex-row gap-8 lg:gap-16 px-4 py-8 md:px-8 md:py-12 md:items-center justify-between'>
      <div className='grid gap-4'>
        {/* Link logo to frontpage */}
        <Link href={`/`}>
          <ImageComponent className="h-10 md:h-12 w-auto" image={header.logo} />
        </Link>
        {/* <h1 className='font-bold'>{header.title}</h1> */}
      </div>
      <Navigation navigationId={header.navigationId} />
    </header>
  );
}

