import ImageComponent from '@/components/ImageComponent';

// Render the header
export default async function Person({ person }) {

  const centeredDescription = person.description.length < 100 ? 'items-center' : '';

  return (
    <div className={`flex gap-4 md:gap-8 ${centeredDescription}`} >
      <div className='flex-shrink-0 h-24 w-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-tertiary rounded-full'>
        <ImageComponent sizes="20vw, (min-width: 768px), 10vw" className="aspect-square rounded-full w-full h-full object-cover overflow-hidden" image={person.image} />
      </div>
      <div className='prose'>
        <h4>{person.name}</h4>
        <p className='text-small'>{person.description}</p>
      </div>
    </div>
  );
}

