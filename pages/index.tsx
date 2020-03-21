import React from "react";
import Link from "next/link";

export default function Home() {
  const id = 1;

  return (
    <main>
      <Link href={`game/${id}`}>
        <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Create Game
        </a>
      </Link>
      <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
        Join Game
      </button>
    </main>
  );
}
