import React from "react";
import "./GameCollectionList.css";
import * as ImIcons from "react-icons/im";
import { addGame } from "../services/Api";


function GameCollectionList(props) {
 
const removeFromGameList = (game) => {
  props.setGamesToAdd({ games: props.gamesToAdd.games.filter((g) => g.id !== game.id) });
};

const addToDashboard = () => {
   //  props.setGames(props.gamesToAdd)
     addGame(props.gamesToAdd);
     props.setGamesToAdd({games: []})
     console.log('hej')
};
           
  return (
    <div className="game-collection-list">
      {props.gamesToAdd.games.map((game) => (
        <ul key={game.id}>
          {game.name}
          <ImIcons.ImCross
            className="red-cross"
            onClick={() => removeFromGameList(game)}
          />
        </ul>
      ))}
      {props.gamesToAdd.games.some((game) => game) ? (
        <button className="game-col-button" onClick={() => addToDashboard(props.gamesToAdd)}>
          Add to game collection
        </button>
      ) : null}
    </div>
  );
  
}




export default GameCollectionList;
