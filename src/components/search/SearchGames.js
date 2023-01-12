import React from "react";
import "./SearchGames.css";


function SearchGames(props) {

  return (
    <div className="search-game-main">
      <h4 className="search-headline">Search here to add a game!</h4>
      <div className="search-game">
        <input
          placeholder="Search.."
          onChange={(e) => props.setSearchTerm(e.target.value)}
          className="search-input"
        />
        {props.APIData.games.map((result) => (
          <ul key={result.id} className="result-item">
            {result.name}
            <button
              className="add-from-search"
              onClick={() => props.addGameToList(result)}
            >
              Add
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SearchGames;
