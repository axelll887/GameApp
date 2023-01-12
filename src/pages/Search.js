import React from 'react'
import { useState } from "react";
import AddGames from "../components/search/AddGames";
import SearchGames from "../components/search/SearchGames";
import "./Search.css";


function Search(props) {
  const [APIData, setAPIData] = useState({
    count: 0,
    games: [],
  });

  return (
    <div className="main-container">
      <div className="search-games-container">
        <SearchGames
          APIData={APIData}
          setAPIData={setAPIData}
          gamesToAdd={props.gamesToAdd}
          // setSearchTerm={setSearchTerm}
          setGamesToAdd={props.setGamesToAdd}
        />
      </div>
      <div className="game-collection-list-container">
        <AddGames
          gamesToAdd={props.gamesToAdd}
          setGamesToAdd={props.setGamesToAdd}
        />
      </div>
    </div>
  );
}

export default Search