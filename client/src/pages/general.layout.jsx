import classes from "./pages-styles/general.layout.modules.sass";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const Layout = () => {
  const loading = false;

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
