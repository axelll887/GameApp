import React from 'react'
import SearchAndAddGames from "../components/search/SearchAndAddGames";

function Search(props) {


  return (
      <SearchAndAddGames
        setAPIData={props.setAPIData}
        APIData={props.APIData}
        gamesToAdd={props.gamesToAdd}
        setGamesToAdd={props.setGamesToAdd}
        games={props.games}
        setGames={props.setGames}
      />
  );
}

export default Search