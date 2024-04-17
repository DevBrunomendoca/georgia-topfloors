import { Link } from "react-router-dom"
import { ContentButton } from "./ButtonStyle"

const ButtonRout = ({id, link, textButton}) => {
  return(
    <ContentButton id={id}> <Link to={link}>{textButton}</Link> </ContentButton>

  )
}

export default ButtonRout