import React, { useReducer } from "react";
import Display from "./Display";
import "../App.css";

function Calculator() {
  const initState = {
    inputs: "",
    // result:""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_INPUT":
        return { inputs: state.inputs + action.value };
      case "FIND_RESULT":
        try {
          return { inputs: eval(state.inputs) };
        } catch (error) {
          return { inputs: "Invalid expression" };
        }
      case "CLEAR":
        return { inputs: "" };
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const handleInput = (value) => {
    dispatch({ type: "ADD_INPUT", value: value });
    // console.log(state)
  };

  const handleEquall = () => {
    dispatch({ type: "FIND_RESULT" });
    // console.log(state)
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
    // console.log(state)
  };

  return (
    <div id="whole-div">
      
      <Display valuesInput={state.inputs} />
      <div id="btn-box">

      <button onClick={() => handleInput("1")}>1</button>
      <button onClick={() => handleInput("2")}>2</button>
      <button onClick={() => handleInput("3")}>3</button>
      <button onClick={() => handleInput("+")}>+</button>
      <br />
      <button onClick={() => handleInput("4")}>4</button>
      <button onClick={() => handleInput("5")}>5</button>
      <button onClick={() => handleInput("6")}>6</button>
      <button onClick={() => handleInput("-")}>-</button>
      <br />
      <button onClick={() => handleInput("7")}>7</button>
      <button onClick={() => handleInput("8")}>8</button>
      <button onClick={() => handleInput("9")}>9</button>
      <button onClick={() => handleInput("*")}>*</button>
      <br />
      <button onClick={() => handleClear()}>C</button>
      <button onClick={() => handleInput("0")}>0</button>
      <button onClick={() => handleEquall()}>=</button>
      <button onClick={() => handleInput("/")}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
