import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/AuthActions';
import img from '../../images/3fs.JPG';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
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
      window.localStorage.setItem('token', registerUser.nextProps.user.token);
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      user_name: this.state.username,
      user_email: this.state.email,
      user_password: this.state.password
    };
    this.props.registerUser(userData, this.props.history);
  }

  render() {
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <div className="loginBox">
          <h2>
            <img src={img} width="30%" />
          </h2>
          <h3>
            Have an account Log In <Link to="/login">here</Link>
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
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
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
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <input type="submit" id="signinButton" name="submit" value="Sign Up" />
          <small>
            By submiting, you agree to the <a href="#">Terms and Conditions</a> here.
          </small>
        </div>
      </form>
    );
  }
}

Register.propType = {
  registerUser: PropTypes.func.isRequired,
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
  { registerUser }
)(withRouter(Register));
