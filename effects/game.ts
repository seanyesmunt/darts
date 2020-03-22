import React from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { getGame } from "../api/firebase";
import { useGetUserID } from "./user";

const GAME_ID = "game_id";

export function useGetGame(gameIDFromUrl): [Game, Error?] {
  console.log("gameID", gameIDFromUrl);
  const userID = useGetUserID();
  const [gameID, setgameID] = React.useState<string>(gameIDFromUrl);
  const [game, setGame] = React.useState<Game>();
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    if (gameIDFromUrl) {
      setgameID(gameIDFromUrl);
      Cookies.set(GAME_ID, gameIDFromUrl, {
        expires: 365
      });

      setgameID(gameIDFromUrl);
    } else {
      const gameIDCookie = Cookies.get(GAME_ID);
      if (gameIDCookie) {
        setgameID(gameIDCookie);
      } else {
        const newId = uuidv4();
        Cookies.set(GAME_ID, newId, {
          expires: 365
        });

        setgameID(newId);
      }
    }
  }, [gameIDFromUrl]);

  React.useEffect(() => {
    if (gameID && userID) {
      getGame(gameID, userID)
        .then(gameFromDB => {
          setGame(gameFromDB);
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [gameID, userID]);

  return [game, error];
}

export function useGetGameID(): string {
  const [game] = useGetGame(undefined);
  const gameID = game && game.id;

  return gameID;
}
