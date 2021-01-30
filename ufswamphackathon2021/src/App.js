import React from "react";
import Home from './Home.js';
import Interest from './Interest.js';
import How from './How.js';
import Budget from './Budget.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li className="navLink">
              <Link to="/Interest">Interest</Link>
            </li>
            <li>
              <Link to="/How">How</Link>
            </li>
            <li>
              <Link to="/Budget">Budget</Link>
            </li>
          </ul>
        </nav>
      </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Interest" component={Interest} />
          <Route exact path="/How" component={How} />
          <Route exact path="/Budget" component={Budget} />
        </Switch>
    </Router>
  );
}

export default App;
