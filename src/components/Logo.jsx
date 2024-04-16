
import { Link } from "react-router-dom"
import { ContentLogo } from "./LogoStyle"

const Logo = () => {
  return(
    <Link to='/vite-react-router/'><ContentLogo src="/vite-react-router/logotopfloors.png" alt="Logo Principal" /></Link>
  )
}

export default Logo