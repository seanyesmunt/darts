import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetGame } from "../effects/game";

export default function Header() {
  const router = useRouter();
  const { id } = router.query;
  const [game] = useGetGame(id);
  const joinID = game && game.join_id;

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-gray-800 shadow-xs text-white">
      <span className="chalk text-4xl hover:text-teal-200 tracking-tight">
        <Link href="/">
          <a>darts.now.sh</a>
        </Link>
      </span>
      {joinID && (
        <span className="text-3xl text-teal-500 bg-gray-700 p-2 rounded-lg tracking-tight">
          <span>{joinID}</span>
        </span>
      )}
    </nav>
  );
}
