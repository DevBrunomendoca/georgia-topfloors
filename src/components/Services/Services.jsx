import ThirdTitle from "../ThirdTitle"
import CardServices from "./CardServices"
import { ContainerServices, ContentServices } from "./ServicesStyle"

const Services = () => {
  return(
    <ContainerServices>
      <ContentServices>
        <CardServices
          titleCard='Installation'
          imgCard='/vite-react-router/banner-services1.png'
        />
        <CardServices
          titleCard='Sand and Finish'
          imgCard='/vite-react-router/banner-services2.png'
        />
        <CardServices
          titleCard='Staircases'
          imgCard='/vite-react-router/banner-services3.png'
        />

      </ContentServices>
    </ContainerServices>
  )
}

export default Services