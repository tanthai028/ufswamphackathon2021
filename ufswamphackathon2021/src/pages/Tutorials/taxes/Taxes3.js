import React, {useState } from 'react'
import './Taxes.css';
import Tax_brackets from "../../../assets/Tax_brackets.mp4";
import { Link } from 'react-router-dom';

export default function Taxes3() {

  // Declare a new state variable, which we'll call "count"
  

  const [income, setIncome] = useState(0);

  const handleIncomeChange = (e) => {
    e.preventDefault();
    setIncome(e.target.value);
    console.log(income)
  }

  const mySubmitHandler = (e) => {
    e.preventDefault();
      let tax = 0;
    if (income <=9875) { 
      tax = income*0.1;
    } else if (income <= 40125){
      tax = (income-9875)*0.12+987.5;
    } else if (income <= 85525){
      tax = (income-40125)*0.22+4617.5;
    } else if (income <= 163300){
      tax = (income-85525)*0.24+14605.5;
    } else if (income <= 207350){
      tax = (income-163300)*0.32+33271.5;
    } else if (income <= 518400){
      tax = (income-207350)*0.35+47367.5;
    } else {
      tax = (income-518400)*0.37+156235;
    }
    alert("The amount of tax you owe is: $" + tax);
  }



    return (
        <div className="taxPage">
          
           <div>
              

              <p className = "title"> Tax Bracket Calculator </p>
              
              <div id = "content">

                <Link to="/Taxes2" className = "button"> Prev </Link>

                  <form id = "t2_content" onSubmit={mySubmitHandler}>

                    <label for="income" className="title" > Enter your yearly income:</label>
                    <input type="text" id="income" name="income"defaultValue={income} onChange={handleIncomeChange}/>

                    <input
                      type='submit' className = "submit" 
                    />


                  </form>

                <Link to="/Taxes4" className = "button"> Next </Link>

              </div>

            </div>
        </div>
    )
}


