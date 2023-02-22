import { Link } from "react-router-dom";
import classes from "./navbarItems.module.sass";

function navbarItems({ link, icon, text, ...props }) {
  return (
    <li className={classes.menulist} {...props}>
      <Link className={classes.menulist_link} to={link}>
        <span className={classes.menulist_text}>{text}</span>
        <img className={classes.menulist_icon} src={icon} />
      </Link>
    </li>
  );
}

export default navbarItems;
