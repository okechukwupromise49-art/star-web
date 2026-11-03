import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import {Heading }from "./component/Header"
import { About } from "./page/About";
import { Apply } from "./page/Apply";

import { Services } from "./page/Services";
import { NavBar } from "./component/NarBars";
import { BookNow } from "./page/BookNow";



function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/nar" element={<NavBar/>} />
        <Route path="/book" element={<BookNow/>} />
      </Routes>
      
    </>
  )
}

export default App
