import React from "react";
import Link from "next/link";
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
      <main className="flex flex-col flex-1 items-center justify-center text-white p-8">
        <h1 className="chalk font-bold text-6xl">Cricket</h1>
        <div className="w-full flex flex-col justify-center md:flex-row mt-5 pb-24 text-center">
          <Link href="/new">
            <a className="mr-4 w-full md:w-auto text-2xl bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow">
              New Game
            </a>
          </Link>
          <Link href="/join">
            <a className="text-2xl mt-4 md:mt-0 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg shadow">
              Join Someone
            </a>
          </Link>
        </div>
      </main>
    </Page>
  );
}
