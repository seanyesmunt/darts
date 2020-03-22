import React from "react";
import { useGetUserID } from "../effects/user";
import { updateScore } from "../api/firebase";

function ScoreRow(props) {
  const { number, score, gameID, playerID } = props;
  const userID = useGetUserID();
  const isMine = playerID === userID;

  function handleUpdateScore(newScore) {
    updateScore(gameID, userID, number, newScore);
  }

  return (
    <div className="score__item p-5">
      <span className="mr-10">{score || 0}</span>
      {isMine ? (
        <div className="inline-flex">
          <button
            onClick={() => handleUpdateScore(score + 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            +
          </button>
          <button
            onClick={() => handleUpdateScore(score - 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            -
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function Game(props) {
  const { join_id, players, id: gameID } = props;

  return (
    <div className="pl-10">
      <div className="text-gray-600">#{join_id}</div>

      <div className="flex">
        <div className="score__column">
          {["", 15, 16, 17, 18, 19, 20, "bull"].map(value => {
            return <div className="score__item pr-10">{value}</div>;
          })}
        </div>
        {players.map(({ id, name, score }) => {
          return (
            <div className="score__column">
              <div className="score__item border-gray-200 p-5">{name}</div>
              {Object.keys(score).map(number => {
                const scoreForNumber = score[number];
                return (
                  <ScoreRow
                    key={number}
                    number={number}
                    score={scoreForNumber}
                    playerID={id}
                    gameID={gameID}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
