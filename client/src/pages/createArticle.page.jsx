import classes from "./pages-styles/create.module.sass";
import Searchbar from "../components/FormLibrary/searchbar/searchbar";
import CreateEditor from "../components/createEditor/createEditor";
import CollapseArea from "../components/collapseArea/collapseArea";

function CreateArticle() {
  return (
    <div className={classes.container}>
      <Searchbar />
      <CreateEditor />
      <CollapseArea
        className={classes.recomend}
        open={false}
        title="Recomendaciones"
      >
        Recomendaciones
      </CollapseArea>
    </div>
  );
}

export default CreateArticle;
