import React, { useState } from 'react';
import './Budget.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Interest() {
    const [totalBalance, setTotalBalance] = useState(0);
    const [displayBalance, setDisplayBalance] = useState(0);
    //const [categories, setCategories] = useState(['Groceries', 'Entertainment', 'Bills', 'Emergency']);
    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState(0);
    const [categories, setCategories] = useState([]);
    const [totalPercent, setTotalPercent] = useState(0);
    const [warning, setWarning] = useState('')
    const [spent, setSpent] = useState(0);

    const options = [
        'groceries', 'entertainment', 'emergency'
      ];
      const defaultOption = options[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayBalance(totalBalance);

    }

    const handleCategories = (e) => {
        e.preventDefault();
        var calcAmount = totalBalance * (percentage/100);
        // var newBalance = totalBalance - calcAmount;
        // setTotalBalance(newBalance);
        var currentPercent = totalPercent + percentage;
        if(currentPercent <= 100) {
            setTotalPercent(currentPercent);
            setCategories(oldList => [...oldList, {name: name, percentage: percentage, catBalance: calcAmount}]);
        } else {
            setWarning("Check Value or 100% Reached.");
        }
    
        //setCategories(list => list.concat(name));
    }

    const spentFunction = (e) => {
        e.preventDefault();
        console.log("enters");
    }


    //object for 

    return (
        <div className="budget">
            <h1>Budget Page</h1>
            <form onSubmit={handleSubmit}>
                <p>Set Total Balance:</p>
                <input onChange={e => setTotalBalance(parseInt(e.target.value))} value={totalBalance}></input>
                <button>Submit</button>
            </form>
            <form className="cat" onSubmit={handleCategories}>
                <p>Input Categories</p>
                <input placeholder="category" onChange={cat => setName(cat.target.value)} value={name}></input>
                <input placeholder="percentage" onChange={per => setPercentage(parseInt(per.target.value))} value={percentage}></input>
                <button>Submit</button>
            </form>
            <form onSubmit={spentFunction}>
                <p>Spent</p>
                <input placeholder="spent" onChange={num => setSpent(num.target.value)} value={spent}></input>
                <Dropdown className="test" options={options} value={defaultOption} placeholder="Select an option"/>
                <button>Submit</button>
            </form>
            <p>{displayBalance}</p>

            <div>
                {categories.map((catItem, index) =>
                    <p>Category: {catItem.name} Percentage: {catItem.percentage} Amount: {catItem.catBalance} </p>
                )}
                <p>{warning}</p>
            </div>
        </div>
    )
}


