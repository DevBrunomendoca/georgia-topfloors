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
              <a target="_blank" href="https://www.facebook.com/georgiatopfloors/"> <img src="/icon-facebook.png" alt="Icon Facebook" /> </a>
              
              <Paragraph textParagraph="Facebook" />
            </div>
            <div>
              <a target="_blank" href="https://www.instagram.com/gatopfloors/"> <img src="/icon-instagram.png" alt="Icone Instagram" /></a>
              
              <Paragraph textParagraph="Instagram" />
            </div>
            <div>
              <a target="_blank" href="https://www.google.com/search?kgmid=/g/11g0fnjmv7&hl=en-BR&q=Georgia+Top+Floors&kgs=cedd5ddf9f0a547b&shndl=30&shem=lnole&source=sh/x/kp/osrp/m5/4"> <img src="/icon-google.png" alt="Icone Google" /> </a>
              
              <Paragraph textParagraph="Google" />
            </div>
          </SocialMedia>
        </ContainerSocial>
        <ContainerContact>
          <ThirdTitle textThirdTitle="Contact" />
          <Paragraph textParagraph="Contact us for your in-home estimate" />
          <a href="tel:+17708007008">Call us (770) 800 7008</a>
          <a href="tel:+17708007008">Send us a message (770) 800 7008</a>
          <a href="mailto:georgiatopfloors2010@gmail.com">Email us georgiatopfloors2010@gmail.com</a>
        </ContainerContact>
      </ContentFooter>
      <Copyright>
      Copyright © - Dlack Tecnologia - Todos os direitos reservados
      </Copyright>
    </ContaienerFooter>
  );
};

export default Footer;
