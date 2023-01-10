import "./App.css";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "./apiCalls";
import { Switch, Route } from "react-router-dom";
import ArticleContainer from "./Components/ArticleContainer/ArticleContainer";
import ArticleDetails from "./Components/ArticleDetails/ArticleDetails";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [sections, setSections] = useState("");
  const [userSearch, setUserSearch] = useState("");

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
    let numberId = parseInt(id);
    return articles.find((article) => {
      return article.id === numberId;
    });
  };

  // const getSections = () => {
  //      console.log("run");
  //      const choices = articles.map((article) => {
  //        return article.section.toUpperCase();
  //      });
  //      const newChoices = [...new Set(choices)];
  //      setSections(newChoices);
  // };

  // useEffect(() => {
  //   console.log("run")
  //   const choices = articles.map((article) => {
  //     return article.section.toUpperCase();
  //   });
  //   const newChoices = [...new Set(choices)];
  //   setSections(newChoices);
  // }, []);

  // console.log(sections)

  return (
    <main>
      <div className="top-page">
        <img className="emblem" src="/emblem.jpg"></img>
        <h1 className="main-page-title">Top Stories</h1>
      </div>

      <Switch>
        <Route exact path="/">
          <SearchBar
            articles={articles}
            sections={sections}
            setSections={setSections}
            userSearch={userSearch}
            setUserSearch={setUserSearch}
          />
          <ArticleContainer
            articles={articles}
            searchedCategory={sections}
            searchedArticle={userSearch}
          />
        </Route>
        <Route
          exact
          path="/details/:id"
          render={({ match }) => {
            const chosenArticle = findArticle(match.params.id);
            console.log(chosenArticle);
            return <ArticleDetails article={chosenArticle} />;
          }}
        />
      </Switch>
    </main>
  );
}

export default App;
