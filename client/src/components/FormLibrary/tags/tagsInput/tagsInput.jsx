import classes from "./tagsInput.module.sass";
import { SimpleSuggestions } from "../simple-suggestions/SimpleSuggestions";
import Tags from "../tag/tags";
import useTagsInput from "./useTagsInput";

function TagsInput({ placeHolder, onChange, name = "tags", value }) {
  const {
    tagRef,
    isLoading,
    isOpen,
    tagsValues,
    suggestedValues,
    deleteTag,
    inputChangeHandler,
    onKeyDownHandler,
    selectTag,
    inputFocus,
  } = useTagsInput(value);

  return (
    <div className={classes.container}>
      <div className={`${classes.inputTag} ${isOpen && classes.inputTag_open}`}>
        {tagsValues.map((tag) => (
          <Tags
            key={tag.id}
            text={tag.text}
            deleteTag={deleteTag.bind(null, tag.id)}
          />
        ))}
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
        {!isLoading && suggestedValues && (
          <div
            className={
              isOpen ? classes.inputTag_list_open : classes.inputTag_list
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
