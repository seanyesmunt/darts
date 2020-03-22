import React from "react";
import { getGame } from "../api/firebase";
import { useGetUserID } from "./user";

const GAME_ID = "game_id";

export function useGetGame(gameID): [Game, Error?] {
  const userID = useGetUserID();
  const [game, setGame] = React.useState<Game>();
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    function onUpdate(value) {
      setGame({ ...value, id: gameID });
    }

    if (gameID && userID) {
      getGame(gameID, userID, onUpdate);
    }
  }, [gameID, userID]);

  return [game, error];
}

export function useGetGameID(): string {
  const [game] = useGetGame(undefined);
  const gameID = game && game.id;

  return gameID;
}
