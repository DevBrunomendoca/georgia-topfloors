import Paragraph from "../Paragraph";
import SecondTitle from "../SecondTitle";
import ThirdTitle from "../ThirdTitle";
import {
  ContaienerFooter,
  ContainerContact,
  ContainerSocial,
  ContentFooter,
  Copyright,
  SocialMedia,
} from "./FooterStyle";

const Footer = () => {
  return (
    <ContaienerFooter>
      <SecondTitle textSecondTitle="Contact us for your in-home estimate" />
      <ContentFooter>
        <ContainerSocial>
          <ThirdTitle textThirdTitle="Social" />
          <Paragraph textParagraph="Follow us and stay updated with all the latest projects and news" />
          <SocialMedia>
            <div>
              <a href=""> <img src="/vite-react-router/icon-facebook.png" alt="Icon Facebook" /> </a>
              
              <Paragraph textParagraph="Facebook" />
            </div>
            <div>
              <a href=""> <img src="/vite-react-router/icon-instagram.png" alt="Icone Instagram" /></a>
              
              <Paragraph textParagraph="Instagram" />
            </div>
            <div>
              <a href=""> <img src="/vite-react-router/icon-google.png" alt="Icone Google" /> </a>
              
              <Paragraph textParagraph="Google" />
            </div>
          </SocialMedia>
        </ContainerSocial>
        <ContainerContact>
          <ThirdTitle textThirdTitle="Contact" />
          <Paragraph textParagraph="Contact us for your in-home estimate" />
          <a href="">Call us (770) 800 7008</a>
          <a href="">Send us a message (770) 800 7008</a>
          <a href="">Email us georgiatopfloors2010@gmail.com</a>
        </ContainerContact>
      </ContentFooter>
      <Copyright>
      Copyright © - Dlack Tecnologia - Todos os direitos reservados
      </Copyright>
    </ContaienerFooter>
  );
};

export default Footer;
