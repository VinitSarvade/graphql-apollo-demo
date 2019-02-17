import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const GET_USERS = gql`
  query GetAllUsers {
    users {
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

const showError = error => (
  <div>{error}</div>
);

const renderUsers = ({ users }) => (
  <div className={styles.users}>
    {
      users.map(user => (
        <Link className={styles.user} key={user.id} to={`/users/${user.id}`}>
          <img className={styles.avatar} alt='' src={user.avatar} />
          <div>{`${user.first_name} ${user.last_name}`}</div>
          <div className={styles.pointer}>&gt;</div>
        </Link>
      ))
    }
  </div>
);

const Users = () => {
  return (
    <div className={styles.App}>
      <Link className='btn' to='/add-user'>Add User</Link>
      <Query query={GET_USERS}>
        {
          ({ loading, error, data }) => {
            if (loading) return showLoading();
            if (error) return showError(error);
            return renderUsers(data);
          }
        }
      </Query>
    </div>
  );
};

export default Users;
