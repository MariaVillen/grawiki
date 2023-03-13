import { Searchbar, ArticleCard, Spinner } from "../components";
import classes from "./pages-styles/home.module.sass";
import useServices from "../services/useMockServices";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [getArticles] = useServices();

  useEffect(() => {
    (async () => {
      try {
        const data = getArticles(articles);
        setArticles(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className={classes.container}>
      <Searchbar />
      <div className={classes.articles}>
        {isLoading ? (
          <Spinner />
        ) : (
          articles &&
          articles.lenght > 0 &&
          articles.map((article) => (
            <ArticleCard key={article.id} data={article} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
