import { tagsMock } from "../../../data/tags-mock";
import Tags from "./tags";
import classes from "./tags.module.sass";
import { useState, useEffect } from "react";

function TagsInput({ title, onChange, name = "tags" }) {
  /* Obtener todos los tags para sugerencias disposibles */
  const [tagsData, setTagsData] = useState([]);
  const [tagsValues, setTagsValues] = useState([]);

  useEffect(() => {
    /* Pedir a la base de datos los tags para sugerencias */
    setTagsData(tagsMock);
  }, []);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };
  const inputChangeHandler = () => {};
  const inputBlurHandler = () => {};
  const deleteTag = (id) => {};

  return (
    <div>
      <label>{title}</label>
      <div>
        <div>
          {tagsValues.map((tag) => (
            <Tags key={tag.id} text={tag.text} deleteTag={deleteTag(tag.id)} />
          ))}
        </div>
        <input
          name={name}
          id={name}
          className={classes.input_text}
          type="text"
          placeholder="Etiquetas"
          onChange={inputChangeHandler}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export { TagsInput };
