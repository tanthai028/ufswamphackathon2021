
import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id = "_Header">
    	<Link to="/Home" className = "_Link">Home</Link>
    	<Link to="/Interest" className = "_Link">Investment</Link>
    	<Link to="/Budgeting" className = "_Link">Budgeting</Link>
    	<Link to="/How" className = "_Link">Tutorials</Link>
    	<Link to="/Game" className = "_Link">Game</Link>
    </div>
  )
}

export default Header;
