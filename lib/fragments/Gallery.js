import { gql } from 'graphql-request';

export const GalleryFragment = gql`
  fragment Gallery on Gallery {
    __typename
    title
    sys { id }
    imagesCollection ( limit:20) {
      items {
        sys { id }
        url
        description
        width
        height
      }
    }  
}
`;
