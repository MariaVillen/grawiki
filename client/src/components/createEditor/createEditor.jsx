import classes from "./createEditor.module.sass";
import CollapseArea from "../collapseArea/collapseArea";
import DataList from "../FormLibrary/data-list.jsx/dataList";

function CreateEditor() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.container}>
      <CollapseArea title="Crear tema">
        <form onSubmit={submitHandler}>
          <div className={classes.form_group}>
            <label>Seleccione Categoría</label>
            <DataList title="Categorías" />
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
            <label>Agregar Etiquetas</label>
            <input
              className={classes.input_text}
              type="text"
              placeholder="Etiquetas"
            />
          </div>
          <div className={classes.form_group}>
            <button className={`${classes.button_form} ${classes.submit}`}>
              Aceptar
            </button>
            <button className={`${classes.button_form} ${classes.cancel}`}>
              Cancelar
            </button>
          </div>
        </form>
      </CollapseArea>
    </div>
  );
}

export default CreateEditor;
