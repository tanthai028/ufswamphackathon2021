import React from 'react'
import './Tutorials.css';
import { Link } from 'react-router-dom';

export default function Tutorials() {
    return (
        <div className="_tutorialPage">
          <p className="title">Tutorials</p>
           <div className = "module_Tutorials">

              <div className = "module_Card"><Link to="/Credit" className = "module_Cards">Credit and Debit 101</Link></div>
              <div className = "module_Card"><Link to="/Taxes" className = "module_Cards">Taxes 101</Link></div>
              <div className = "module_Card"><Link to="/Bank" className = "module_Cards">How To Bank</Link></div>
              <div className = "module_Card"><Link to="/Checks" className = "module_Cards">How To Checks and Bill</Link></div>
              
           </div>
           <div className="checkContainer">
               <div className="check">
                   
               </div>
           </div>
        </div>
    )
}


