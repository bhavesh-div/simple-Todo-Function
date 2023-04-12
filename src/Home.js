import React from "react";
import Compo1 from "./Compo1";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> THis Is Home Page. </h1>

      <br />
        <button onClick={() => navigate("/About")}> Go To About</button>
      <br />

      <Compo1 />
    </div>
  );
}

export default Home;
