import { client } from '@/lib/contentful';
import { gql } from 'graphql-request';

// Get a Navigation by its id
export default async function getNavigation(navigationId) {
  if (!navigationId) return null;

  const query = gql`
    query ($id: String!) {
      navigation(id: $id) {
        pagesCollection {
          items {
            ...Url
            ...Page
          }
        }
      }
    }

    fragment Url on Url {
      __typename
      sys { id }
      title
      url
      externalLink
    }

    fragment Page on Page {
      __typename
      sys { id }
      title
      slug
    }

  `;

  const variables = { id: navigationId };
  const data = await client.request(query, variables);

  if (process.env.NODE_ENV !== 'production') {
    console.log('Navigation:', data);
  }

  return {
    pages: data?.navigation?.pagesCollection?.items || [],
  };
}
