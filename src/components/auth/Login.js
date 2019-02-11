import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/AuthActions';
import img from '../../images/3fs.JPG';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.email) {
        this.setState({ emailError: nextProps.errors.email });
      } else if (nextProps.errors.password) {
        this.setState({ passwordError: nextProps.errors.password });
      } else {
        this.setState({ notFoundUser: nextProps.errors.error });
      }
    } else {
      window.localStorage.setItem('token', loginUser.nextProps.user.token);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      Username: this.state.username,
      Password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  }

  render() {
    return (
      <div className="homebackground">
        <form noValidate onSubmit={this.onSubmit}>
          <div className="loginBox">
            <h2>
              <img src={img} width="30%" />
            </h2>
            <h1>Order delicious food online!</h1>
            <h3>
              Have no account sign up <Link to="/register">here</Link>
            </h3>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <input type="submit" id="signinButton" name="submit" value="Sign In" />
            <small>
              <a>forgot password?</a>
            </small>
          </div>
        </form>
      </div>
    );
  }
}

Login.propType = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
