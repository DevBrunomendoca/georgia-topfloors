import { ContentIconMenu } from "./IconMenuStyle"

const IconMenu = ({openMenu, toggleMenu}) => {
  return(
    <ContentIconMenu onClick={toggleMenu} openMenu={openMenu}>
      <div className="line-one"></div>
      <div className="line-two"></div>
      <div className="line-three"></div>
    </ContentIconMenu>
  )
}

export default IconMenu