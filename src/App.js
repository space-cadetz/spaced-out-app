import React from 'react';
import Home from './components/Home';
import Nav from './components/NavBar';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import About from './components/About';
import Calender from './components/Calender';
import NasaPhoto from './components/NasaPhoto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Container className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/picture" component={NasaPhoto} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/calender" component={Calender} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
