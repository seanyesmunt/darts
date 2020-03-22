import React from "react";
import Link from "next/link";
import { getGameId } from "../api/firebase";
import { useRouter } from "next/router";

interface Props {
  game: Game;
}

export default function Home(props: Props) {
  const { game } = props;
  const router = useRouter();
  const [isJoiningGame, setIsJoiningGame] = React.useState<boolean>(false);
  const [gameIDToJoin, setGameIDToJoin] = React.useState<string>("");

  function handleJoinGame(e) {
    e.preventDefault();

    getGameId(gameIDToJoin)
      .then(gameId => {
        router.push(`/game/${gameId}`);
      })
      .catch(console.error);
  }

  return (
    <div>
      <main>
        {!isJoiningGame && (
          <React.Fragment>
            <Link href="/game">
              <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Create Game
              </a>
            </Link>
            <button
              onClick={() => setIsJoiningGame(true)}
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            >
              Join Game
            </button>
          </React.Fragment>
        )}

        {isJoiningGame && (
          <div>
            <form onSubmit={handleJoinGame}>
              <label className="text-gray-700">ID to join</label>
              <input
                autoComplete="off"
                className="block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="4b90"
                value={gameIDToJoin}
                onChange={e => setGameIDToJoin(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={handleJoinGame}
              >
                Join Game
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
