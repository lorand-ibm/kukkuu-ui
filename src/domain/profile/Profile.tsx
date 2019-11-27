import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import NoUpcomingEvents from './components/noUpcomingEvents/NoUpcomingEvents';
import { StoreState } from '../app/types/AppTypes';
import { profileToStore } from './state/ProfileActions';
import { GuardianValues } from './types/ProfileTypes';
import { userSelector } from '../auth/state/AuthenticationSelectors';
import { Children } from '../child/types/ChildTypes';
import { normalizeChildren } from '../child/childUtils';

const profileQuery = gql`
  query profileQuery {
    guardians {
      edges {
        node {
          firstName
          lastName
          children {
            edges {
              node {
                firstName
                lastName
                birthdate
              }
            }
          }
        }
      }
    }
  }
`;
interface Props {
  profileToStore: (values: GuardianValues) => void;
}

const Profile: FunctionComponent<Props> = ({ profileToStore }) => {
  const { loading, error, data } = useQuery(profileQuery);
  const { t } = useTranslation();

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>Error! {error.message}</div>;

  const guardian = {
    phone: data.guardians.edges[0].node.phone,
    firstName: data.guardians.edges[0].node.firstName,
    lastName: data.guardians.edges[0].node.lastName,
  };

  const children: Children = normalizeChildren(
    data.guardians.edges[0].node.children.edges
  );

  const profileValues: GuardianValues = {
    firstName: guardian.firstName,
    lastName: guardian.lastName,
    phoneNumber: guardian.phone,
    children,
  };

  const payload = Object.assign({}, profileValues, {});
  profileToStore(payload);

  return (
    <div>
      <h1>{t('profile.heading')}</h1>
      <div>
        {children.map(child => (
          <div>
            {child.firstName} {child.lastName} {child.birthdate}
          </div>
        ))}
      </div>
      <div>TODO: email</div>
      <div>
        {guardian.firstName} {guardian.lastName}
      </div>
      <div>{guardian.phone}</div>
      <NoUpcomingEvents />
    </div>
  );
};

const actions = {
  profileToStore,
};

const mapStateToProps = (state: StoreState) => ({
  tunnistamoUserValues: userSelector(state),
});

export const UnconnectedProfile = Profile;

export default connect(
  mapStateToProps,
  actions
)(Profile);
