import { useState } from "react"
import { ContainerListNav } from "./ListNavStyle"
import { Link } from "react-router-dom"

const ListNav = () => {

  return(
    <ContainerListNav>
      <ul>
        <li> <Link to='/vite-react-router/'>Home</Link> </li>
        <li> <Link to='/vite-react-router/about'>About Us</Link> </li>
        <li> <Link to='/vite-react-router/contact'>Contact Us</Link> </li>
        
        <li><a href="#container-reviews">Reviews</a></li>
      </ul>
    </ContainerListNav>
  )
}

export default ListNav
