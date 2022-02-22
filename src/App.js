import React, {useState} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Notes from "./pages/Notes";
import ButtonAppBar from "./components/TopPanel/ButtonAppBar";
import About from "./pages/About";

function App(){
    const [active, setActive] = useState(true);
    const changeActive = () =>{
        setActive( (prev) => !prev)
    }
  return (
      <Router>
          <ButtonAppBar active = {active} changeActive = {changeActive} style = {{position: "sticky", top: "0",left: "0",zIndex : "100"}}/>
          <Routes>
              <Route active = {active} path="/notes" element={<Notes/>}/>
              <Route path="/about" element = {<About/>}/>
          </Routes>
      </Router>
  );
};
export default App;
