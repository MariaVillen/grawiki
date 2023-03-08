import classes from "./tags.module.sass";
import { tagsMock } from "../../../data/tags-mock";
import { useState, useEffect, useRef } from "react";
import { SimpleSuggestions } from "./simple-suggestions/SimpleSuggestions";
import Tags from "./tags";

function TagsInput({ placeHolder, onChange, name = "tags" }) {
  /* Obtener todos los tags para sugerencias disposibles */
  const [tagsData, setTagsData] = useState();
  /* Sugerencias propuestas */
  const [suggestedValues, setSuggestedValues] = useState([]);
  /* Valores a enviar al formulario */
  const [tagsValues, setTagsValues] = useState([
    { id: "0", text: "workingTag" },
  ]);
  /* Si se abre o no las sugerencias*/
  const [isOpen, setIsOpen] = useState(false);
  /* Si se cargaron o no las etiquetas desde la base de datos*/
  const [isLoading, setIsLoading] = useState(true);
  /* Input Elemento*/
  const tagRef = useRef();

  /*** FUNCTIONS ***/

  /* Pedir a la base de datos los tags para sugerencias */
  useEffect(() => {
    setTagsData(tagsMock);
    setIsLoading(false);
  }, []);

  /* Focus Imput */
  const inputFocus = () => tagRef.current.focus();

  /* Agregar Etiquetas */
  const AddTag = (value) => {
    /* Si la etiqueta no está dentro de los valores tags, agregarla a ellos*/
    const idRepeted = tagsValues.filter((el) => el.id === value);
    /* Si la etiqueta esta repetida error de validacion */
    if (idRepeted.length > 0) {
      console.log("tagVale exists");
      return;
    }
    /* Agregar las etiquetas y resetear el input */
    setTagsValues((prev) => [...prev, { id: value, text: value }]);
    tagRef.current.value = "";
  };

  /* Eliminar etiquetas */
  const deleteTag = (id) => {
    const newSelectedTags = tagsValues.filter((el) => el.id !== id);
    setTagsValues(newSelectedTags);
    inputFocus();
  };

  /* Determinar valores en input */
  const inputChangeHandler = (e) => {
    // Si no, ver si existen sugerencias
    if (e.target.value !== "") {
      const newList = tagsData.filter((el) =>
        el.text.toLowerCase().match(e.target.value)
      );
      // Si las hay, agregarlas a suggestedvalues
      if (newList.length > 0) {
        setIsOpen(true);
        setSuggestedValues(newList);
      } else {
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
    // Si tag existe en dataTags --> solo agregar en el articulo con sus id
    // Si no existe entonces agregar dataTag, pillar id y agregar al articulo con id de base de datos.
  };

  const onBlur = (e) => {
    console.log("validation");
  };
  /* Sugerencias y agregado de etiquetas*/
  const onKeyDownHandler = (e) => {
    // Si hacemos espacio, que se agregue una etiqueta
    if (e.keyCode === 32) {
      e.preventDefault();
      AddTag(e.target.value);
      tagRef.current.focus();
      tagRef.current.value = "";
      e.target.value = "";
      setIsOpen(false);
    }
  };

  const selectTag = (e) => {
    AddTag(e.target.value);
  };

  return (
    <div>
      <div
        className={`${classes.input_text} ${isOpen && classes.input_text_open}`}
      >
        <div>
          {tagsValues.map((tag) => (
            <Tags
              key={tag.id}
              text={tag.text}
              deleteTag={deleteTag.bind(null, tag.id)}
            />
          ))}
        </div>
        <input
          name={name}
          ref={tagRef}
          id={name}
          className={classes.input_holder}
          type="text"
          placeholder={placeHolder}
          onChange={inputChangeHandler}
          onKeyDown={onKeyDownHandler}
          onBlur={onBlur}
        />
        {!isLoading && suggestedValues && (
          <div
            className={
              isOpen ? classes.dataList_list_open : classes.dataList_list
            }
          >
            <ul>
              <SimpleSuggestions
                data={suggestedValues}
                onSelect={selectTag}
                focusInput={inputFocus}
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export { TagsInput };
