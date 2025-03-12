import { client } from '../contentful';
import { gql } from 'graphql-request';
import { HeroFragment } from '../fragments/Hero';
import { ImageFragment } from '../fragments/Image';
import { RichTextFragment } from '../fragments/RichText';
import { PersonsFragment } from '../fragments/Persons';
import { GalleryFragment } from '../fragments/Gallery';
import { EmbedFragment } from '../fragments/Embed';

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
              ...Persons
              ...Gallery
              ...Embed
            } 
          }
        }
      }
    }

    ${GalleryFragment}
    ${PersonsFragment}
    ${HeroFragment}
    ${ImageFragment}
    ${RichTextFragment}
    ${EmbedFragment}
  `;

  const variables = { slug };

  const data = await client.request(query, variables);

  if (process.env.NODE_ENV !== 'production') {
    console.log('PageBySlug data:', data);
  }

  return data.pageCollection.items.length > 0 ? data.pageCollection.items[0] : null;
}
