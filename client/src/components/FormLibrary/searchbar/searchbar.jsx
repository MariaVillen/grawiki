import classes from "./searchbar.module.sass";
import { Search } from "../../../assets";

function Searchbar() {
  return (
    <div className={classes.searchbar}>
      <form>
        <button className={classes.searchbar_icon} type="submit">
          <img src={Search} alt="Enviar búsqueda" />
        </button>
        <input
          type="text"
          className={classes.searchbar_input}
          placeholder="Buscar temas"
        />
      </form>
    </div>
  );
}

export default Searchbar;
