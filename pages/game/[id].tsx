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
      <main className="flex flex-1 items-center justify-center text-white">
        {isInGame && <Game {...game} />}

        {!isInGame && (
          <form onSubmit={handleJoinGame}>
            <label className="text-gray-200 ">Enter your name</label>
            <input
              autoFocus
              autoComplete="off"
              className="block w-full shadow appearance-none border h-24 md:h-40 text-4xl rounded py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Ricky Bobby"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className="mt-5">
              <button
                type="submit"
                className="mt-4 w-full md:w-auto text-2xl bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow"
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
