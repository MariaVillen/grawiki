import classes from "./dataList.module.sass";
import { DeployMenuInverse } from "../../../assets";
import ToggleButton from "../../togglebutton/togglebutton";
import { useState, useRef } from "react";

/**
 * Component Datalist
 * Description: A selector with suggestions
 */

function DataList({ title, data = ["Opción 1", "Opción 2"] }) {
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestionList, setSuggestionList] = useState(data);

  const onChangeCat = (event) => {
    const newvalue = event.target.value;
    if (!event.target.value) {
      setInputValue("");
      setSuggestionList(data);
    } else {
      setInputValue(newvalue);
      const newList = data.filter((el) => el.match(newvalue));

      if (newList.length === 1 && newList[0] === event.target.value) {
        setIsOpen(false);
        setSuggestionList(data);
      } else {
        setSuggestionList(newList);
      }
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container}>
      <div className={classes.dataList}>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={onChangeCat}
          className={classes.dataList_input}
          placeholder={title}
        />
        <ToggleButton
          className={classes.dataList_icon}
          icon={DeployMenuInverse}
          isOpen={isOpen}
          onClick={toggleMenu}
        />
      </div>

      <div
        className={isOpen ? classes.dataList_list_open : classes.dataList_list}
      >
        <ul>
          <Suggestions
            data={suggestionList}
            onSelect={onChangeCat}
            focusInput={focusInput}
          />
        </ul>
      </div>
    </div>
  );
}

export default DataList;

/**
 * Component Suggestions
 * Description: A selector of DataList
 */

const Suggestions = ({ data, onSelect, focusInput }) => {
  const applyValue = (el) => {
    onSelect({ target: { value: el } }); // mimic onchange event
    focusInput();
  };

  return (
    <>
      {data.map((el) => (
        <li
          className={classes.dataList_item}
          key={el}
          onClick={() => applyValue(el)}
        >
          {el}
        </li>
      ))}
    </>
  );
};
