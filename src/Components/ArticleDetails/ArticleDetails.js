import React from "react";

function ArticleDetails({ article}) {
  const displayArticle = (articleInfo) => {
    const { title, abstract, byline, published_date, section, url } =
      articleInfo;
    const displaySummary = abstract ? abstract : "No summary provided.";
    const imgUrl = article.multimedia[1].url;   
    const publishedDates = published_date.split("T")[0].split("-");
    const publishedDate = `${publishedDates[1]}/${publishedDates[2]}/${publishedDates[0]}`;
    
    return (
      <article className="details-article">
        <h2>{title}</h2>
        <h3>{byline}</h3>
        <img className="details-img" src={imgUrl} alt={`Image for ${title}`} />
        <h4>Published on {publishedDate}</h4>       
        <p>"{displaySummary}"</p>
        <p>
          <a href="/">
            <button className="detail-btn">Return Home</button>
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="detail-btn">Link to Article</button>
          </a>
        </p>
      </article>
    );
  };


  let display = "";
  if (article) {
    display = displayArticle(article);
  } else {
    display = (
      <div className="detail-error-msg">
        <h1>"Sorry an error has occured please return to the home Page"</h1>
        <a href="/">
          <button className="detail-btn">Return Home</button>
        </a>
      </div>
    );
  }
  return <section className="details-section">{display}</section>;
}

export default ArticleDetails;
