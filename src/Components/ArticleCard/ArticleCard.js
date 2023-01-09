import React from "react";

function ArticleCard({ id, title, multimedia, section, url }) {
  
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <img
        className="article-image"
        alt={`image for ${title}`}
        src={multimedia[1].url}
        onError={(e) => (e.target.src = "/NYT-emblem.jpeg")}
      />
      <a href={url}>
        <button className="card-btn" >
          Link To Article
        </button>
      </a>
      <button className="card-btn">Learn More Here</button>
    </div>
  );
}

export default ArticleCard;
