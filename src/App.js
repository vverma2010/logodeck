import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />

          <div className="welcome-page">
            <div className="left">
              <span>New User?</span>
              <Link to="/signup">
                <button className="sign-up">Register</button>
              </Link>
            </div>
            <div className="right">
              <span>Already a member?</span>
              <Link to="/login">
                <button className="sign-up">Sign In</button>
              </Link>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
