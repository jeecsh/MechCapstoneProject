import Home from "./pages/home/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import About from "../src/components/about/About";
import Teamss from "./pages/teams/Teamss";

import Reportpage from "./pages/report/Reportpage";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/teams" element={<Teamss />} />
        <Route path="/report" element={<Reportpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

