import React  from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import './App.css';
// import Compo1 from "./Compo1";
// import Compo2 from "./Compo2";
// import Compo3 from "./Compo3";
// import C1 from "./components/C1";


function App() {
  return (
    <div className="App">
      <>
        
        <Router>

        <ul className="">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Contact/Bhavesh">Contact Us</Link>
              </li>
            </ul>
         <Routes>
            
              <Route exact path='/' element={ <Home />}></Route>

            <Route exact path='/About' element={< About />}></Route>
              <Route exact path='/Contact/:fname' element={ <Contact/> }></Route> 

              
          </Routes>
        </Router>

        {/* <Compo3 /> */}

        {/* <Compo1 /> */}
          <br/>

          {/* <Home/> */}
            {/* <C1 /> */}
          <br/>
        {/* <Compo2 /> */}
      </>
    </div>
  );
}

export default App;
