import React from 'react'
import './Taxes.css';
import Tax_filing from "../../../assets/Filing_taxes.mp4";
import { Link } from 'react-router-dom';

export default function Taxes4() {
    return (
        <div className="taxPage">
          
           <div>
              
              <p className="title">How does the Tax System work?</p>

              <p className = "title"> Watch this video to find out!</p>
              
              <div id = "content">

                <Link to="/Taxes3" className = "button"> Next </Link>

                <video id = "Tax_break" width="900"  controls>
                <source src = {Tax_filing} type='video/mp4'></source>
                </video>

                <Link to="/Tutorials" className = "button"> Next </Link>

              </div>

            </div>
        </div>
    )
}


