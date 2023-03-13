import classes from "./reactionButton.module.sass";
function ReactionButton({ icon, alt, onClick }) {
  return (
    <button type="button" className={classes.reaction} onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
}

export default ReactionButton;
