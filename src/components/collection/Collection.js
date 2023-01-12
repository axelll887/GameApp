import React from "react";
import { useState, useEffect } from "react";
import "./Collection.css";
import * as ImIcons from "react-icons/im";
import { fetchServerData, updateRating, deleteGame } from "../services/Api";

function Collection() {
  const [data, setData] = useState([{}]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchServerData(setData);
  }, []);

  const handleRatingChange = (id, rating) => {
    const gameIndex = data.findIndex((game) => game.id === id);
    const newData = [...data];
    newData[gameIndex].rating = rating;
    setData(newData);
    updateRating(newData[gameIndex]);
  };

  return (
    <div className="collection.div">
      <div className="filter-input">
        <h1 className="h1">Game collection</h1>
        <label>How many players?</label>
        <input
          type="number"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <table className="collection-table">
        <thead>
          <tr>
            <th>PICUTRE</th>
            <th>NAME</th>
            <th>PLAYTIME</th>
            <th>MAX PLAYERS</th>
            <th>MIN PLAYERS</th>
            <th>RATING</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(
              (game) =>
                filter === "" ||
                (game.max_players >= filter && game.min_players <= filter)
            )
            .map((game) => {
              return (
                <tr key={game.id + "game"}>
                  <td>
                    <img
                      width="80"
                      height="100"
                      src={game.image_url}
                      alt="new"
                    />
                  </td>
                  <td>{game.name}</td>
                  <td>{game.playtime}</td>
                  <td>{game.max_players}</td>
                  <td>{game.min_players}</td>
                  <td>
                    {/* render stars for rating */}
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span
                          key={i}
                          className={`star ${
                            i < (game.rating || 0) ? "selected" : ""
                          }`}
                          onClick={() => handleRatingChange(game.id, i + 1)}
                        >
                          {i < (game.rating || 0) ? "★" : "☆"}
                        </span>
                      ))}
                  </td>
                  <td>
                    <ImIcons.ImCross
                      className="red-cross-collection"
                      onClick={() => deleteGame(setData, game.id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Collection;
