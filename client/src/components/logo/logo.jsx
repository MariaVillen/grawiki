import React from "react";
import { LogoHorizontal, LogoStretch, LogoBackground } from "../../assets";
import classes from "./logo.module.sass";
import { Link } from "react-router-dom";

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

  return (
    <Link to="/">
      <img className={classes.logo} src={getLogo()} />
    </Link>
  );
}

export default Logo;
