import { gql } from 'graphql-request';

// Fragment for getting Image component's data via GraphQL
export const HeroFragment = gql`
  fragment Hero on Hero {
    sys { id }
    title
    description
    image {
      url
      description
      width
      height
    }
  }
`;
