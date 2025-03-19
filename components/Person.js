import ImageComponent from '@/components/ImageComponent';

// Render the header
export default async function Person({ person }) {

  return (
    <div className='flex gap-8'>
      <div className='flex-shrink-0 h-24 w-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-tertiary rounded-full'>
        <ImageComponent className="aspect-square rounded-full h-24 w-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-cover overflow-hidden" image={person.image} />
      </div>
      <div className='prose'>
        <h4>{person.name}</h4>
        <p className='text-small'>{person.description}</p>
      </div>
    </div>
  );
}

