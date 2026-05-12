import { Link } from "react-router-dom"


import { Client } from "../component/Client"
import { Service } from "../component/Service"
import { Footer } from "../component/Footer"
import { NavBar } from "../component/NarBars"

export function Home(){
    return(
        <>
          
          <NavBar/>
          <Client/>
          <Service/>
          <Footer/>
          

        </>
    )
}