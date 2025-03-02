import { client } from '../contentful';
import { gql } from 'graphql-request';

export default async function getAllPages() {
    const query = gql`
      query {
        pageCollection {
          items {
            slug
          }
        }
      }
    `;

    const data = await client.request(query);

    if (process.env.NODE_ENV !== 'production') {
        console.log('All pages:', data);
      }

    return data.pageCollection.items;
}
