import Paragraph from "../../components/Paragraph"
import ThirdTitle from "../../components/ThirdTitle"
import {  ContainerTeamCard } from "./TeamStyle"

const Team = ({id, profile, name, description}) => {
  return(
    <ContainerTeamCard id={id}>
      <img src={profile} alt="" />
      <ThirdTitle textThirdTitle={name}/>
      <Paragraph textParagraph={description}/>
    </ContainerTeamCard>
  )
}

export default Team