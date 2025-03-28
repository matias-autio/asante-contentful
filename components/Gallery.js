"use client"

import RenderGalleryImage from "./helpers/RenderGalleryImage";
import RenderLightboxImage from "./helpers/RenderLightboxImage";

import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery(props) {
  const [index, setIndex] = useState(-1);

  // Transform Contentful images to match expected format
  const photos = props.images.map((image) => ({
    src: image.url,
    width: image.width,
    height: image.height,
    alt: image.description || "Image",
  }));


  return (
    <>

      <RowsPhotoAlbum
        photos={photos}
        render={{ image: RenderGalleryImage }}
        targetRowHeight={150}
        defaultContainerWidth={1200}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{ slide: RenderLightboxImage }}
      // enable optional lightbox plugins
      // plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
