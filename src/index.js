import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './app/index.scss';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';


const client = new ApolloClient({ uri: '/graphql' });

const AppWithApolloClient = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(<AppWithApolloClient />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
