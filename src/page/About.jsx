import { Link } from "react-router-dom"
import {Client } from "../component/Client"

import { Footer } from "../component/Footer"
import { NavBar } from "../component/NarBars"



export function About(){
    return(
        <>
          <NavBar/>

          <Client/>
          <Footer/>
          

        </>
    )
}