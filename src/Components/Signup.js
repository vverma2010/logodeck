import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import "../Styles/signup.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let userdata = [];
    userdata.push(this.state.email,this.state.name,this.state.password);
    localStorage.setItem("userdata",JSON.stringify(userdata));
    console.log('data',userdata);
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <div className="signup-container">
            <div className="form">
              <h1>Register</h1>
              <input
                onChange={this.handleEmailChange}
                type="email"
                placeholder="Email"
                required    
              />
              <input
                onChange={this.handleNameChange}
                type="text"
                placeholder="Name"
                required
              />
              <input
                onChange={this.handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
              <button onClick={this.handleSubmit} className="signup-button">
                Register
              </button>
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
