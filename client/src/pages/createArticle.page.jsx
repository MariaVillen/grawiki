import classes from "./pages-styles/create.module.sass";
import Searchbar from "../components/searchbar/searchbar";
function CreateArticle() {
  return (
    <div className={classes.container}>
      <Searchbar />
    </div>
  );
}

export default CreateArticle;
