import ThirdTitle from "../ThirdTitle"
import { ContentCardServices } from "./CardServicesStyle"

const CardServices = ({id,titleCard, imgCard}) => {
  return(
    <ContentCardServices id={id}>
      <ThirdTitle textThirdTitle={titleCard}/>
      <img src={imgCard} alt="Image Card Services" />
    </ContentCardServices>
  )
}

export default CardServices