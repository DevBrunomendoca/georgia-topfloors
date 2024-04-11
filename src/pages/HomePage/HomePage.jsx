import Home from "../../components/Home/Home"
import Reviews from "../../components/Reviews/Reviews"
import SectionAbout from "../../components/SectionAboutUs/SectionAbout"
import SectionWork from "../../components/SectionWork/SectionWork"
import Services from "../../components/Services/Services"

const HomePage = () => {
  return(
    <>
      <Home/>
      <SectionWork/>
      <Services/>
      <SectionAbout/>
      <Reviews/>
    </>
  )
}

export default HomePage