import "./App.css";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "./apiCalls";
import { Switch, Route } from "react-router-dom";
import ArticleContainer from "./Components/ArticleContainer/ArticleContainer";
import ArticleDetails from "./Components/ArticleDetails/ArticleDetails";

function App() {
  const [articles, setArticles] = useState([]);
 // const[list, setList] = useState([])
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("")  

 useEffect(() => {
   fetchAllArticles()
     .then((data) => {
       console.log("data", data);
       const newData = data.results.map((result, index) => ({
         ...result,
         id: index + 1,
       }));
       setArticles(newData);
       console.log(newData);      
       setLoading("");
     })
     .catch((error) => {
       setError(
         `Uh oh, that's a ${error.message}! Something went wrong loading our articles... please refresh or try again later.`
       );
       setLoading("");
     });
     
 }, []);

const findArticle = (id) => {
  let numberId = parseInt(id)
  return articles.find((article) => {
   return article.id === numberId
  })
}

  return (
    <main>
      <h1 className="main-page-title">Top Stories</h1>
      <Switch>
        <Route exact path="/">
          <ArticleContainer articles={articles} />
        </Route>
        <Route
          exact
          path="/details/:id"
          render={({ match }) => {
            const chosenArticle = findArticle(match.params.id);
            console.log(chosenArticle)
            return <ArticleDetails article={chosenArticle} />;
          }}
        />
      </Switch>
    </main>
  );
}

export default App;
