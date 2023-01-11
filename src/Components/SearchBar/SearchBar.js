import React from "react";

function SearchBar({ articles, setSections, userSearch, setUserSearch }) {
  const choices = articles.map((article) => {
    return article.section.toUpperCase();
  });

  const newChoices = [...new Set(choices)];
  

  const displaySections = () => {
    let categoryData;
    if (!articles) {
      return <option disabled> loading activity options</option>;
    } else {    
      return (categoryData = newChoices.map((choice) => {
        return (
          <option key={choice} value={choice}>
            {choice}
          </option>
        );
      }));
    }
  };
  const clearSelections = () => {
    setSections("");
    setUserSearch("");
  };

  return (
    <div className="search-bar">
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
        className="userSearch"
        placeholder="Search Articles"
        onChange={(event) => setUserSearch(event.target.value)}
      />
      <button onClick={(event) => clearSelections()}>Clear</button>
    </div>
  );
}

export default SearchBar;
