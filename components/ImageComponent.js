import Image from 'next/image';

// Basically uses Next.js Image component, but could be customised here
export default async function ImageComponent(props) {

    const image = props.image;
    const className = props.className;
  
    if (!image) {
      return null;
    }
  
    return (
      <Image
        className={className}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.description}
      />
    );
  }
  