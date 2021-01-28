import React, { useState, useEffect, useRef } from 'react';
import './App.css';
function App (){
  const [result, setResult] = useState('');
  const inputRef= useRef(null);

  useEffect(() => inputRef.current.focus());

  function clickHandle(e) {
    setResult(result + e.target.name);
  }

  function backspace(){
    setResult(result.slice(0, result.length -1));
  }

  function clear(){
    setResult('');
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return(
    <div className="App">
      <h1>Calculator</h1>
    
    <div className="calc-app">
      <from>
        <input type="text" value={result} ref={inputRef}/>
      </from>

      <div className="keypad">
        <button className="press" id="clear" onClick={clear}>Clear</button>
        <button className="press" id="backspace" onClick={backspace}>C</button>
        <button className="press" name="+" onClick={clickHandle}>+</button>
        <button className="press" name="7" onClick={clickHandle}>7</button>
        <button className="press" name="8" onClick={clickHandle}>8</button>
        <button className="press" name="9" onClick={clickHandle}>9</button>
        <button className="press" name="-" onClick={clickHandle}>-</button>
        <button className="press" name="4" onClick={clickHandle}>4</button>
        <button className="press" name="5" onClick={clickHandle}>5</button>
        <button className="press" name="6" onClick={clickHandle}>6</button>
        <button className="press" name="*" onClick={clickHandle}>&times;</button>
        <button className="press" name="1" onClick={clickHandle}>1</button>
        <button className="press" name="2" onClick={clickHandle}>2</button>
        <button className="press" name="3" onClick={clickHandle}>3</button>
        <button className="press" name="/" onClick={clickHandle}>/</button>
        <button className="press" name="0" onClick={clickHandle}>0</button>
        <button className="press" name="." onClick={clickHandle}>.</button>
        <button className="press" id="result" onClick={calculate}>Result</button>
      </div>
    </div>
   </div> 
  )
}

export default App;

