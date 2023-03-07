import classes from "./tags.module.sass";

function Tags({ text, deleteTag }) {
  return (
    <div>
      <span>#{text}</span>
      <button onClick={deleteTag}>x</button>
    </div>
  );
}

export default Tags;
