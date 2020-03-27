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
    <nav className="chalk flex items-center justify-between flex-wrap p-6 bg-gray-800 shadow-xs text-white">
      <span className="font-semibold text-4xl hover:text-teal-200 tracking-tight">
        <Link href="/">
          <a>darts.now.sh</a>
        </Link>
      </span>
      {joinID && (
        <span className="font-semibold text-4xl text-white bg-teal-700 p-2 rounded tracking-tight">
          <span>#</span>
          <span>{joinID}</span>
        </span>
      )}
    </nav>
  );
}
