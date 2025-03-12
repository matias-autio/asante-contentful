import Hero from '@/components/Hero';
import ImageComponent from '@/components/ImageComponent';
import RichText from '@/components/RichText';
import Persons from '@/components/Persons';
import Gallery from '@/components/Gallery';
import Embed from '@/components/Embed';

// Render components by their __typename
export default async function Components({components}) {

  if (!components) {
    return null;
  }

  return (
    <div className='grid gap-16 px-8'>
      {components.map((component) => {
        switch (component.__typename) {
          case "Hero":
            return <Hero key={component.sys.id} hero={component} />;
          case "Image":
            return <ImageComponent key={component.sys.id} image={component.image} />;
          case "ContentTypeRichText":
            return <RichText key={component.sys.id} richText={component.richText} />;
          case "Embed":
            return <Embed key={component.sys.id} html={component.html} />;
          case "Persons":
            return <Persons key={component.sys.id} persons={component.personsCollection.items} title={component.title} />;
          case "Gallery":
            return <Gallery key={component.sys.id} images={component.imagesCollection.items} title={component.title} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

