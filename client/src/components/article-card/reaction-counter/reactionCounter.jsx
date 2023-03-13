import React from "react";

function ReactionCounter({ icon, alt, value }) {
  return (
    <div className={classes.reaction}>
      <img src={icon} alt={alt} />
      <span className={classes.counter}>{value}</span>
    </div>
  );
}

export default ReactionCounter;
