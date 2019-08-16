import React, { Component } from "react";
import { createUserAccount, logUserIn } from "../store/actions/authActions";
import { connect } from "react-redux";
import "../styles/auth.css";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      page: "signup",
      login: {
        username: "sammyodiagbe",
        password: "samsonosaro1@"
      },
      signup: {
        name: "Brandon haileys",
        username: "haileys",
        password: "hailme",
        confirm_password: "hailme"
      }
    };

    this._handleSignupInput = this._handleSignupInput.bind(this);
    this._createUserAccount = this._createUserAccount.bind(this);
    this._logUserIn = this._logUserIn.bind(this);
  }

  _createUserAccount(e) {
    e.preventDefault();
    // post to endpoint for create user account
    let data = this.state.signup;
    this.props._createUserAccount(data);
    this.signUpForm.reset();
  }

  _logUserIn(e) {
    e.preventDefault();
    let data = this.state.login;
    this.props._logUserIn(data);
  }

  _handleSignupInput(e) {
    const { page } = this.state;
    let change = { ...this.state[page], [e.target.id]: e.target.value };
    this.setState({
      [page]: change
    });
  }

  render() {
    const { page, signup, login } = this.state;
    const { form_error } = this.props;
    const { username, name, password, error } = form_error;
    const {
      username: sgnUsername,
      name: sgnName,
      password: sgnPass,
      confirm_password: sgnCPass
    } = signup;
    const { username: lgnUsername, password: lgnPassword } = login;
    return (
      <div className="auth-container">
        <div className="message">
          <h1>Chattie....</h1>
          <h3>Conversations that matter</h3>
          <p>Connecting people around the world</p>
        </div>
        <div className="auth-box">
          <div className="form-container">
            {page === "login" ? (
              <React.Fragment>
                <h3 className="title">Login</h3>
                {error && page === "login" && (
                  <p
                    className="form-error"
                    style={{ fontSize: ".8em", color: "red", padding: "5px 0" }}
                  >
                    {error}
                  </p>
                )}
                <form
                  ref={ref => {
                    this.loginForm = ref;
                  }}
                  noValidate
                  onSubmit={this._logUserIn}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="input-field"
                      value={lgnUsername}
                      onChange={this._handleSignupInput}
                      id="username"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input-field"
                      value={lgnPassword}
                      onChange={this._handleSignupInput}
                      id="password"
                    />
                  </div>
                  <div>
                    <button className="auth-btn">Login</button>
                  </div>
                </form>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h3 className="title">Signup</h3>
                {error && (
                  <p
                    className="form-error"
                    style={{ fontSize: ".8em", color: "red" }}
                  >
                    {error}
                  </p>
                )}
                <form
                  ref={ref => {
                    this.signUpForm = ref;
                  }}
                  noValidate
                  onSubmit={this._createUserAccount}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="your name"
                      className="input-field"
                      value={sgnName}
                      id="name"
                      onChange={this._handleSignupInput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="input-field"
                      id="username"
                      value={sgnUsername}
                      onChange={this._handleSignupInput}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input-field"
                      value={sgnPass}
                      id="password"
                      onChange={this._handleSignupInput}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="input-field"
                      value={sgnCPass}
                      id="confirm_password"
                      onChange={this._handleSignupInput}
                    />
                  </div>
                  <div>
                    <button className="auth-btn">Create account</button>
                  </div>
                </form>
              </React.Fragment>
            )}
          </div>
          <div>
            <button
              className="switch-auth"
              onClick={() => {
                this.setState({
                  page: "signup"
                });
              }}
            >
              Signup
            </button>
            <button
              className="switch-auth"
              onClick={() => {
                this.setState({
                  page: "login"
                });
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    form_error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _createUserAccount: data => {
      dispatch(createUserAccount(data));
    },
    _logUserIn: data => {
      dispatch(logUserIn(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
