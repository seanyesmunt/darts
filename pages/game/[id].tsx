import React from "react";
import { useRouter } from "next/router";
import Game from "../../component/game";
import Page from "../../component/page";
import { useGetGame } from "../../effects/game";
import { useGetUserID } from "../../effects/user";
import { addPlayerToGame } from "../../api/firebase";

interface Props {
  game?: Game;
}

export default function GamePage(props: Props) {
  const [name, setName] = React.useState<string>("");
  const router = useRouter();
  const { id } = router.query;
  const [game] = useGetGame(id);
  const userID = useGetUserID();
  const creatorID = game && game.creator_id;
  const players = game && game.players;
  const gameID = game && game.id;
  const isInGame =
    players &&
    players.some(player => {
      return player.id === userID;
    });

  function handleJoinGame() {
    if (gameID && !isInGame && creatorID !== userID) {
      addPlayerToGame(gameID, userID, name);
    }
  }

  return (
    <Page>
      <main className="chalk flex flex-1 items-center justify-center bg-teal-900 text-white">
        {isInGame && <Game {...game} />}
        {!isInGame && (
          <form onSubmit={handleJoinGame}>
            <label className="text-gray-200 ">Enter your name</label>
            <input
              autoFocus
              autoComplete="off"
              className="block shadow appearance-none border h-40 mt-3 text-6xl rounded py-2 px-3 text-gray-800 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Ricky Bobby"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className="mt-5">
              <button
                type="submit"
                className="mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded"
              >
                Join Game
              </button>
            </div>
          </form>
        )}
      </main>
    </Page>
  );
}
