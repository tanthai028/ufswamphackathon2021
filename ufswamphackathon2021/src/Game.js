import React, { useState } from 'react';

export default function Game() {
    const [reply, setReply] = useState(0)
    //const [budget, setBudget] = useState(1000)
    // const [hunger, setHunger] = useState(100)
    // const [hapiness, setHapiness] = useState(50)
    // const [bills, setBills] = useState(0)

    const[questions, setQuestions] = useState("Enter 1 to start")
    //const[text, setText] = useState("")

 const run = (e) => {
    e.preventDefault();
    var entertainment = Math.floor(Math.random()*(50-10+1)+20);
    var x = reply;
    switch(x){
        //Start
        case 1: setQuestions(entertainment)
                console.log(questions)
                break;

        case 2: break;
        default: break;
    }
 }
    return (
        <div>
        <h1>The spending game</h1>
        <form onSubmit = {run}>
            <p>{questions}</p>
            <input onChange = {e => setReply(e.target.value)} value = {reply}  ></input>
            <button>Submit</button>
        </form>
        </div>
    )
}