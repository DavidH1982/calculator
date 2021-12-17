import { useState } from "react"
import './calculator.css'
import { evaluate } from "mathjs"

const Calc = () => {

    const [userInput, setUserInput] = useState("")
    const buttonNums = ["7","8","9","*","4","5","6","/","1","2","3","+",".","0","=","-"]
    const updateInput = (e) => {
        setUserInput(e.target.value);
    }
    const clear =() => {
        setUserInput("");
    }
    const handler = (button) => {
        if(button === "="){
            setUserInput(evaluate(userInput))
        } else {
            setUserInput(userInput + button)
        }
    }
    return (
        <div>
            <div id="calcBody">              
                <div>
                    <input type="text" id="screen" value={userInput} onChange={updateInput} placeholder="0"/>
                    <div className="numButtons" id="clearButton" onClick={clear}><button><h1>C</h1></button></div>
                </div>
                <div id="calcNumButtons">                   
                    {buttonNums.map((button, index) => {
                        return (
                        <Card key={index} button={button} handler={handler}/>)
                    })}              
                </div>
            </div>
        </div>
    )
};

const Card = (props) => {
    return (
        <div className="numButtons">
            <button onClick={()=> props.handler(props.button)}><h1>{props.button}</h1></button>
        </div>
    )
}

export default Calc