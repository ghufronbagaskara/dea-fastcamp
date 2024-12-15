import '../App.css';
import Article from "../components/Article";
import Layout from "../components/Layout";
import useArticle from "../hooks/useArticle";


function Home() {
  const { article } = useArticle()
  return (
    <Layout>
      <Article title={article.title} description={article.body} />
    </Layout>
  );
}

export default Home;
