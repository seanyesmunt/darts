import React from "react";
import { useRouter } from "next/router";
import { useGetGameID } from "../effects/game";
import { useGetUserID } from "../effects/user";
import { createGame } from "../api/firebase";

// Genereate a game url and redirect
export default function Setup() {
  const router = useRouter();
  const userID = useGetUserID();
  const { push, query } = router;
  const { name } = query;

  React.useEffect(() => {
    if (userID && name) {
      createGame(userID, name).then(game => {
        push(`/game/${game.id}`);
      });
    }
  }, [userID, name]);

  return null;
}
