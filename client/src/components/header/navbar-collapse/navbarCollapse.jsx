import classes from "./navbarCollapse.module.sass";
import { Menu, CloseMenu } from "../../../assets";
import { useState } from "react";

function NavbarCollapse({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenuView = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenuView = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={classes.navbar}>
      <button className={classes.navbar_btnmenu} onClick={onToggleMenuView}>
        <img src={Menu} alt="Desplegar lista de navegación" />
      </button>
      <div
        className={`${classes.navbar_list} ${
          isMenuOpen ? classes.navbar_list__open : ""
        }`}
      >
        <div className={classes.navbar_btnClose} onClick={closeMenuView}>
          <img src={CloseMenu} alt="Cerrar lista de navegación" />
        </div>
        {children}
      </div>
    </nav>
  );
}

export default NavbarCollapse;
