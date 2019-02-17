import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import styles from './styles.module.scss';

const SAVE_DATA = gql`
  mutation SaveData($first_name: String!, $last_name: String) {
    addUser(input: {
      first_name: $first_name,
      last_name: $last_name
    }) {
      id,
      first_name,
      last_name
    }
  }
`
class AddUser extends Component {
  state = {
    first_name: '',
    last_name: ''
  }
  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  saveUser = (addUser) => {
    const { first_name, last_name } = this.state;
    addUser({
      variables: { first_name, last_name }
    })
  }
  render() {
    const { first_name, last_name } = this.state;
    return (
      <Mutation mutation={SAVE_DATA}>
        {
          (addUser, { data }) => {
            if (data) return <div>Saved - {`${data.addUser.id} - ${data.addUser.first_name} - ${data.addUser.last_name}`}</div>
            return (
              <div className={styles.container}>
                <input className={styles.input} type="text" placeholder='First name' name="first_name" value={first_name} onChange={this.handleInput} />
                <input className={styles.input} type="text" placeholder='Last Name' name="last_name" value={last_name} onChange={this.handleInput} />
                <button className='btn' onClick={() => this.saveUser(addUser)}>Save User</button>
              </div>
            )

          }
        }
      </Mutation>

    );
  }
}

export default AddUser;
