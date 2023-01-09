import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

function ArticleContainer({ articles }) {
  const displayArticles = articles.map((article) => {
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
      
      {displayArticles}
    </div>
  );
}

export default ArticleContainer;
