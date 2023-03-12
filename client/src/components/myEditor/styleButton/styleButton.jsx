import classes from "./styleButton.module.sass";

function StyleButton({ style, active, label, icon, onToggle }) {
  const _onToggle = (e) => {
    e.preventDefault();
    onToggle(style);
  };
  let className = classes.editor_styleButton;
  if (active) {
    className = `${classes.editor_styleButton} ${classes.editor_activeButton}`;
  }

  return (
    <span className={className} onMouseDown={_onToggle}>
      {icon ? <img src={icon} alt={label} /> : label}
    </span>
  );
}
export default StyleButton;
