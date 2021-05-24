import React from 'react';
import Home from './components/Home';
import Nav from './components/NavBar';
import Docs from './components/Documentaries';
import About from './components/About';
import Search from './components/Search';
import NasaPhoto from './components/NasaPhoto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
// https://auth0.com/docs/quickstart/spa/react#configure-the-auth0provider-component

import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import Profile from './components/Profile';
import IsLoadingAndError from './components/IsLoadingAndError';


class App extends React.Component {

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(user);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Nav />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <Home /> : <Login />}
              </Route>
              <Route exact path="/picture" component={NasaPhoto} />
              <Route exact path="/about" component={About} />
              <Route exact path="/profile">
                {isAuthenticated ? <Profile userInfo={user} /> : ''}
                {/* I wish this showed something like "you're not logged in, please log in" instead of nothing */}
              </Route>
              <Route exact path="/documentaries" component={Docs} />
              <Route exact path="/search" component={Search} />
            </Switch>
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
