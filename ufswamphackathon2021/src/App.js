import React from "react";
import Home from './pages/Home.js';
import Interest from './pages/Interest.js';
import How from './pages/How.js';
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
      <div>      
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Interest" component={Interest} />
            <Route exact path="/How" component={How} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
