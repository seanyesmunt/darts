import Link from "next/link";
import { useRouter } from "next/router";
import { useGetGame } from "../../effects/game";

interface Props {
  game?: Game;
}

export default function Game(props: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [game] = useGetGame(id);
  console.log("game", game);

  return (
    <div>
      <main>{game && <div>ID: {game.join_id}</div>}</main>
    </div>
  );
}
