import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Users from './components/Users';
import UserDetails from './components/UserDetails';
import AddUser from './components/AddUser';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/add-user' component={AddUser} />
          <Route path='/users/:id' component={UserDetails} />
          <Route path='/users' component={Users} />
          <Redirect path='/' to='/users' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
