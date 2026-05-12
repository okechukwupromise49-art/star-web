import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import {Heading }from "./component/Header"
import { About } from "./page/About";
import { Apply } from "./page/Apply";

import { Services } from "./page/Services";
import { NavBar } from "./component/NarBars";



function App() {
  

  return (
    <>
      <Heading/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/nar" element={<NavBar/>} />
      </Routes>
      
    </>
  )
}

export default App
