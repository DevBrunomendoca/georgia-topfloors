import { Link } from "react-router-dom"
import { ContentButton } from "./ButtonStyle"

const ButtonRout = ({link, textButton}) => {
  return(
    <ContentButton> <Link to={link}>{textButton}</Link> </ContentButton>
  )
}

export default ButtonRout