import React, { useState } from "react";

function Compo1() {
  // const [count, setCount] = useState( ()=>{
  // console.log('constructor')
  // return 0;
  // })

  const [state, setState] = useState({ count: 0, name: "Incerement" });
  const count = state.count;
  const name = state.name;
  function inc() {
    // setCount(prevCount=>prevCount+1)
    setState((prevState) => {
      return {
        ...prevState,
        name: "Incerement",
        count: prevState.count + 1,
      };
    });
  }

  function dec() {
    // setCount(prevCount=>prevCount-1)
    setState((prevState) => {
      return {
        ...prevState,
        name: "Decerement",
        count: prevState.count - 1,
      };
    });
  }
  return (
    <div>
      <h4> This Is useState Hooks Example : </h4>
      <button onClick={inc}>Increment</button>
      {name}
      <p> enter = {count} </p>
      <button onClick={dec}> decrement </button>
      <br />
      ----------- The End Of Use State Effect -------------
    </div>
  );
}

export default Compo1;
