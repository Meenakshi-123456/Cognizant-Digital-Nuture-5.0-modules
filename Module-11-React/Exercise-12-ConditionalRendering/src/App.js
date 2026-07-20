import React, { Component } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import Login from "./Login";
import Logout from "./Logout";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <Logout onClick={this.logout} />
          <UserPage />
        </div>
      );
    }

    return (
      <div>
        <Login onClick={this.login} />
        <GuestPage />
      </div>
    );
  }
}

export default App;
