import classes from "./createForm.module.sass";
import CollapseArea from "../collapseArea/collapseArea";
import DataListIcon from "../FormLibrary/data-list-icon/dataListIcon";
import { useState } from "react";
import { TagsInput } from "../FormLibrary/tags/tagsInput";

function CreateForm() {
  const [form, setForm] = useState({
    category: "",
    title: "",
    content: "",
    tags: [],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const onChangeHandler = ({ value, type }) => {
    /* asegurarse que esta incluido en el form */
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className={classes.container}>
      <CollapseArea title="Crear tema">
        <form onSubmit={submitHandler}>
          <div className={classes.form_group}>
            <label>Seleccione Categoría</label>
            <DataListIcon
              name="Categories"
              title="Categorías"
              setValue={setForm}
              getValue={form}
            />
          </div>
          <div className={classes.form_group}>
            <label>Título</label>
            <input
              className={classes.input_text}
              type="text"
              placeholder="Escriba el título de su tema"
            />
          </div>
          <div className={classes.form_group}>Editor de texto</div>
          <div className={classes.form_group}>
            <TagsInput
              title="Agregar etiquetas"
              onChange={onChangeHandler}
              name="tags"
            />
          </div>
          <div className={classes.form_group}>
            <button
              className={`${classes.button_form} ${classes.submit}`}
              onClick={submitHandler}
            >
              Aceptar
            </button>
            <button
              type="reset"
              className={`${classes.button_form} ${classes.cancel}`}
            >
              Cancelar
            </button>
          </div>
        </form>
      </CollapseArea>
    </div>
  );
}

export default CreateForm;
