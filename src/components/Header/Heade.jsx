import { useEffect, useState } from "react";
import Button from "../Button";
import GoToTop from "../GoToTop";
import ListNav from "../ListNav";
import Logo from "../Logo";
import { ContainerHeader, ContentHeader } from "./HeaderStyle";
import IconMenu from "./IconMenu";
import MenuToggle from "./MenuToggle";

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(!openMenu)

  useEffect(() => {
    const closeMenu = () => {
      window.innerWidth > 769
      && setOpenMenu(false)
    }
    closeMenu()
    window.addEventListener('resize', closeMenu)
    return() => {
      window.removeEventListener('resize' , closeMenu)
    }
  })

  return (
    <ContainerHeader openMenu={openMenu}>
      <ContentHeader>
        <Logo />
        <ListNav />
        <Button hrefBtn='tel:+17708007008' textButton="Call or Text" />
      </ContentHeader>
      <IconMenu openMenu={openMenu} toggleMenu={toggleMenu}/>
      {openMenu && <MenuToggle openMenu={openMenu} toggleMenu={toggleMenu}/> }
      <GoToTop />
    </ContainerHeader>
  );
};

export default Header;
