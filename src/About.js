import React from "react";

import { useNavigate } from "react-router-dom";

import Compo3 from './Compo3'

function About(){
const history = useNavigate();
console.log(history)
    return(
        <div>
            <h1> THis Is About Page. </h1>
            <button  onClick={ () => history("/Contact/data 123")}> Go To Contact us </button>
            <br/>
            <Compo3/>
        </div>
    )
       
    
        
    
}

export default About;