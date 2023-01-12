import { useState, useEffect, useRef } from "react";
import { useDebounce } from "../debounce/Debounce";
import GameCollectionList from "./GameCollectionList";
import SearchGames from "./SearchGames";
import { searchGame } from "../services/Api";
import "./SearchAndAddGame.css";


function SearchAndAddGames(props) {
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
        console.log(err)
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
    <div className="main-container">
      <div className="search-games-container">
        <SearchGames
          APIData={props.APIData}
          addGameToList={addGameToList}
          gamesToAdd={props.gamesToAdd}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="game-collection-list-container">
        <GameCollectionList
          gamesToAdd={props.gamesToAdd}
          setGamesToAdd={props.setGamesToAdd}
        />
      </div>
    </div>
  );
}


export default SearchAndAddGames;
