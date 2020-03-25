import React from "react";
import classnames from "classnames";
import { useGetUserID } from "../effects/user";
import { updateScore, resetScore } from "../api/firebase";

// 2 person, closed + highest score
// 3 person, closed + lowest score

export default function Game(props) {
  const { join_id, players, id: gameID } = props;
  const userID = useGetUserID();
  const highestScore = players.reduce(
    (acc, player) => {
      if (player.score.total > acc) {
        return player.score.total;
      } else {
        return acc;
      }
    },
    [0]
  );

  let hasWinner = false;
  for (var i = 0; i < players.length; i++) {
    const player = players[i];
    const scores = player.score;
    const total =
      scores[15] +
      scores[16] +
      scores[17] +
      scores[18] +
      scores[19] +
      scores[20] +
      scores["bull"];

    if (total === 21) {
      // Check scores, 2 v 3 players
      if (players.length > 2) {
      } else {
        // Does player have the highest score?
        const isHighest = players.some(player => {
          return player.score.total === highestScore;
        });

        if (isHighest) {
          hasWinner = true;
        }
      }
    }
  }

  return (
    <div>
      {hasWinner ? (
        <div>Winner winner!</div>
      ) : (
        <ScoreBoard players={players} gameID={gameID} />
      )}
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
