import React, {useState } from 'react'
import './Taxes.css';
import Tax_brackets from "../../../assets/Tax_brackets.mp4";
import { Link } from 'react-router-dom';

export default function Taxes2() {

  // Declare a new state variable, which we'll call "count"
  // const [Q1, setQ1] = useState(0);
  // const [Q2, setQ2] = useState(0);

    return (
        <div className="taxPage">
          
           <div>
              

              <p className = "title"> Quiz </p>
              
              <div id = "content">

                <Link to="/Taxes" className = "button"> Prev </Link>
                  <div id = "t2_content">

                    <label for="q" className="title"> All your income is taxed at the same rate:</label>
                    <select className="q" name="q1">
                      <option value="True">True</option>
                      <option value="false">False</option>
                    </select>

                    <label for="q" className="title"> You cannot be taxed on deductible income:</label>
                    <select className="q" name="q2">
                      <option value="True">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>

                <Link to="/Taxes2" className = "button"> Next </Link>

              </div>

            </div>
        </div>
    )
}


