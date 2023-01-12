import React from 'react';
import { useState } from "react";
import AddGames from "../components/search/AddGames";
import SearchGames from "../components/search/SearchGames";
import "./Search.css";


function Search() {

    const [gamesToAdd, setGamesToAdd] = useState({
      games: [],
    });

  return (
    <div className="main-container">
      <div className="search-games-container">
        <SearchGames
          gamesToAdd={gamesToAdd}
          setGamesToAdd={setGamesToAdd}
        />
      </div>
      <div className="game-collection-list-container">
        <AddGames
          gamesToAdd={gamesToAdd}
          setGamesToAdd={setGamesToAdd}
        />
      </div>
    </div>
  );
}

export default Search