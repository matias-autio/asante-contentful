import ImageComponent from '@/components/ImageComponent';

// Render the header
export default async function Person({person}) {

  return (
    <div className='flex gap-8'>
      <div className='flex-shrink-0'>
        <ImageComponent className="aspect-square rounded-full w-32 h-32 lg:w-48 lg:h-48 object-contain" image={person.image} />
      </div>
      <div className='prose'>
        <h4>{person.name}</h4>
        <p>{person.description}</p>
      </div>
    </div>
  );
}

