import { client } from '../contentful';
import { gql } from 'graphql-request';
import { ImageFragment } from '../fragments/Image';
import { RichTextFragment } from '../fragments/RichText';
import { HeroFragment } from '../fragments/Hero';

// Gets the components based on ids. The components' queries are defined in /lib/fragments.
export default async function getComponentsByIds(componentIds) {
    if (!componentIds.length) return [];
  
    const query = gql`
  
      ${HeroFragment}
      ${ImageFragment}
      ${RichTextFragment}
  
      query ($ids: [String!]!) {
        entryCollection(where: { sys: { id_in: $ids } }) {
          items {
            __typename
            ...Hero
            ...Image
            ...RichText
          }
        }
      }
    `;
  
    const variables = { ids: componentIds };
    const data = await client.request(query, variables);

    // Sort the returned items based on the order in componentIds
    const sortedItems = componentIds.map(id => 
      data?.entryCollection?.items.find(item => item.sys.id === id)
    );

    if (process.env.NODE_ENV !== 'production') {
      console.log('ComponentsByIds:', sortedItems);
    }

    return sortedItems || [];
  }
