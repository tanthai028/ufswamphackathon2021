import React from 'react'
import './Taxes.css';
import Tax_brackets from "../../../assets/Tax_brackets.mp4";
import { Link } from 'react-router-dom';

export default function Taxes() {
    return (
        <div className="taxPage">
          
           <div>
              
              <p className="title">How does the Tax System work?</p>

              <p className = "title"> Watch this video to find out!</p>
              
              <div id = "content">

                <p className = "buffer">     </p>

                <video id = "Tax_break" width="900"  controls>
                <source src = {Tax_brackets} type='video/mp4'></source>
                </video>

                <Link to="/Taxes2" className = "button"> Next </Link>

              </div>

            </div>
        </div>
    )
}


