import { useEffect, useState } from "react";
import Button from "../Button";
import ButtonRout from "../ButtonRout";
import Title from "../Title";
import { ContainerHome, ContentHome } from "./HomeStyle";

const Home = () => {

  const [bannerMobile, setbannerMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 480
      ? setbannerMobile(true)
      : setbannerMobile(false)
    }
    handleResize()
    window.addEventListener('resize' , handleResize)
    return() => {
      window.removeEventListener('resize' , handleResize)
    }
  }, [])
  return (
    <ContainerHome bannerMobile={bannerMobile}>
      <ContentHome  >
        <h3>Welcome Georgia Top Floors</h3>
        <Title textTitle="Dream it up and we will make it a reality!" />
        <ButtonRout textButton='Contact Us' link='/contact'/>
      </ContentHome>
    </ContainerHome>
  );
};

export default Home;
