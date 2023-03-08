import { tagsMock } from "../../../data/tags-mock";
import Tags from "./tags";
import classes from "./tags.module.sass";
import { useState, useEffect, useRef } from "react";

function TagsInput({ placeHolder, onChange, name = "tags" }) {
  /* Obtener todos los tags para sugerencias disposibles */
  const [tagsData, setTagsData] = useState([]);
  const [tagsValues, setTagsValues] = useState([
    { id: "0", text: "workingTag" },
  ]);

  const tagRef = useRef();
  useEffect(() => {
    /* Pedir a la base de datos los tags para sugerencias */
    setTagsData(tagsMock);
  }, []);

  const AddTag = (value) => {
    const idRepeted = tagsValues.filter((el) => el.id === value);
    if (idRepeted.length > 0) {
      console.log("tagVale exists");
      return;
    }
    setTagsValues((prev) => [...prev, { id: value, text: value }]);
  };

  const inputChangeHandler = (e) => {
    console.log("input ", e.target.value);
  };
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      AddTag(e.target.value);
      tagRef.current.focus();
      tagRef.current.value = "";
      e.target.value = "";
    }
  };
  const deleteTag = (id) => {
    const newSelectedTags = tagsValues.filter((el) => el.id !== id);
    setTagsValues(newSelectedTags);
    tagRef.current.focus();
  };

  return (
    <div>
      <div className={classes.input_text}>
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
        />
      </div>
    </div>
  );
}

export { TagsInput };
