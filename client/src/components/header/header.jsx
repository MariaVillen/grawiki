import classes from "./header.module.sass";
import NavbarItems from "./navbar-items/navbarItems";
import Logo from "../logo/logo";
import { Toys, Government, Health, Bank, MoreList, Edit } from "../../assets";
import NavbarCollapse from "./navbar-collapse/navbarCollapse";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header_logo_mobile}>
        <Logo type="horizontal" />
      </div>
      <NavbarCollapse className={classes.header_nabvar}>
        <div className={classes.header_logo_desktop}>
          <Logo type="vertical" />
        </div>
        <button className={classes.header_navbar_list_createBtn}>
          <img src={Edit} alt="Crear un artículo" /> <span>Crear</span>
        </button>
        <ul className={classes.header_navbar_itemlist}>
          <NavbarItems icon={Health} text="Salud" link="/health" />
          <NavbarItems icon={Toys} text="Juguetes" link="/toys" />
          <NavbarItems icon={Bank} text="Bancos" link="/bank" />
          <NavbarItems icon={Government} text="Gobierno" link="/governement" />
          <NavbarItems icon={MoreList} text="Más" link="/more" />
        </ul>
      </NavbarCollapse>
    </div>
  );
}

export default Header;
