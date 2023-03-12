import { Link } from "react-router-dom";
import classes from "./FooterLinks.module.sass";

function FooterLinks({ data }) {
  return (
    <div className={classes.footerLinks}>
      <p className={classes.footerLinks_title}>{data.title}</p>
      <ul className={classes.footerLinks_list}>
        {data.links.map(({ id, icon, text, link }) => (
          <li key={id} className={classes.footerLinks_item}>
            <Link to={link}>
              {icon ? <img src={icon} alt="icon" /> : null}
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
