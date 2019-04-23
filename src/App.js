import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Login from "./pages/login";
import Home from "./pages/home";
import './App.css';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' })

const App = () => {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
          </Switch>
          </Suspense>
        </Router>
      </ApolloProvider>
    );
}

export default App;
