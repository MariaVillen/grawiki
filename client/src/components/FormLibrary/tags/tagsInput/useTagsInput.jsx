import { tagsMock } from "../../../../data/tags-mock";
import { useState, useEffect, useRef } from "react";

function useTagsInput() {
  /* Variables */
  const [tagsData, setTagsData] = useState();
  const [suggestedValues, setSuggestedValues] = useState([]);
  const [tagsValues, setTagsValues] = useState([
    { id: "workingTag", text: "workingTag" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const tagRef = useRef();
  const regValidation = new RegExp("^[A-Záéíóúüñ]+$", "i");
  /* Load all tags in database */
  useEffect(() => {
    setTagsData(tagsMock);
    setIsLoading(false);
  }, []);

  /* Function: Focus de cursor on the input field */
  const inputFocus = () => tagRef.current.focus();

  /* Function: Return a new array of tags widthout the value given as parameter */
  const refreshTagValues = (value) => {
    const newvalues = tagsValues.filter(
      (el) => el.text.toLowerCase() !== value.toLowerCase()
    );
    return newvalues;
  };

  const validateValue = (value) => {
    if (!regValidation.test(value)) {
      console.log("Only alphabetic characters are allowed");
      tagRef.current.value = "";
      return false;
    } else {
      return value;
    }
  };

  /* Function: Return a new array with all tags that match with the letter of the input value */
  const getSuggestions = (value) => {
    const suggestions = tagsData.filter((el) => {
      const item = el.text.toLowerCase();
      const found = tagsValues.find((elem) => elem.text.toLowerCase() === item);
      if (!found) return el.text.toLowerCase().match(value) || false;
    });
    return suggestions;
  };

  /* Function: Checks if the input text is already in the tags values array */
  const checkDuplicateTags = (value) => {
    const isRepeat = tagsValues.filter((el) => el.id === value);
    if (isRepeat.length > 0) {
      console.log("Duplicate Tag not Allowed");
      return false;
    } else {
      return isRepeat;
    }
  };

  /* Function: add a tag to de list of value tag array */
  const AddTag = (value) => {
    /* Check that value has only alphabetic characters */
    if (value === "") return;
    console.log(value);
    if (validateValue(value)) {
      /* Add tags to the list and reset input value */
      if (checkDuplicateTags(value) && tagsValues.length < 5) {
        setTagsValues((prev) => [...prev, { id: value, text: value }]);
        tagRef.current.value = "";
      } else {
        console.log("Tags Limit reached");
      }
    }
  };

  /* Function: Delete tags from values tags array */
  const deleteTag = (id) => {
    const newSelectedTags = refreshTagValues(id);
    console.dir(newSelectedTags);
    setTagsValues(newSelectedTags);
    inputFocus();
  };

  /* Determinar valores en input */
  const inputChangeHandler = (e) => {
    if (validateValue(e.tagetValue)) {
      console.log("value not allowed");
      return;
    }
    // Si no, ver si existen sugerencias
    if (e.target.value !== "") {
      const newList = getSuggestions(e.target.value);
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

  /* Handler: Onkeydown - Add a tag if a space is insert */
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      AddTag(e.target.value);
      tagRef.current.focus();
      tagRef.current.value = "";
      e.target.value = "";
      setIsOpen(false);
    }
  };

  /* Function: Select a tag from the suggestion list and add it to de array tag values */
  const selectTag = (e) => {
    AddTag(e.target.value);
    e.target.value = "";
    setIsOpen(false);
  };

  return {
    tagRef,
    isLoading,
    isOpen,
    tagsValues,
    suggestedValues,
    inputChangeHandler,
    onKeyDownHandler,
    selectTag,
    inputFocus,
    deleteTag,
  };
}

export default useTagsInput;
