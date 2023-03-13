import React from "react";

function ReactionButton({ icon, alt, onClick }) {
  return (
    <button type="button" className={classes.button_reaction}>
      <img src={ThumbUpOutline} alt="react thumb up" />
    </button>
  );
}

export default ReactionButton;
