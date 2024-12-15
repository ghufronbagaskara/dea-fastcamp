import '../App.css';
import Layout from "../components/Layout";
import { useAtom } from 'jotai';
import { languageAtom } from '../jotai/atoms';

function Home() {
  const [language,] = useAtom(languageAtom)

  return (
    <Layout>
      <h1>{language == "en" ? "Watch Netflix Free!" : "Tonton Netflix Gratis!"}</h1>
    </Layout>
  );
}

export default Home;
