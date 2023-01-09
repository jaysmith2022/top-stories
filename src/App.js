import "./App.css";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "./apiCalls";
import { Route } from "react-router-dom";
import ArticleContainer from "./Components/ArticleContainer/ArticleContainer";

function App() {
  const [article, setArticle] = useState([]);
  const[list, setList] = useState([])
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
       setList(newData);
       console.log(newData);
       console.log("list",list)
       setLoading("");
     })
     .catch((error) => {
       setError(
         `Uh oh, that's a ${error.message}! Something went wrong loading our articles... please refresh or try again later.`
       );
       setLoading("");
     });
     
 }, []);
// useEffect(() => {
//   fetchAllArticles().then((data) => {
//     setArticle(data.results);
//   });
//   //console.log(data)
//   console.log(article)
// }, []);
console.log("list 2", list);
  return (    
    
    <main>
      <h1 className="main-page-title">Top Stories</h1>
     <ArticleContainer articles={list}/>
    </main>
  );
}

export default App;
