import React, {useState } from 'react'
import './Taxes.css';
import { Link } from 'react-router-dom';

export default function Taxes2() {

  // Declare a new state variable, which we'll call "count"
  

  const [Q1, setQ1] = useState("True");
  const [Q2, setQ2] = useState("True");

  const handleQ1Change = (e) => {
    e.preventDefault();
    setQ1(e.target.value);
    console.log(Q1)
  }

  const handleQ2Change = (e) => {
    e.preventDefault();
    setQ2(e.target.value);
    console.log(Q2)
  }

  const mySubmitHandler = (e) => {
    e.preventDefault();

    if (Q1 == "False" && Q2 == "True") {
      alert("You got it right, click NEXT to move on.");
    } else {
      alert(Q2);
    }
  }



    return (
        <div className="taxPage">
          
           <div>
              

              <p className = "title"> Quiz </p>
              
              <div id = "content">

                <Link to="/Taxes" className = "button"> Prev </Link>

                  <form id = "t2_content" onSubmit={mySubmitHandler}>

                    <label for="q1" className="title" > All your income is taxed at the same rate:</label>
                    <select className="q" name="q1" defaultValue={Q1} onChange={handleQ1Change}>
                      <option value="True">True</option>
                      <option value="False">False</option>
                    </select>

                    <label for="q2" className="title"> You cannot be taxed on deductible income:</label>
                    <select className="q" name="q2" defaultValue={Q2} onChange={handleQ2Change}>
                      <option value="True">True</option>
                      <option value="False">False</option>
                    </select>

                    <input
                      type='submit' className = "submit" 
                    />


                  </form>

                <Link to="/Taxes3" className = "button"> Next </Link>

              </div>

            </div>
        </div>
    )
}


