export default async function Embed({ html, anchor }) {

    if (!html){
      return null;
    }

    return (
      <>
        <hr className="border-tertiary"></hr>
        <div id={anchor} className="max-w-screen-sm mx-auto prose" dangerouslySetInnerHTML={{ __html: html }} />
      </>
    );
  }
  