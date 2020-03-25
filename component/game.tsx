import React from "react";
import classnames from "classnames";
import { useGetUserID } from "../effects/user";
import { updateScore, resetScore } from "../api/firebase";

export default function Game(props) {
  const { join_id, players, id: gameID } = props;
  const userID = useGetUserID();

  return (
    <div>
      <ScoreBoard players={players} gameID={gameID} />
    </div>
  );
}

function ScoreBoard(props) {
  const { players, gameID } = props;
  const userID = useGetUserID();

  return (
    <div>
      <div className="chalkboard mt-10 bg-teal-700 mx-2 chalk text-white border-b-8 shadow-xl">
        <div className="flex">
          <div className="score__column flex flex-col justify-center align-center">
            {["", 20, 19, 18, 17, 16, 15, "bull"].map(value => {
              return (
                <div
                  key={value}
                  className="score__item px-2 flex items-center justify-center"
                >
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
          {players.map(({ id, name, score }) => {
            const isMine = id === userID;
            return (
              <div key={id} className="score__column">
                <div
                  className={classnames(
                    "score__item text-center border-gray-400 p-5",
                    {
                      "bg-teal-600": isMine
                    }
                  )}
                >
                  <div>{name}</div>
                  <div>{score.total}</div>
                </div>
                {[20, 19, 18, 17, 16, 15, "bull"].map(number => {
                  return (
                    <ScoreRow
                      key={number}
                      number={number}
                      score={score[number]}
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
      <button
        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={() => resetScore(gameID, userID)}
      >
        Reset Score
      </button>
    </div>
  );
}

function ScoreRow(props) {
  const { number, score, gameID, playerID } = props;
  const userID = useGetUserID();
  const isMine = playerID === userID;

  function handleUpdateScore() {
    updateScore(gameID, userID, number);
  }

  return (
    <div className="score__item flex items-stretch relative">
      <button
        disabled={!isMine}
        onClick={() => handleUpdateScore()}
        className={classnames("flex-1 text-white ont-bold w-100", {
          "bg-teal-600 hover:bg-teal-500": isMine
        })}
      >
        {score === 0 ? "" : score}
      </button>
    </div>
  );
}
