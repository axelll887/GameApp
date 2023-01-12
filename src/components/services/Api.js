import React from "react";
import axios from "axios";

export const fetchServerData = (setData) => {
  axios
    .get("http://localhost:3001/collection")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
};

export const updateRating = (game) => {
  axios
    .put(`http://localhost:3001/collection/${game.id}`, game)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const deleteGame = (setData, id) => {
  return axios
    .delete(`http://localhost:3001/collection/${id}`)
    .then(() => {
      fetchServerData(setData);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchGame = (searchTerm) => {
  const idKey = "e7QNE9GhKE";
  return axios
    .get(
      `https://api.boardgameatlas.com/api/search?name=${searchTerm}&limit=5&client_id=${idKey}`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const addGame = (game) => {
  return Promise.all(
    game.games.map((g) => {
      const data = {
        name: g.name,
        id: g.id,
        max_players: g.max_players,
        min_players: g.min_players,
        playtime: g.playtime + " min",
        rating: "",
        image_url: g.image_url,
      };
      return axios
        .post("http://localhost:3001/collection", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    })
  );
};