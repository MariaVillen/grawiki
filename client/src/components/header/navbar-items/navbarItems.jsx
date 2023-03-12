import { Link } from "react-router-dom";
import classes from "./navbarItems.module.sass";

function navbarItems({ link, icon, text, ...props }) {
  return (
    <li className={classes.menulist} {...props}>
      <Link className={classes.menulist_link} to={link}>
        <span className={classes.text}>{text}</span>
        <img className={classes.icon} src={icon} />
      </Link>
    </li>
  );
}

export default navbarItems;
