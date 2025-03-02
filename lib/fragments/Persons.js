import { gql } from 'graphql-request';
import { PersonFragment } from './Person';

export const PersonsFragment = gql`
  fragment Persons on Persons {
    __typename
    title
    sys { id }
    personsCollection ( limit: 4 ) {
      items {
        ...Person
      }
    }
  }

  ${PersonFragment}
`;
