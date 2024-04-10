import { Link } from "react-router-dom"
import { ContentLogo } from "./LogoStyle"

const Logo = () => {
  return(
    <Link to='/'><ContentLogo src="/logotopfloors.png" alt="Logo Principal" /></Link>
  )
}

export default Logo