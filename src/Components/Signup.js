import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import '../Styles/signup.css';
class Signup extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/login" component={Login}/>
          <div className="signup-container">
          <div className="form">
              <h1>Register</h1>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button className="signup-button">Register</button>
              <span className="redirection">Already a member?</span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Signup;
