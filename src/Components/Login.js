import React, { Component } from "react";
import "../Styles/login.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import Signup from "./Signup";
import Home from "./Home";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let hardCodedCredentials = {
      email: "abc1@gmail.com",
      password: "abc1",
    };

    console.log("email", this.state.email);
    console.log("password", this.state.password);
    if (
      this.state.email === hardCodedCredentials.email &&
      this.state.password === hardCodedCredentials.password
    ) {
      const token = "12345@qwerty";
      sessionStorage.setItem("auth-token", token);
      this.props.history.push("/home");
    } else {
      alert("Invalid email or password");
    }
  };
  render() {
    const email = this.state.email;
    console.log(email);
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <div className="login-container">
            <div className="form">
              <h1>Login</h1>
              <input
                onChange={this.handleEmailChange}
                type="email"
                placeholder="Email"
                required
              />
              <input
                onChange={this.handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
              <button onClick={this.handleSubmit} className="login-button">
                Login
              </button>
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
