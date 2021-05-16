import React from 'react';
import Home from './components/Home';
import Nav from './components/NavBar';
import Mars from './components/Mars';
import About from './components/About';
import Search from './components/Search';
import NasaPhoto from './components/NasaPhoto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import './styles/App.css';

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
            {/* <Container className="App"> */}
            <Nav />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <Home /> : <Login />}
              </Route>
              <Route exact path="/picture" component={NasaPhoto} />
              <Route exact path="/about" component={About} />
              <Route exact path="/profile">
                {isAuthenticated ? <Profile userInfo={user} /> : ''}
              </Route>
              <Route exact path="/mars" component={Mars} />
              <Route exact path="/search" component={Search} />
            </Switch>
            {/* </Container> */}
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
