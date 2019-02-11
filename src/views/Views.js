import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/auth/Login';
import store from '../store';
import Register from '../components/auth/Register';
import Landing from '../components/layout/Landing';

class Views extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/menu" component={Landing} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Views;
