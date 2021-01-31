
import React from "react";
import {Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Home from './pages/Home/Home.js';
import Interest from './pages/Interest/Interest.js';
import Tutorials from './pages/Tutorials/Tutorials.js';
import Budgeting from "./pages/Budgeting/Budgeting.js";
import Bank from "./pages/Tutorials/bank/Bank.js";
import Checks from "./pages/Tutorials/bills_checks/Checks.js";
import Taxes from "./pages/Tutorials/taxes/Taxes.js";
import Taxes2 from "./pages/Tutorials/taxes/Taxes2.js";
import Taxes3 from "./pages/Tutorials/taxes/Taxes3.js";
import Taxes4 from "./pages/Tutorials/taxes/Taxes4.js";
import Credit from "./pages/Tutorials/credit_debit/Credit.js";
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
            <Route exact path="/Tutorials" component={Tutorials} />
            <Route exact path="/Game" component={Game} />
            <Route exact path="/Bank" component={Bank} />
            <Route exact path="/Checks" component={Checks} />
            <Route exact path="/Taxes" component={Taxes} />
            <Route exact path="/Taxes2" component={Taxes2} />
            <Route exact path="/Taxes3" component={Taxes3} />
            <Route exact path="/Taxes4" component={Taxes4} />
            <Route exact path="/Credit" component={Credit} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
