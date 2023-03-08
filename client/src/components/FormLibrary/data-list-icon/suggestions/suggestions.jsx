/**
 * Component Suggestions
 * Description: A selector of DataList
 * Parameters: data - the list of suggestions
 * Parameter: onSelect - the function to handle when an element of the suggestion list is selected
 * Parameter: focusInput - put the input related to this list into focus
 */
import classes from "./suggestions.module.sass";

const Suggestions = ({ data, onSelect, focusInput }) => {
  const applyValue = (el) => {
    console.log("applyValue");
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
            className={classes.dataList_iconCat}
            src={el.icon}
            alt={el.text}
          />
          <span>{el.text}</span>
        </li>
      ))}
    </>
  );
};

export { Suggestions };
