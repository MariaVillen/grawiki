import React from "react";

function ReactionButton({ icon, alt, onClick }) {
  return (
    <button type="button" className={classes.button_reaction} onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
}

export default ReactionButton;
