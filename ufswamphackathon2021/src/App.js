
import React from "react";
import {Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Home from './pages/Home/Home.js';
import Interest from './pages/Interest/Interest.js';
import How from './pages/How/How.js';
import Budgeting from "./pages/Budgeting/Budgeting.js";
import Game from "./pages/Game/Game.js";
import './App.css';
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">      
        <Header/>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Interest" component={Interest} />
            <Route exact path="/Budgeting" component={Budgeting} />
            <Route exact path="/Tutorials" component={How} />
            <Route exact path="/Game" component={Game} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
