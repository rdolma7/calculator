import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [initialValue, setValue]=useState(null);
  const buttonValues = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  const handleClick=(button)=>{
    console.log(button)
if(typeof button==='number'){
  setValue(button);
  }else{
    console.log('not a number')
  }

  };
  const mappedButtons=buttonValues.map((buttonValue, index) => (
          <Button  key={index} buttonValue={buttonValue} onClick={handleClick}/>
        ));
        return (
        <>
    <Button />
      <div className="calculator-container">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="display">{initialValue}</div>
        {mappedButtons}
        <div className="buttons"></div>
      </div>
    </>
  );
}

export default App;
