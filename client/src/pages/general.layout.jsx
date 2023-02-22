import classes from "./pages-styles/layout.module.sass";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const Layout = () => {
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
