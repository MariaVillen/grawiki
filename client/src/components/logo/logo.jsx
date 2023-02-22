import React from "react";
import { LogoHorizontal, LogoStretch, LogoBackground } from "../../assets";
import classes from "./logo.module.sass";

function Logo({ type }) {
  const getLogo = () => {
    switch (type) {
      case "horizontal":
        return LogoHorizontal;
      case "background":
        return LogoBackground;
      default:
        return LogoStretch;
    }
  };

  return <img className={classes.logo} src={getLogo()} />;
}

export default Logo;
