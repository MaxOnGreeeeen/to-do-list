import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Notes, About } from "./pages/index.js";

import { ButtonAppBar } from "./components/index.js";

import "./App.css";

function App() {
  const [active, setActive] = useState(true);

  const changeActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <Router>
      <ButtonAppBar
        active={active}
        changeActive={changeActive}
        style={{ position: "sticky", top: "0", left: "0", zIndex: "100" }}
      />
      <Routes>
        <Route active={active} path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
