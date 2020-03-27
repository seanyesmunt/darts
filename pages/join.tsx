import React from "react";
import Link from "next/link";
import Page from "../component/page";
import { getGameId } from "../api/firebase";
import Router, { useRouter } from "next/router";

interface Props {}

export default function Home(props: Props) {
  const router = useRouter();
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
    <Page>
      <main className=" flex flex-1 items-center justify-center text-white p-8">
        <div>
          <form onSubmit={handleJoinGame}>
            <label className="text-gray-100">ID to join</label>
            <input
              autoFocus
              autoComplete="off"
              className="block w-full shadow appearance-none border h-24 md:h-40 text-4xl rounded py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="4b90"
              value={gameIDToJoin}
              onChange={e => setGameIDToJoin(e.target.value)}
            />

            <div className="flex flex-col md:flex-row mt-10 pb-24 text-center">
              <button
                type="submit"
                className="mr-4 w-full md:w-auto text-4xl bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow"
              >
                Join Game
              </button>
              <button
                onClick={() => Router.back()}
                className="mt-4 md:mt-0 w-full md:w-auto text-4xl bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </Page>
  );
}
