import Searchbar from "../components/FormLibrary/searchbar/searchbar";
import classes from "./pages-styles/home.module.sass";

function Home() {
  console.log("Home");
  return (
    <div className={classes.container}>
      <Searchbar />
    </div>
  );
}

export default Home;
