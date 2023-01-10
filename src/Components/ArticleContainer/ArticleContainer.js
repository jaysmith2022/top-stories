import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

function ArticleContainer({ articles, searchedCategory, searchedArticle }) {
    let articleCards = articles
    console.log("article cards", articleCards)
    console.log("category",searchedCategory)
    if (searchedCategory !== "" && searchedArticle !== "") {
      let categories = articleCards.filter((article) =>
        article.section.toLowerCase().includes(searchedCategory.toLowerCase())
      );
      articleCards = categories.filter((article) =>
        article.title.toLowerCase().includes(searchedArticle.toLowerCase())
      );
    } 
    else if (searchedCategory !== "") {
      console.log("art", articles)
      articleCards = articles.filter((article) =>
       article.section.includes(searchedCategory.toLowerCase())
      );
    } else if (searchedArticle !== "") {
      articleCards = articleCards.filter((article) =>
        article.title.toLowerCase().includes(searchedArticle.toLowerCase())
      );
    } else {
      articleCards = articles;
    }
   
    const validateSearch = () => {
      if (searchedArticle === "") {
        return null;
      } else {
        return "Sorry No Articles Found";
      }
    };
  const displayArticles = articleCards.map((article) => {
    return (
      <ArticleCard
        key={article.id}
        id={article.id}
        title={article.title}
        multimedia={article.multimedia}
        section={article.section}
        url={article.url}
      />
    );
  });

  return (
    <div className="articles-container">      
      {displayArticles.length ? displayArticles : validateSearch()}
    </div>
  );
}

export default ArticleContainer;
