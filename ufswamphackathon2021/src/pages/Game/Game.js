import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Game.css'
import { makeStyles } from "@material-ui/core/styles";

export default function Game() {
    const classes = useStyles();
    const [reply, setReply] = useState("")
    const [budget, setBudget] = useState(150)
    const [week, setWeek] = useState(0)
    const [food, setFood] = useState(75)
    const [happiness, setHappiness] = useState(50)
    const [direction, setDirection] = useState(0)
    const [isStart, setIsStart] = useState(false);
    // const [bills, setBills] = useState(0)

    const[instruction, setInstruction] = useState("Press Start to Play")
    const[start,setStart] = useState("Start")
    const[textInQ,setTextInQ] = useState("")
    const[story,setStory] = useState("You are stranded in a world full of broken people and machine, where money is all that exists...Let's see how long you can survive for.")

    
    const[npcReply, setNpcReply] = useState("0")
    const[purchased,setPurchased] = useState("0")
    const[nEvents,setNEvents] = useState(1)


    const[end, setEnd] = useState("False")

 const run = (e) => {
    e.preventDefault();
    setStart("Submit")
    setInstruction("[Input the command or number inside the bracket for choice]")
    setIsStart(true)
    console.log(isStart);

    var entertainmentCost = Number(Math.floor(Math.random()*(20-1+1)+1));
    var foodCost = Number(Math.floor(Math.random()*(25-5+1)+5));
    var playerChoice = Number(reply);
    var foodVal;
    var happinessVal;
    var weekNum;

    var nouruishment = Number(Math.floor(Math.random()*(5-1+1)+1))
    var smile = Number(Math.floor(Math.random()*(6-0+1)+0))

    //var randQuestion = Number(Math.floor(Math.random()*(10-1+1)+1));
    // giive random question
    if (Number(week) === 0){
        setStory("In the middle of a seemingly never-ending road heading directly [North] and [South]. The direction you choose matters.")
        weekNum = week + 1
        setWeek(weekNum)
    } else{
        setStory("");
    }
    

    switch(reply.toLowerCase()){
        case "north":   setTextInQ(" Week " + week + ": In the North, you stumble upon a bright neon sign conencted to a small hut saying, 'Goods for Sale'. A cybernetic man is selling goods inside.")
                        setInstruction(" He is willing to sell you food[1] for $" + foodCost + " or a flute[2] for $" + entertainmentCost)
                        weekNum = week + 1;
                        setWeek(weekNum)
                        foodVal = food - Number(Math.floor(Math.random()*(10-5+1)+5))
                        setFood(foodVal)
                        setDirection("north")
                        setNpcReply(1);

                        break;
        case "south":  setTextInQ(" Week " + week + ": In the South, a crew of raggedy robots are watching two humans in shackles fight. Off in the distance, their belongings lie on the ground.")
                        setInstruction("[Steal] items or [Move] forward.")
                        weekNum = week + 1;
                        setWeek(weekNum)
                        foodVal = food - Number(Math.floor(Math.random()*(10-5+1)+5))
                        setFood(foodVal)
                        setDirection("south")
                        break;

        case "move": setTextInQ("Your tread on forward.")
                        foodVal = food - Number(Math.floor(Math.random()*(15-5+1)+5))
                        setFood(foodVal)
                        break;
        case "steal": setTextInQ("You snatch a bag and make a run for it. Inside you find a variety of mechanical parts. These will fetch quite the price.")
                        setInstruction("...")
                        newBudget = Number(budget) + 50;
                        setBudget(newBudget)
                        foodVal = food - Number(Math.floor(Math.random()*(25-5+1)+5))
                        setFood(foodVal)
                        setTimeout(function(){
                            setTextInQ(" A distance away from the theft, nervousness sets in. Looking side to side. You cannot help but wonder if they are looking for you.")
                            setInstruction("Find a place to [Lie low] or [Move] forward.")
                            setFood(foodVal)
                            happinessVal = happiness - Number(Math.floor(Math.random()*(15-3+1)+3));
                            setHappiness(happinessVal)

                        }, 5000); 
                        break;   
        case "ignore":  setTextInQ("The child stares blankly at you. Then slowly walks away.")
                        setInstruction( "[Move] on or [Follow] the child")
                        happinessVal = happiness - Number(Math.floor(Math.random()*(15-3+1)+3));
                        setHappiness(happinessVal)
                        break;
        case "give":    setTextInQ("You give the child a sack of food. He smiles and runs off. You pack your stuff, put out the fire and continue forward.")
                        setInstruction("Input [Move] to go forward")
                        break;
        case "follow":  setTextInQ("The child seems to head towards nowhere, a field of nothing. It begins to glow orange. Are your eyes deceiving you? No. The land and the sky begin to glow. Only then do you realize that everything was orange all along.")
                        setHappiness(100)
                        setInstruction("[Move]")
                        setEnd("True")
                        break;
        case "donate": setTextInQ("You walk up to the door and drop some coins into the box. A bell rings violently. You flee as the sound of the bell fades away behind you.")
                        foodVal = food - Number(Math.floor(Math.random()*(15-5+1)+5))
                        happinessVal = happiness - Number(Math.floor(Math.random()*(15-3+1)+3));
                        newBudget = Number(budget) - 20;
                        setBudget(newBudget);
                        setHappiness(happinessVal)
                        setFood(foodVal)
                        setInstruction("...")
                        setTimeout(function(){
                        setTextInQ("Tired and out of breath. You can force yourself to [move] forward or find a place to [rest].")
                        setInstruction("[Input the command or number inside the bracket for choice].")
                        },8000);
                        break;
        case "man":     setTextInQ("'You chose the right man. Meet me here in a week and I will make you a RICH man. HAHAHAHHA!'")
                        newBudget = Number(budget) - 50;
                        setBudget(newBudget);
                        setInstruction("...")

                        setTimeout(function(){
                            weekNum = week + 1;
                            setWeek(weekNum)
                            setTextInQ(" Week " + week + ": A week later you return to the same location to find no one in sight.")
                            happinessVal = happiness - 25;
                            setHappiness(happinessVal)
                            setInstruction("Input [Move] to go forward.")
                        },5000);
                        break;
        case "rest":    setTextInQ("Finding a nice flat ground, you set up camp and doze off...")
                        setInstruction("...")
                        setTimeout(function(){
                        foodVal = food - Number(Math.floor(Math.random()*(15-5+1)+5))
                        setFood(foodVal)
                        setTextInQ(" Week " + week + ": 'HEY, WAKE UP!' You shoot up, staring at the tall man that took your money before. 'Hey, man...I got your money now $100. Double what you gave.'")
                        setInstruction("[Take] money and tell him to get away or make him pay [interest] since he was late")
                        },5000);
                        break;
        case "interest": setTextInQ("...Fine take this 50. Thanks for the money, but I hope to never see you again heh.")
                         setInstruction("[Leave] the area or ask for [More].")
                         break;
        case "leave":   setTextInQ("Long afer you have left, you begin to feel hungry and go to grab a bite. Only to find that there is nothing left. That man stole all your food.")
                        setInstruction("...")
                        setTimeout(function(){
                        setFood(0)
                        weekNum = week + 1;
                            setWeek(weekNum)
                        setTextInQ("Week " + week + ": The road is no longer stright. Your hunger changes you")
                        setInstruction("Try and [move] forward.")
                        },5000);
                        break
        default:
                break;
    }
    //answer
    switch(playerChoice){
        //food
        case 1: var newBudget = Number(budget) - foodCost;
                setBudget(newBudget);
                 foodVal = food + Math.floor(foodCost/4) + nouruishment;
                 happinessVal = happiness - Number(Math.floor(Math.random()*(15-3+1)+3));
                if (happinessVal > 100){
                    happinessVal = 100;
                }
                if (foodVal > 100){
                    foodVal = 100;

                }
                setFood(foodVal)
                setHappiness(happinessVal)
                setInstruction("Input [Move] to go forward")
                setPurchased(0)
                break;

                
        //entertainment
        case 2: newBudget = Number(budget) - entertainmentCost;
                setBudget(newBudget);
                foodVal = food - Number(Math.floor(Math.random()*(15-5+1)+5))
                happinessVal = happiness + Math.floor(entertainmentCost/4) + smile
                if (happinessVal > 100){
                    happinessVal = 100;
                }
                if (foodVal > 100){
                    foodVal = 100;

                }
                setFood(foodVal)
                setHappiness(happinessVal)
                setInstruction("Input [Move] to go forward")
                setPurchased(0)

                break;
        default: 
            break;
    }
        //reply
    switch(Number(npcReply)){
        case 1: setTextInQ("The merchant thanks you for your purchase and waves you off with his metallic arm")
        setNpcReply(0)
                break;
        default: 
            break;
    }
    
    //Move randome events
    if(reply.toLowerCase() === "move" && direction === "south"){
        var event = Number(nEvents) + 1;
        switch(Number(nEvents)){ 
            case 1: setTextInQ(" Week " + week + ": In a distance you spot an oject off the road in the distance. It approaches you. A small child with eyes that glow orange. They beg for food.")
                    setInstruction("[Give] food or [Ignore] the odd child.")
        }
    }
    if(reply.toLowerCase() === "move"&& direction === "north"){
        var event = Number(nEvents) + 1;
        setNEvents(event);
        console.log(Number(nEvents))
        switch(Number(nEvents)){
            case 1: setTextInQ( "Week " + week + ": Two individual approaches you. A tall, lean man and a short,chubby robot. They man says 'Hey, I'm trying to open a shop for robots repair but I'm going to need some help with a small payment. I'll pay you back DOUBLE the amount.' The robot says'HEY, I am trying to open a robot shop too. Give it to me not him! HE IS NOT EVEN A MACHINE! I WILL DOUBLE IT TOO!  ")
                    setInstruction("Who do you choose [man], [machine], or [move] on ignoring the two")
                    break;
            case 2: setTextInQ(" Week " + week + ": Odd, A church stands in the middle of nowhere. The doors are closed yet their donation box stands")
                    setInstruction("[Donate] or [leave]")
                    break;

        }
    }

    //if hapiness or food or budget goes to zero games end
    if(Number(happiness) <= 0){
        setTextInQ("The emptiness brought madness. You are now one of the broken.")
        setInstruction("Try and [move] forward")
        setEnd("True")
    }
    if(Number(food) <= 0){
        setTextInQ("Your hunger overwhelms you. Be they men or machine, you will devour")
        setInstruction("Try and [move] forward")
        setEnd("True")
    }
    if(Number(budget) <= 0){
        setTextInQ("Now without wealth, you will find a new way to survive.")
        setEnd("True")
    }
    if(end === "True"){
        setTextInQ("The end has arrived...but you can always try again")
        setInstruction("Reset to play again")
    }
 }


 const setUp = (e) => {
     setInstruction("Press Start to Play")
     setBudget(150)
     setWeek(0)
     setFood(75)
     setHappiness(50)
     setStart("Start")
     setStory("You are stranded in a world full of broken men and machine where money is all..lets see how long you can survive for")
     setTextInQ("")
     setEnd("False")
 
 }
    return (
        <div className="gamePage">
        <p className="gameTitle">Money Run</p>
        <form onSubmit = {run}>
            <div className="healthText">
                <center><p className="gameText">MONEY | ${budget}</p></center>
                <center><p className="gameText">FOOD | {food} points</p></center>
                <center><p className="gameText">HAPPINESS | {happiness}%</p></center>
            </div>

            <div className="storyText">
                <div className="storyLine"><center><p className="gameText">{story}</p></center></div>
                <center><p className="gameText">{textInQ}</p></center>
                <center><p className="gameText">{instruction}</p></center>
            </div>

            {/* <center> <input className="gameInput" onChange = {e => setReply(e.target.value)} value = {reply}  ></input></center> */}
            <br></br>
            <div className="input">
                {isStart ?  (<center> <input className="gameInput" onChange = {e => setReply(e.target.value)} value = {reply}  ></input></center> ) : <p></p> }
            </div>
            <center><Button variant="outlined" color="secondary" className={classes.button} onClick={run}>{start}</Button></center>

        <form onSubmit = {setUp}>
            <br></br>
            <center><Button variant="outlined" color="secondary" className={classes.button} onClick={setUp}>Reset</Button></center>
        </form>
        </form>
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