import ThirdTitle from "../ThirdTitle"
import { ContentCardServices } from "./CardServicesStyle"

const CardServices = ({titleCard, imgCard}) => {
  return(
    <ContentCardServices>
      <ThirdTitle textThirdTitle={titleCard}/>
      <img src={imgCard} alt="Image Card Services" />
    </ContentCardServices>
  )
}

export default CardServices