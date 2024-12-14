import "./App.css";
import { useState, useEffect } from "react";
import { getArticle } from "./utils/getArticle"
import Articles from "./components/Articles";
import WebTitle from "./components/WebTitle";
import LimitArticle from "./components/LimitArticle";
import Layout from "./components/Layout";
import CostumInput from "./components/CostumInput";


function App() {
  const [article, setArticle] = useState("")
  const [counterClick, setCounterClick] = useState(1)
  useEffect(() => {
    getArticle(counterClick).then(result => setArticle(result))
  }, [counterClick])

  function nextArticle() {
    setCounterClick(counterClick + 1)
  }

  function prevArticle(props) {
    console.log(props);
    if (counterClick > 1)
      setCounterClick(counterClick - 1)
  }

  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value)
  }
  return (
    <Layout>
      {/* <CostumInput label="First Input" text={text} handleChange={handleChange} />
      <CostumInput label="Second Input" text={text} handleChange={handleChange} /> */}
      <WebTitle title="Netflix 1" description="netflix adalah website untuk menonton film..." />
      <Articles title={article.title} description={article.body} />

      {counterClick > 4 ? <LimitArticle /> :
        <div>
          <button onClick={() => prevArticle(article)}>Previous Article</button>
          {counterClick}
          <button onClick={nextArticle}>Next Article</button>
        </div>}
    </Layout>
  );
}

export default App;
