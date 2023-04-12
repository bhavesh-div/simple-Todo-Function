import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import C1 from "./components/C1";

function Contact() {
  function aleartbox() {
    alert("The Location Will Fetched");
  }

  function notsame() {
    alert("The Location Was Not Found");
  }

  const { fname } = useParams();
  
  const history = useNavigate();
  const location = useLocation();

  
  
  return (
    <div>
      <>
        <C1 />

        <h1> THis Is Contact Page &nbsp;&nbsp; {fname}. </h1>
        <p> current pge path = {location.pathname} </p>

        {location.pathname === "/Contact/bhavesh" ? 
          <button onClick={aleartbox}> Click Me </button>
         : 
          <button onClick={notsame}> Path Not Same </button>
        }

        <br/>
        <br/>

        <button onClick={()=>history("/")}> Back To Home  </button>
      </>
    </div>
  );
}

export default Contact;
