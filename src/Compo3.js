import React, { useRef } from "react";

function Compo3(){

    const inputRef =  useRef()

    function Inntile(){
        console.log(inputRef, "data Feteched")
        inputRef.current.focus()
        inputRef.current.value="Bhavesh Khapre"
        console.log(inputRef.current.value)
        inputRef.current.style.display="show"
    }

return(
    <div>
        <input ref={inputRef} type=" text"/>
        <button onClick={Inntile}> Submit </button>
    </div>
)

}

export default Compo3;