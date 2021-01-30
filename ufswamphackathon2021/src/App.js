import React from "react";
import Home from './Home.js';
import Interest from './Interest.js';
import How from './How.js';
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
        <nav>
          <ul>
            <li>
              <Link to="/Interest">Interest</Link>
            </li>
            <li>
              <Link to="/How">How</Link>
            </li>
          </ul>
        </nav>
      </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Interest" component={Interest} />
          <Route exact path="/How" component={How} />
        </Switch>
    </Router>
  );
}

export default App;
