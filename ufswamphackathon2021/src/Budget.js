import React, { useState } from 'react';
import './Budget.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import moment from 'react-moment';
import FormControl from '@material-ui/core/FormControl';
import { PieChart } from 'react-minimal-pie-chart';


export default function Interest() {
    const classes = useStyles();
    const [totalBalance, setTotalBalance] = useState(0);
    const [displayBalance, setDisplayBalance] = useState(0);
    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState(0);
    const [categories, setCategories] = useState([]);
    const [totalPercent, setTotalPercent] = useState(0);
    const [warning, setWarning] = useState('')
    const [spent, setSpent] = useState(0);
    const [pickSpent, setPickSpent] = useState('');
    const [dropdownList, setDropdownList] = useState([]);

    

    const options = [
        'groceries', 'entertainment', 'emergency'
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayBalance(totalBalance);
        console.log("WORKING");

    }

    const handleChoice = (event) => {
        setPickSpent(event.target.value);
      };

    const handleCategories = (e) => {
        e.preventDefault();
        var calcAmount = totalBalance * (percentage/100);
        // var newBalance = totalBalance - calcAmount;
        // setTotalBalance(newBalance);
        var currentPercent = totalPercent + percentage;
        if(currentPercent <= 100) {
            setTotalPercent(currentPercent);
            setCategories(oldList => [...oldList, {name: name, percentage: percentage, catBalance: calcAmount}]);
            setDropdownList(oldList => [...oldList, name]);
            console.log(dropdownList);
        } else {
            setWarning("Check Value or 100% Reached.");
        }

    }

    const spentFunction = (e) => {
        e.preventDefault();
        console.log("enters");
        // Object.keys(categories).map(function(key,index) {
        //     console.log(categories[key].name)
        // })
    }



    //object for 

    return (
        <div className="budget">
            <p className="title">BUDGET PAGE</p>
            <form onSubmit={handleSubmit}>
                <p className="headings">SET TOTAL BALANCE</p>
                <input className="input"  onChange={e => setTotalBalance(parseInt(e.target.value))} value={totalBalance}></input>
                <Button variant="outlined" color="secondary" onClick={handleSubmit}>Submit</Button>
            </form>
            <form className="cat" onSubmit={handleCategories}>
                <p className="headings">ADD CATEGORIES</p>
                <input className="input" onChange={cat => setName(cat.target.value)} value={name}></input>
                <input className="input" onChange={per => setPercentage(parseInt(per.target.value))} value={percentage}></input>
                <Button variant="outlined" color="secondary" onClick={handleCategories}>Submit</Button>
            </form>
            <form className="spending" onSubmit={spentFunction}>
    
                {/* <Dropdown className="test" options={dropdownList} onChange={e => setPickSpent(e)} placeholder="Select an option"/> */}
                <div className={classes.root}>
                    <p className="headings">SPENT</p>
                    <input className="input" onChange={num => setSpent(num.target.value)} value={spent}></input>
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
                        onChange={handleChoice}
                        >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        {categories.map((catItem, index) =>
                            <MenuItem value={catItem.name}>{catItem.name}</MenuItem>
                        )}
                
                    </Select>
                    <Button variant="outlined" color="secondary" onClick={handleSubmit}>Submit</Button>
                </div>
               
            </form>
            <p>{displayBalance}</p>

            <div>
                {categories.map((catItem, index) =>
                    <p>Category: {catItem.name} Percentage: {catItem.percentage} Amount: {catItem.catBalance} </p>
                )}
                <p>{warning}</p>
                <p>{pickSpent}</p>
            </div>

            <PieChart
                radius={10}
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
                />;
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
    "&:before": {
        borderColor: "blueviolet",
        //width: 200,
      }, 
      '&:after': {
        borderColor: "blueviolet",
    }
    }, icon: {
        fill: "blueviolet",
    },
    multilineColor:{
        color:'red',
    
    },
    specialOutline: {
        borderColor: 'red',
        color: 'red'
      },
  }));


