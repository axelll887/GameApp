import React from "react";
import "./SearchGames.css";
import { useDebounce } from "../debounce/Debounce";
import { useState, useEffect } from "react";
import { searchGame } from "../services/Api";


function SearchGames(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const addGameToList = (game) => {
      // Kolla ifall samma namn redan finns i gamesToAdd
      if (props.gamesToAdd.games.some((g) => g.id === game.id)) {
        // Ifall det finns, gör inget
        return;
      }
      props.setGamesToAdd({ games: props.gamesToAdd.games.concat(game) });
    };

  useEffect(() => {
    let isCancelled = false;
    const search = async () => {
      try {
        const results = await searchGame(debouncedSearchTerm);
        if (!isCancelled) {
          props.setAPIData({
            count: results.data.count,
            games: results.data.games,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (debouncedSearchTerm) {
      search();
    } else {
      props.setAPIData({
        count: 0,
        games: [],
      });
    }
    return () => {
      isCancelled = true;
    };
  }, [debouncedSearchTerm]);


  return (
    <div className="search-game-main">
      <h4 className="search-headline">Search here to add a game!</h4>
      <div className="search-game">
        <input
          placeholder="Search.."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {props.APIData.games.map((result) => (
          <ul key={result.id} className="result-item">
            {result.name}
            <button
              className="add-from-search"
              onClick={() => addGameToList(result)}
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
