import classes from "./collapseArea.module.sass";
import { useState } from "react";
import ToggleButton from "../togglebutton/togglebutton";
import { DeployMenu } from "../../assets";

/**
 * @Component CollapseArea
 * @param className<any>, title<string>, children<object>,open<boolean>
 * @requires Component ToggleButton
 * */

function CollapseArea({ className, title, children, open = true }) {
  const [isOpen, setIsOpen] = useState(open);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${classes.container} ${className}`}>
      <div
        className={`${classes.headerbar} ${isOpen && classes.headerbar_open}`}
      >
        <span className={classes.headerbar_title}>{title}</span>
        <ToggleButton icon={DeployMenu} isOpen={isOpen} onClick={toggleMenu} />
      </div>
      <div
        className={
          isOpen ? classes.innerContainer_open : classes.innerContainer
        }
      >
        {children}
      </div>
    </div>
  );
}

export default CollapseArea;
