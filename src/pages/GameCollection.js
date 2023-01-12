import React from 'react'
import Collection from '../components/collection/Collection'

function GameCollection(props) {
  return (
      <Collection
        gamesToAdd={props.gamesToAdd}
        setGamesToAdd={props.setGamesToAdd}
        games={props.games}
        setGames={props.setGames}
      />
  );
}

export default GameCollection