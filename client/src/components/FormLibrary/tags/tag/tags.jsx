import classes from "./tag.module.sass";
import { CloseMenu } from "../../../../assets";

function Tags({ text, deleteTag }) {
  return (
    <div className={classes.tag}>
      <span>#{text}</span>
      <button type="button" onClick={(e) => deleteTag()}>
        <img src={CloseMenu} alt="Close" />
      </button>
    </div>
  );
}

export default Tags;
