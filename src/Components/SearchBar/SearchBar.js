import React from "react";
import { useState } from "react";

function SearchBar({
  articles,
  sections,
  setSections,
  userSearch,
  setUserSearch,
}) {
  const choices = articles.map((article) => {
    return article.section.toUpperCase();
  });

  const newChoices = [...new Set(choices)];
  console.log(newChoices);

  const displaySections = () => {
    let categoryData
    if (!articles) {
      return <option disabled> loading activity options</option>;
    } else {
      console.log("yes")
     return categoryData = newChoices.map((choice) => {
      return (
          <option key={choice} value={choice}>
            {choice}
          </option>
      )     
      });
    }
    
  }
  const clearSelections = (event) => {
    //event.preventDefault();
    setSections("")
    setUserSearch("")
  }

  //setSections(newChoices);
  return (
    <div>
      <h1>SearchBar</h1>
      <select
        className="dropdown-selection"
        name="genre"
        id="mySelect"
        onChange={(event) => setSections(event.target.value)}
      >
        <option value="">All Articles</option>
        {displaySections()}
      </select>
      <input
        type="text"
        value={userSearch}
        name="userSearch"
        placeholder="Search Articles"
        onChange={(event) => setUserSearch(event.target.value)}
      />
      <button onClick={(event) => clearSelections()}>Clear</button>
    </div>
  );
}

export default SearchBar;
