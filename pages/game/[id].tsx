import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetGame } from "../../effects/game";
import { useGetUserID } from "../../effects/user";
import { addPlayerToGame } from "../../api/firebase";

interface Props {
  game?: Game;
}

export default function Game(props: Props) {
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

  // React.useEffect(() => {
  //   if (gameID && !amIncludedInListOfPlayers && creatorID !== userID) {
  //     // addPlayerToGame(gameID, userID);
  //   }
  // }, [amIncludedInListOfPlayers, creatorID, userID, gameID]);

  function handleJoinGame() {
    if (gameID && !isInGame && creatorID !== userID) {
      addPlayerToGame(gameID, userID, name);
    }
  }

  return (
    <div>
      <main>
        {isInGame && (
          <div>
            <div>ID: {game.join_id}</div>
            <div>Players</div>
            <ol>
              {players.map(player => (
                <li key={player.id}>{player.name}</li>
              ))}
            </ol>
          </div>
        )}
        {!isInGame && (
          <form onSubmit={handleJoinGame}>
            <label className="text-gray-700">Enter your name</label>
            <input
              autoComplete="off"
              className="block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Big winner Stevey Jones"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Join Game
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
