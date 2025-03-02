import { gql } from 'graphql-request';

export const PersonFragment = gql`
  fragment Person on Person {
    __typename
    sys { id }
    name
    description
    image {
      url
      title
      description
      width
      height
    }
  }
`;
