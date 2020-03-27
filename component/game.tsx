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

  return hasWinner ? (
    <div className="mx-auto">
      <img src="/winner.png" className="w-full max-w-md md:mt-8 px-8" />
      <h1 className="chalk text-6xl px-8">Nice one {winnerName}!</h1>

      <div className="px-8">
        {creator && creator.id === userID ? (
          <button
            className="mt-4 md:mt-24 w-full md:w-auto text-2xl bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow"
            onClick={() => newGame(gameID)}
          >
            New Game
          </button>
        ) : (
          <div className="text-sm my-16">
            Waiting for the host to start the another game...
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex-col overflow-x-scroll">
      <ScoreBoard players={players} gameID={gameID} />
      <button
        className="mt-24 mb-4 md:w-auto text-2xl bg-gray-800 hover:bg-teal-700 text-white py-2 px-4 text-xs rounded-lg shadow"
        onClick={() => resetScore(gameID, userID)}
      >
        Reset Score
      </button>
    </div>
  );
}

function ScoreBoard(props) {
  const { players, gameID } = props;
  const userID = useGetUserID();

  return (
    <div className="mt-4 md:mt-8 text-sm md:text-2xl bg-teal-800 rounded-lg chalk">
      <div className="text-white">
        <div className="flex">
          <div className="score__column flex flex-col justify-center align-center">
            {["", 20, 19, 18, 17, 16, 15, "bull"].map((value, index) => {
              return (
                <div
                  key={value}
                  className={`score__item h-16 ${
                    index === 0 ? "h-24" : ""
                  } md:h-24 px-4 flex items-center justify-center`}
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
                    "score__item h-24 md:h-24 w-24 text-center pt-2 ",
                    {
                      "bg-teal-700": isMine
                    }
                  )}
                >
                  <div className="text-lg md:text-md text-gray-300">{name}</div>
                  <div className="text-4xl">{score.total}</div>
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
    <div className="score__item h-16 md:h-24 flex items-stretch relative">
      <button
        disabled={!isMine}
        onClick={() => handleUpdateScore()}
        className={classnames(
          "flex-1 flex align-center justify-center text-white ont-bold w-100",
          {
            "bg-teal-700 hover:bg-teal-500": isMine
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
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {props.children}
    </svg>
  );
}
