import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/login/Login';

class Views extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route to="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Views;
