import classes from "./tags.module.sass";

function Tags({ text, deleteTag }) {
  return (
    <div className={classes.tag}>
      <span>#{text}</span>
      <button type="button" onClick={(e) => deleteTag()}>
        x
      </button>
    </div>
  );
}

export default Tags;
