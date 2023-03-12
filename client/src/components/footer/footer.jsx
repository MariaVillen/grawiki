import { footerLinkMenu } from "./footerConfig";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterMobile from "./FooterMobile/footerMobile";
import classes from "./footer.module.sass";

function Footer() {
  return (
    <div className={classes.container}>
      {footerLinkMenu.map((el) => {
        return <FooterLinks key={el.id} data={el} />;
      })}
      <FooterMobile />
    </div>
  );
}

export default Footer;
