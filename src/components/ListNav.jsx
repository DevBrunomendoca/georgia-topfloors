import { Link } from "react-router-dom"
import { ContainerListNav } from "./ListNavStyle"

const ListNav = () => {
  return(
    <ContainerListNav>
      <ul>
        <li> <Link to= '/'>Home</Link> </li>
        <li><Link to= '/aboutus'>About Us</Link> </li>
        <li><Link to= '/contactus'>Contact Us</Link> </li>
        <li><a href="#container-reviews">Reviews</a></li>
      </ul>
    </ContainerListNav>
  )
}

export default ListNav