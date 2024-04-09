import Button from "../Button";
import ListNav from "../ListNav";
import Logo from "../Logo";
import { ContainerHeader, ContentHeader } from "./HeaderStyle";

const Header = () => {
  return (
    <ContainerHeader>
      <ContentHeader>
        <Logo />
        <ListNav />
        <Button textButton="Call or Text" />
      </ContentHeader>
    </ContainerHeader>
  );
};

export default Header;
