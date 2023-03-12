import { Editor, EditorState, RichUtils } from "draft-js";
import { useState, useRef } from "react";
import { INLINE_STYLES, BLOCK_TYPES } from "./menustyles";
import "draft-js/dist/Draft.css";
import classes from "./myEditor.module.sass";
import StyleButton from "./styleButton/styleButton";

function MyEditor({ dataJson = null }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(dataJson)
  );
  const editRef = useRef();

  const changeHandler = (editorState) => {
    console.log("data ", editorState);
    setEditorState(editorState);
  };

  const handleKeyCommand = (command, editorState) => {
    console.log("command:" + command);
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      changeHandler(newState);
      return "handled";
    }
    return "not-handled";
  };
  const onTab = (e) => {
    const maxDepth = 4;
    changeHandler(RichUtils.onTab(e, editorState, maxDepth));
  };

  const toggleBlockType = (blockType) => {
    changeHandler(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    changeHandler(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <div className={classes.editContainer}>
      <div className={classes.edit_menu}>
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
      </div>
      <div className={classes.edit_input}>
        <Editor
          ref={editRef}
          editorState={editorState}
          onChange={changeHandler}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
}

export default MyEditor;

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className={classes.edit_control}>
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          icon={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className={classes.edit_control}>
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          icon={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};
