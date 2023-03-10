/**
 * Component Suggestions
 * Description: A selector of DataList
 * Parameters: data - the list of suggestions
 * Parameter: onSelect - the function to handle when an element of the suggestion list is selected
 * Parameter: focusInput - put the input related to this list into focus
 */
import classes from "./simple-suggestions.module.sass";

const SimpleSuggestions = ({ data, onSelect, focusInput }) => {
  const applyValue = (el) => {
    onSelect({ target: { value: el.text } }); // mimic onchange event
    focusInput();
  };

  return (
    <>
      {data
        ? data?.map((el) => (
            <li
              className={classes.suggestion_item}
              key={el.id}
              onClick={() => applyValue(el)}
            >
              <span>{el.text}</span>
            </li>
          ))
        : null}
    </>
  );
};

export { SimpleSuggestions };
