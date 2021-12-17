import { useState } from "react"
import './calculator.css'
// import {all} from "mathjs"

const Calc = () => {

    const [userInput, setUserInput] = useState("")
    const buttonNums = ["7","8","9","*","4","5","6","/","1","2","3","+",".","0","=","-"]
    const updateInput = (e) => {
        setUserInput(e.target.value);
    }
    const clear =() => {
        setUserInput("");
    }
    return (
        <div>
            <div id="calcBody">              
                <div>
                    <textarea id="screen" value={userInput} onChange={updateInput} />
                    <div className="numButtons" id="clearButton" onClick={clear}><h1>C</h1></div>
                </div>
                <div id="calcNumButtons">                   
                    {buttonNums.map((item, index) => {
                        return (
                        <Card index={index} key={index} item={item} value={item} />)
                    })}              
                </div>
            </div>
        </div>
    )
};

const Card = (props) => {
    return (
        <div className="numButtons" onClick={props.item}>
            <h1>{props.item}</h1>
        </div>

    )
}

export default Calc