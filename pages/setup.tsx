import React from "react";
import { useRouter } from "next/router";
import Page from "../component/page";
import { useGetGameID } from "../effects/game";
import { useGetUserID } from "../effects/user";
import { createGame } from "../api/firebase";

// Genereate a game url and redirect
export default function Setup() {
  const router = useRouter();
  const userID = useGetUserID();
  const { query } = router;
  const { name: nameFromQuery } = query;
  const name =
    typeof nameFromQuery === "string" ? nameFromQuery : nameFromQuery[0];

  React.useEffect(() => {
    if (userID && name) {
      createGame(userID, name).then(game => {
        router.replace(`/game/${game.id}`);
      });
    }
  }, [userID, name]);

  return <Page />;
}
