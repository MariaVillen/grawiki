import { Searchbar, ArticleCard, Spinner } from "../components";
import { useState, useEffect } from "react";
import classes from "./pages-styles/home.module.sass";
import useServices from "../services/useMockServices";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articles: articleServices } = useServices();

  useEffect(() => {
    (async () => {
      try {
        const data = articleServices.get();
        setArticles(data);
      } catch (err) {
        console.log(err);
      }
    })();
    setIsLoading(false);
  }, []);

  return (
    <div className={classes.container}>
      <Searchbar />
      <div className={classes.articles}>
        {isLoading && <Spinner />}
        {!isLoading && articles && articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} data={article} />
          ))
        ) : (
          <p> No se encontraron artículos. Sé el primero en escribir uno!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
