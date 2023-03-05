import classes from "./dataListIcon.module.sass";
import { DeployMenuInverse } from "../../../assets";
import ToggleButton from "../../togglebutton/togglebutton";
import { useState, useRef } from "react";
import { Health, Toys, Government, Bank } from "../../../assets";

const dataMock = [
  { icon: Health, text: "Salud" },
  { icon: Toys, text: "Juguetes" },
  { icon: Government, text: "Banco" },
  { icon: Bank, text: "Gobierno" },
];
/**
 * Component Datalist
 * Description: A selector with suggestions
 */

function DataList({ title, data = dataMock }) {
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputIcon, setInputIcon] = useState("");
  const [suggestionList, setSuggestionList] = useState(data);

  const onChangeCat = (event) => {
    const newvalue = event.target.value;
    if (!event.target.value) {
      setInputValue("");
      setInputIcon("");
      setSuggestionList(data);
    } else {
      setInputValue(newvalue);
      const newList = data.filter((el) =>
        el.text.toLowerCase().match(newvalue.toLowerCase())
      );
      if (
        newList.length === 1 &&
        newList[0]?.text.toLowerCase() === event.target.value.toLowerCase()
      ) {
        setIsOpen(false);
        setSuggestionList(data);
        setInputIcon(newList[0].icon);
        setInputValue(newList[0].text);
      } else {
        setSuggestionList(newList);
        setInputIcon("");
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
      <div className={`${classes.dataList} ${isOpen ? classes.open : null}`}>
        {inputIcon && (
          <img
            className={classes.dataList_iconCat}
            src={inputIcon}
            alt={inputValue}
          />
        )}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={onChangeCat}
          className={isOpen ? classes.open : null}
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
    onSelect({ icon: el.icon, target: { value: el.text } }); // mimic onchange event
    focusInput();
  };

  return (
    <>
      {data.map((el) => (
        <li
          className={classes.dataList_item}
          key={el.text}
          onClick={() => applyValue(el)}
        >
          <img
            className={classes.dataList.iconCat}
            src={el.icon}
            alt={el.text}
          />
          <span>{el.text}</span>
        </li>
      ))}
    </>
  );
};
