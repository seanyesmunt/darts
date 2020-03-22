import React from "react";
import Page from "../component/page";
import { getGameId } from "../api/firebase";
import { useRouter } from "next/router";

interface Props {
  game: Game;
}

export default function Home(props: Props) {
  const { game } = props;
  const router = useRouter();
  const [isJoiningGame, setIsJoiningGame] = React.useState<boolean>(false);
  const [isCreatingGame, setIsCreatingGame] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [gameIDToJoin, setGameIDToJoin] = React.useState<string>("");

  function handleJoinGame(e) {
    e.preventDefault();

    getGameId(gameIDToJoin)
      .then(gameId => {
        router.push(`/game/${gameId}`);
      })
      .catch(console.error);
  }

  function handleCreateGame(e) {
    e.preventDefault();
    router.push(`/setup?name=${name}`);
  }

  return (
    <Page>
      <main className="chalk flex flex-1 items-center justify-center bg-teal-700 text-white">
        {!isJoiningGame && !isCreatingGame && (
          <div className="">
            <h1 className="font-bold text-6xl">darts.now.sh</h1>
            <div className="flex mt-5">
              <button
                onClick={() => setIsCreatingGame(true)}
                className="mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded"
              >
                Start A Game
              </button>
              <button
                onClick={() => setIsJoiningGame(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 border-b-4 border-orange-600 hover:border-orange-700 rounded"
              >
                Join Someones Game
              </button>
            </div>
          </div>
        )}

        {isJoiningGame && (
          <div>
            <form onSubmit={handleJoinGame}>
              <label className="text-gray-100">ID to join</label>
              <input
                autoFocus
                autoComplete="off"
                className="block shadow appearance-none border h-40 text-6xl rounded py-2 px-3 text-gray-800 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="4b90"
                value={gameIDToJoin}
                onChange={e => setGameIDToJoin(e.target.value)}
              />

              <div className="flex mt-5">
                <button
                  type="submit"
                  className="mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded"
                >
                  Join Game
                </button>
                <button
                  onClick={() => setIsJoiningGame(false)}
                  className="mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {isCreatingGame && (
          <div>
            <form onSubmit={handleCreateGame}>
              <label className="text-white">Your Name</label>
              <input
                autoComplete="off"
                autoFocus
                className="block shadow appearance-none border h-40 text-6xl rounded py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Kenny Powers"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <div className="flex mt-5">
                <button
                  type="submit"
                  className="mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded"
                >
                  Create Game
                </button>
                <button
                  onClick={() => setIsCreatingGame(false)}
                  className="mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </Page>
  );
}
