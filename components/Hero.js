import ImageComponent from '@/components/ImageComponent';
// import Link from 'next/link';

// Render the header
export default async function Hero({hero}) {

  return (
    <>
      <div className='hero text-white'>
        <ImageComponent className="hero-image aspect-3/4 sm:aspect-4/3 md:aspect-5/3 lg:aspect-5/2 object-cover" image={hero.image} />
        <div className='hero__content grid gap-y-8 mr-auto'>
          <h1 className='text-hero'>{hero.title}</h1>
          <p className='text-lead'>{hero.description}</p>
        </div>
      </div>
     </>
  );
}

