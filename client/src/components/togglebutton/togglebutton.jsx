import classes from "./togglebutton.module.sass";

/**
 * @component ToggleButton
 * @param icon<object image>
 * @param isOpen<boolean>
 * @param toggleMenu<function> Control open or close of the menu.
 * @returns Component
 */

function ToggleButton({ className, icon, isOpen, onClick }) {
  return (
    <button
      type="button"
      className={`${className} ${isOpen ? classes.button_up : classes.button}`}
      onClick={onClick}
    >
      <img src={icon} alt="Desplegar Información" />
    </button>
  );
}

export default ToggleButton;
