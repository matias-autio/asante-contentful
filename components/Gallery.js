import Image from 'next/image';

export default async function Gallery(props) {

  return (
    <>
      <div>
        <div className='prose'>
          <h3>{props.title}</h3>
          <div className='flex gap-4 overflow-auto w-full scrollbar-hide scroll-smooth'>
            {props.images.map((image) => (
              <div key={image.url} className='slide not-prose flex-shrink-0'>
                <Image
                  className='object-cover w-64 h-64'
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.description}
                  sizes="512px"
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
}

