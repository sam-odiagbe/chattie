import React, { Component } from "react";
import Chattie from "./components/chattie";
import "./styles/app.css";
import Loader from "./components/loader";
import { connect } from "react-redux";
import { verifyUser, logUserOut } from "./store/actions/authActions";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // verify the user
    this.props.verifyUser();
  }
  render() {
    const { verifying, user, logout } = this.props;
    return (
      <div className="App">
        {verifying ? (
          <Loader message="Verifying authentication" />
        ) : (
          <Chattie user={user} logout={logout} />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    verifying: state.auth.verifying,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verifyUser: () => {
      dispatch(verifyUser());
    },
    logout: () => {
      dispatch(logUserOut());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
