import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Render rich text using rich-text-react-renderer
// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
export default async function Richtext({ richText, anchor }) {

    if (!richText){
      return null;
    }
  
    const options = {
      preserveWhitespace: true,
    };

    return (
      <>
        <div id={anchor} className='prose mx-auto w-full'>
          {documentToReactComponents(richText.json, options)}
        </div>
      </>
    );
  }
  