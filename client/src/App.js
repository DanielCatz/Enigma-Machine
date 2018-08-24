import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Enigma from './pages/enigma';
import NotFound from './pages/notfound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Enigma} />
      <Route exact path="/home" component={Enigma} />
      <Route exact path="/notfound" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
