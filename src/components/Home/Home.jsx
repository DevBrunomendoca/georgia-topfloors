import Button from "../Button";
import Title from "../Title";
import { ContainerHome, ContentHome } from "./HomeStyle";

const Home = () => {
  return (
    <ContainerHome>
      <ContentHome >
        <h3>Welcome Georgia Top Floors</h3>
        <Title textTitle="Dream it up and we will make it a reality!" />
        <Button textButton='Contact Us'/>
      </ContentHome>
    </ContainerHome>
  );
};

export default Home;
