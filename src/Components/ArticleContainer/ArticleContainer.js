import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

function ArticleContainer({articles}) {
 
  const displayArticles = articles.map((article) => {
    return <ArticleCard key={article.id} id={article.id}/>;
  });
  
  
  return <div className="articles-container"><h1>Articles</h1>{displayArticles}</div>;
}

export default ArticleContainer;
