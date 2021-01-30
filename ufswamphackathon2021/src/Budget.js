import React, { useState, useEffect } from 'react';
import './Budget.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { PieChart } from 'react-minimal-pie-chart';
import moment from 'moment';


export default function Interest() {
    const classes = useStyles();
    const [totalBalance, setTotalBalance] = useState('');
    const [displayBalance, setDisplayBalance] = useState(0);
    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState('');
    const [categories, setCategories] = useState([]);
    const [totalPercent, setTotalPercent] = useState(0);
    const [warning, setWarning] = useState('')
    const [spent, setSpent] = useState('');
    const [pickSpent, setPickSpent] = useState('');
    const [dropdownList, setDropdownList] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);
    var colors = ['#fad15f', '#f043da', '#82f4ff', '#6CFF60', '#FFBA85'];
    const [colorCount, setColorCount] = useState(0);
    const [isSpentSubmitted, setIsSpentComitted] = useState(false);
    const [date, setDate] = useState('');
    

    useEffect(() => { 
        setDate(moment().format("MMMM DD, Y"));
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayBalance(totalBalance);

    }

    // const handleChoice = (event) => {
    //     setPickSpent(event.target.value);
    //   };

    const handleCategories = (e) => {
        e.preventDefault();
        var calcAmount = totalBalance * (percentage/100);
        // var newBalance = totalBalance - calcAmount;
        // setTotalBalance(newBalance);
        var currentPercent = totalPercent + percentage;
        if(currentPercent <= 100) {
            setTotalPercent(currentPercent);
            setCategories(oldList => [...oldList, {name: name, percentage: percentage, catBalance: calcAmount, color: colors[colorCount]}]);
            setPieChartData(oldList => [...oldList, {title: name, value: percentage, color: colors[colorCount]}]);
            setDropdownList(oldList => [...oldList, name]);
            var count = colorCount + 1;
            setColorCount(count);
        } else {
            setWarning("Check Value or 100% Reached.");
        }
    }

      const handleSpent = (e) => {
        setIsSpentComitted(true);
    }

    useEffect(() => {
        if (isSpentSubmitted) {
            Object.keys(categories).map(function(key,index) {
                if(pickSpent == categories[key].name && categories[key].catBalance - spent >= 0) {
                    categories[key].catBalance  = categories[key].catBalance - spent;
                    console.log(categories[key].catBalance);
                    console.log(categories);
                }
            setIsSpentComitted(false);
           })

        }
    }, [isSpentSubmitted]);




    //object for 

    return (
        <div className="budget">
        <div className="topText">
            <p className="title">BUDGET PAGE</p>
            <p className="date">{date}</p>
        </div>
        <div className="topContainer">
         <div className="formArea">
                <form onSubmit={handleSubmit}>
                    <p className="headings">SET TOTAL MONTHLY BALANCE</p>
                    <input className="input" placeholder="amount" onChange={e => setTotalBalance(parseInt(e.target.value))} value={totalBalance}></input>
                    <Button variant="outlined" color="secondary" onClick={handleSubmit}>Submit</Button>
                </form>
                <form className="cat" onSubmit={handleCategories}>
                    <p className="headings">ADD CATEGORIES</p>
                    <input className="input" placeholder="category name" onChange={cat => setName(cat.target.value)} value={name}></input>
                    <input className="input" placeholder="percentage" onChange={per => setPercentage(parseInt(per.target.value))} value={percentage}></input>
                    <Button variant="outlined" color="secondary" onClick={handleCategories}>Submit</Button>
                </form>
                <form className="spending" onSubmit={handleSpent}>
                    {/* <Dropdown className="test" options={dropdownList} onChange={e => setPickSpent(e)} placeholder="Select an option"/> */}
                    <div className={classes.root}>
                        <p className="headings">SPENT</p>
                        <input className="input" placeholder="amount" onChange={num => setSpent(num.target.value)} value={spent}></input>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            className={classes.selectEmpty}
                            value={pickSpent}
                            inputProps={{
                                classes: {
                                    icon: classes.icon,
                                },
                            }}
                            onChange={choice => setPickSpent(choice.target.value)}
                            >
                            <MenuItem value="">
                                <em>Select</em>
                            </MenuItem>
                            {categories.map((catItem, index) =>
                                <MenuItem value={catItem.name}>{catItem.name}</MenuItem>
                            )}
                        </Select>
                        <Button variant="outlined" color="secondary" onClick={handleSpent}>Submit</Button>
                    </div>
                </form>
            </div>
             <div className="infoArea">
                    <p className="headings">TOTAL BALANCES: ${displayBalance}</p>
                    <div className="catInfo">
                        {categories.map((catItem, index) =>
                            <div className="tagBox" style={{backgroundColor: catItem.color}}><p>{catItem.name} | balance: ${catItem.catBalance} </p></div>
                            
                            //<p>Category: {catItem.name} | Amount: ${catItem.catBalance} | Percentage: {catItem.percentage}</p>
                        )}
                        <p className="warning">{warning}</p>
                    </div>
             </div>
        </div>
        

            <div className="pieChart">
                <PieChart
                    radius={25}
                    viewBoxSize={[300, 100]}
                    center={[150, 40]}
                    data={
                        pieChartData 
                    }/>
            </div>

    

            
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
        width: 200,
        marginRight: 10,
        color: "white",
        "&:before": {
            borderColor: "blueviolet",
            //width: 200,
        }, 
        '&:after': {
            borderColor: "blueviolet",
        },
        icon: {
            fill: "blueviolet",
        }
    },
    multilineColor:{
        color:'red',
    
    },
    specialOutline: {
        borderColor: 'red',
        color: 'red'
      },
      cardRoot: {
        width: 300,
        height: 300,
        backgroundColor: '#8a2be2',
        color: 'white'
      },
      title: {
        fontSize: 20,
        padding: 10,
        letterSpacing: 3
      },
  }));


