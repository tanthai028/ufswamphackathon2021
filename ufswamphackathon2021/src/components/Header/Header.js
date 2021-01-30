import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id = "Header">
    	<Link to="/Home" className = "Link">About us</Link>
    	<Link to="/Interest" className = "Link">Investment</Link>
    	<Link to="/Budgeting" className = "Link">Budgeting</Link>
    	<Link to="/How" className = "Link">Tutorials</Link>
    </div>
  )
}

export default Header;
