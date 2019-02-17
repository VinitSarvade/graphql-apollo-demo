import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styles from './styles.module.scss';

const GET_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      id,
      first_name,
      last_name,
      avatar
    }
  }
`;

const showLoading = () => (
  <div>Loading...</div>
);

const UserDetails = ({ match: { params: { id } } }) => {
  return (
    <Query query={GET_USER} variables={{ userId: id }}>
      {
        ({ loading, error, data: { user } }) => {
          if (loading) return showLoading();
          return (
            <div className={styles.user} key={user.id} to={`/users/${user.id}`}>
              <img className={styles.avatar} alt='' src={user.avatar} />
              <div>{`${user.first_name} ${user.last_name}`}</div>
            </div>
          )
        }
      }
    </Query>
  );
};

export default UserDetails;
