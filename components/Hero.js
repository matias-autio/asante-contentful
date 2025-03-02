import ImageComponent from '@/components/ImageComponent';
// import Link from 'next/link';

// Render the header
export default async function Hero({hero}) {

  return (
    <>
      <div className='hero text-white -mx-8 items-center'>
        <ImageComponent className="hero-image spect-3/4 sm:aspect-4/3 md:aspect-5/3 lg:aspect-5/2 object-cover" image={hero.image} />
        <div className='hero__content relative mr-auto grid gap-4 lg:gap-6 bg-secondary p-8 ml-4 -mt-4 md:-mt-32 md:ml-8 lg:p-12'>
          <h1 className='text-hero'>{hero.title}</h1>
          <p className='text-lead'>{hero.description}</p>
        </div>
      </div>
     </>
  );
}

