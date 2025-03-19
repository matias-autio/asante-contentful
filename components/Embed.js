export default async function Embed({ html }) {

    if (!html){
      return null;
    }

    return (
      <>
        <hr className="border-tertiary"></hr>
        <div className="max-w-screen-sm mx-auto prose" dangerouslySetInnerHTML={{ __html: html }} />
      </>
    );
  }
  