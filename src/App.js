import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './styles/App.css';
import Views from './views/Views';

class App extends Component {
  render() {
    return <Views />;
  }
}

export default hot(module)(App);
