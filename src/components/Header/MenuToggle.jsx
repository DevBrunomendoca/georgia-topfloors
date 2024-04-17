import Button from "../Button"
import ListNav from "../ListNav"
import { ContentMenuToggle } from "./MenuToggleStyle"

const MenuToggle = ({openMenu, toggleMenu}) => {
  return(
    <ContentMenuToggle openMenu={openMenu}>
      <ListNav onClick={toggleMenu}/>
      <Button onClick={toggleMenu} textButton="Call or Text"/>
    </ContentMenuToggle>
  ) 
}

export default MenuToggle