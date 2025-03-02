import { client } from '../contentful';
import { gql } from 'graphql-request';

// Get page by slug, and retrieve ids of all components
export default async function getPageBySlug(slug) {
  const query = gql`
    query ($slug: String!) {
      pageCollection(
        where: { slug: $slug }, limit: 1 ) {
        items {
          sys { id }
          title
          description
          slug
          componentsCollection {
            items {
              ...Hero
              ...Image
              ...RichText
            } 
          }
        }
      }
    }

    fragment Hero on Hero {
      __typename
      sys { id }
    }

    fragment Image on Image {
      __typename
      sys { id }
    }

    fragment RichText on ContentTypeRichText {
      __typename
      sys { id }
    }
  `;

  const variables = { slug };

  const data = await client.request(query, variables);

  if (process.env.NODE_ENV !== 'production') {
    console.log('PageBySlug data:', data);
  }

  return data.pageCollection.items.length > 0 ? data.pageCollection.items[0] : null;
}
