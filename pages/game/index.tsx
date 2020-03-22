import React from "react";
import { useRouter } from "next/router";
import { useGetGameID } from "../../effects/game";

// Genereate a game url and redirect
export default function Game() {
  const { push } = useRouter();
  const gameID = useGetGameID();

  React.useEffect(() => {
    if (gameID) {
      push(`/game/${gameID}`);
    }
  }, [gameID, push]);

  return null;
}
