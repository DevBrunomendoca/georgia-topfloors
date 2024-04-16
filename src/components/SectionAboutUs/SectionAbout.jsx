import Button from "../Button"
import ButtonRout from "../ButtonRout"
import Paragraph from "../Paragraph"
import SecondTitle from "../SecondTitle"
import { ContainerAbout, ContentAbout } from "./SectionAboutStyle"

const SectionAbout = () => {
  return(
    <ContainerAbout>
      <ContentAbout>

      <SecondTitle textSecondTitle='About Us'/>
      <Paragraph textParagraph='Georgia Top Floors is a Family owned business, that truly values our clients and our crews. They really are the company and we take pride in taking care of their needs. '/>
      <ButtonRout textButton='Learn More' link='/vite-react-router/about'/>
      </ContentAbout>
    </ContainerAbout>
  )
}

export default SectionAbout