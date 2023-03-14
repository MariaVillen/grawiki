import classes from "./reactionButton.module.sass";
import { useState, useRef } from "react";

function ReactionButton({ icon, iconhover, alt, onClick }) {
  const [isSelected, setIsSelected] = useState(false);
  const iconRef = useRef();

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick();
  };

  return (
    <button type="button" className={classes.reaction} onClick={handleClick}>
      <img ref={iconRef} src={isSelected ? iconhover : icon} alt={alt} />
    </button>
  );
}

export default ReactionButton;
