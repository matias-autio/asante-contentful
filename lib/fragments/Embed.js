import { gql } from 'graphql-request';

// Fragment for getting Embed component's data via GraphQL
export const EmbedFragment = gql`
  fragment Embed on Embed {
    __typename
    sys { id }
    anchor
    html
  }
`;
