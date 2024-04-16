import { useState } from "react"
import { ContainerListNav } from "./ListNavStyle"
import { Link } from "react-router-dom"

const ListNav = () => {

  return(
    <ContainerListNav>
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/about'>About Us</Link> </li>
        <li> <Link to='/contact'>Contact Us</Link> </li>
        
        <li><a href="#container-reviews">Reviews</a></li>
      </ul>
    </ContainerListNav>
  )
}

export default ListNav
