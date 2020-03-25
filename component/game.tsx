import React from "react";
import classnames from "classnames";
import { useGetUserID } from "../effects/user";
import { updateScore, resetScore, newGame } from "../api/firebase";

// 2 person, closed + highest score
// 3 person, closed + lowest score

export default function Game(props) {
  const { join_id, players, id: gameID, creator_id } = props;
  const userID = useGetUserID();
  const highestScore = players.reduce((acc, player) => {
    if (player.score.total > acc) {
      return player.score.total;
    } else {
      return acc;
    }
  }, 0);

  const lowestScore = players.reduce((acc, player) => {
    if (player.score.total < acc) {
      return player.score.total;
    } else {
      return acc;
    }
  }, Infinity);

  const creator = players.find(player => player.id === creator_id);

  let hasWinner = false;
  let winnerName;
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
      if (players.length > 2) {
        // Does player have the lowest score?
        const isLowest = players.some(player => {
          return player.score.total === lowestScore;
        });

        if (isLowest) {
          hasWinner = true;
          winnerName = player.name;
        }
      } else {
        // Does player have the highest score?
        const isHighest = players.some(player => {
          return player.score.total === highestScore;
        });

        if (isHighest) {
          hasWinner = true;
          winnerName = player.name;
        }
      }
    }
  }

  return (
    <div>
      {hasWinner ? (
        <div>
          <h1>Winner winner for {winnerName}!</h1>
          {creator && creator.id === userID ? (
            <button
              className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
              onClick={() => newGame(gameID)}
            >
              New Game
            </button>
          ) : (
            <div className="text-sm mt-4">
              Waiting for the host to start a new game...
            </div>
          )}
        </div>
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
        className={classnames(
          "flex-1 flex align-center justify-center text-white ont-bold w-100",
          {
            "bg-teal-600 hover:bg-teal-500": isMine
          }
        )}
      >
        {score === 1 && (
          <SVG>
            <line x1="15" y1="9" x2="9" y2="15" />
          </SVG>
        )}
        {score === 2 && (
          <SVG>
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </SVG>
        )}
        {score === 3 && (
          <SVG>
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </SVG>
        )}
      </button>
    </div>
  );
}

function SVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={48}
      height={48}
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {props.children}
    </svg>
  );
}
