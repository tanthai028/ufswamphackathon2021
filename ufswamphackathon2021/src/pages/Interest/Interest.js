import React, { useState } from 'react';
import './Interest.css';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from "@material-ui/core/styles";

export default function Interest() {
    const classes = useStyles();
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
        
        <div className="interestPage">
            <p className="title">Interest</p>
            <form onSubmit = {calculate}>
                <p className="headings">INPUT ANNUAL INTEREST</p>
                <input input className="input" onChange = {e => setAnnualIncome(e.target.value)} value = {annualIncome}  ></input>
                <br></br>
                <p className="headings">INPUT LOAN BALANCE</p>
                <input input className="input" onChange = {e => setLoanBalance(e.target.value)} value = {loanBalance}  ></input>
                <br></br>
                <p className="headings">INPUT DAYS SINCE LAST PAYMENT</p>
                <input input className="input" onChange = {e => setDays(e.target.value)} value = {days}  ></input>
                <br></br>
                <br></br>
                <Button  variant="outlined" color="secondary" className={classes.button}>Submit</Button>
            </form>
            <p2 className="info">Interest occured since last payment: {result}</p2>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: 12,
        letterSpacing: 2,
        margin: 12
    }
  }));


