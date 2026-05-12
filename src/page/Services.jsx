import { Link } from "react-router-dom"
import {Service } from "../component/Service"


export function Services(){
    return(
        <>
          
          <Service/>

          <Link to="/">about</Link>

        </>
    )
}