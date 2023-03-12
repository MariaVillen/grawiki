import classes from "./createArticleForm.module.sass";
import CollapseArea from "../collapseArea/collapseArea";
import DataListIcon from "../FormLibrary/data-list-icon/dataListIcon";
import { useState } from "react";
import { TagsInput } from "../FormLibrary/tags/tagsInput/tagsInput";

function CreateArticleForm() {
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
              className={`${classes.input_text} ${classes.wide}`}
              type="text"
              placeholder="Escriba el título de su tema"
            />
          </div>
          <div className={classes.form_group}>Editor de texto</div>
          <div className={classes.form_group}>
            <label>Agregar etiquetas</label>
            <TagsInput
              placeHolder="Etiquetas"
              onChange={onChangeHandler}
              name="tags"
            />
          </div>
          <div className={`${classes.form_group} ${classes.form_footer}`}>
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

export default CreateArticleForm;
