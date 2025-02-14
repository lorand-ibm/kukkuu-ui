import { gql } from '@apollo/client';

const submitChildrenAndGuardianMutation = gql`
  mutation submitChildrenAndGuardian(
    $children: [ChildInput!]!
    $guardian: GuardianInput!
  ) {
    submitChildrenAndGuardian(
      input: { children: $children, guardian: $guardian }
    ) {
      guardian {
        id
        firstName
        lastName
        email
        phoneNumber
        language
        children {
          edges {
            node {
              id
              firstName
              lastName
              birthdate
              postalCode
              project {
                id
                name
                year
              }
              relationships {
                edges {
                  node {
                    id
                    type
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default submitChildrenAndGuardianMutation;
