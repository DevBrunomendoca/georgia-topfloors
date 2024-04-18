import { ContentButton } from "./ButtonStyle"

const Button = ({hrefBtn, textButton, onClick}) => {
  return(
    <ContentButton onClick={onClick}><a href={hrefBtn}>{textButton}</a></ContentButton>
  )
}

export default Button