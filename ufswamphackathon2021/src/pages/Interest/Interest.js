import React, { useState } from 'react';

export default function Interest() {
    const [annualIncome, setAnnualIncome] = useState(0) 
    const [loanBalance, setLoanBalance] = useState(0)
    const [days, setDays] = useState(0)
    const [result, setResult] = useState(0)
    
    const calculate = (e) => {
        e.preventDefault();
        var decimal = annualIncome/100;
        var annualInt = decimal/365;
        var dailyInt = annualInt * loanBalance;
        var monthlyInt = dailyInt * 30;
        setResult(monthlyInt);

    }


    return (
        
        <div>
            <h1>Interest Page</h1>
            <form onSubmit = {calculate}>
                <p>Input annual interest</p>
                <input onChange = {e => setAnnualIncome(e.target.value)} value = {annualIncome}  ></input>
                <br></br>
                <p>Input loan balance</p>
                <input onChange = {e => setLoanBalance(e.target.value)} value = {loanBalance}  ></input>
                <br></br>
                <p>Input days since last payments</p>
                <input onChange = {e => setDays(e.target.value)} value = {days}  ></input>
                <br></br>
                <br></br>
                <button>Submit</button>
            </form>
            <p2>Interest occured since last payment: {result}</p2>
        </div>
    )
}


