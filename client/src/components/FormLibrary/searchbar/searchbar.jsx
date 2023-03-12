import classes from "./searchbar.module.sass";
import { Search } from "../../../assets";
import { useState } from "react";

function Searchbar() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className={classes.searchbar}>
      <form onSubmit={onSubmit}>
        <button className={classes.searchbar_icon} type="submit">
          <img src={Search} alt="Enviar búsqueda" />
        </button>
        <input
          type="text"
          className={classes.searchbar_input}
          placeholder="Buscar temas"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Searchbar;
