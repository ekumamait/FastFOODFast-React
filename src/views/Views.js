import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/auth/Login';
import store from '../store';

class Views extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
        <Switch>
          <Route to="/login" component={Login} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default Views;
