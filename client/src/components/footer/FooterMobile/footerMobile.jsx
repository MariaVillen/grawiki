import { Facebook, Instagram, Twitter, Copyright } from "../../../assets";
import classes from "./footerMobile.module.sass";

function FooterMobile() {
  return (
    <div className={classes.footerMobile}>
      <div className={classes.footerMobile_follow}>
        <span>Síguenos en</span>
        <img src={Instagram} alt="Instagram" />
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
      </div>
      <div className={classes.footerMobile_copyright}>
        <img src={Copyright} alt="Copyright" />
        <span>Derechos Reservados 2022</span>
      </div>
    </div>
  );
}

export default FooterMobile;
