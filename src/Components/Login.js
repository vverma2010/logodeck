import React, { Component } from "react";
import "../Styles/login.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Signup from "./Signup";

class Login extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <div className="login-container">
            <div className="form">
              <h1>Login</h1>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button className="login-button">Login</button>
              <span className="redirection">New User?</span>
              <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Login;
