import { Link } from "react-router-dom"


import { Client } from "../component/Client"
import { Service } from "../component/Service"
import { Footer } from "../component/Footer"
import { NavBar } from "../component/NarBars"
import { Heading } from "../component/Header"

export function Home(){
    return(
        <>
          <Heading/>
          <NavBar/>
          <Client/>
          <Service/>
          <Footer/>
          

        </>
    )
}