import { ContentButton } from "./ButtonStyle"

const Button = ({textButton, onClick}) => {
  return(
    <ContentButton onClick={onClick}><a href="#">{textButton}</a></ContentButton>
  )
}

export default Button