import React from "react";
import classnames from "classnames";
import { useGetUserID } from "../effects/user";
import { updateScore } from "../api/firebase";

function ScoreRow(props) {
  const { number, score, gameID, playerID } = props;
  const userID = useGetUserID();
  const isMine = playerID === userID;

  function handleUpdateScore(newScore) {
    updateScore(gameID, userID, number, newScore % 4);
  }

  return (
    <div className="score__item flex items-stretch relative">
      <button
        onClick={() => handleUpdateScore(score + 1)}
        className={classnames("flex-1 text-white ont-bold w-100", {
          "bg-teal-600 hover:bg-teal-500": isMine
        })}
      >
        {score === 0 ? "" : score}
      </button>
    </div>
  );
}

export default function Game(props) {
  const { join_id, players, id: gameID } = props;
  const userID = useGetUserID();

  return (
    <div className="chalkboard mt-10 bg-teal-700 mx-2 chalk text-white border-b-8 shadow-xl">
      <div className="flex">
        <div className="score__column flex flex-col justify-center align-center">
          {["", 15, 16, 17, 18, 19, 20, "bull"].map(value => {
            return (
              <div className="score__item px-2 flex items-center justify-center">
                <span>{value}</span>
              </div>
            );
          })}
        </div>
        {players.map(({ id, name, score }) => {
          const isMine = id === userID;
          return (
            <div className="score__column">
              <div
                className={classnames(
                  "score__item text-center border-gray-400 p-5",
                  {
                    "bg-teal-600": isMine
                  }
                )}
              >
                {name}
              </div>
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
