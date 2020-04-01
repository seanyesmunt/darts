import React from "react";
import classnames from "classnames";
import { useGetUserID } from "../effects/user";
import {
  updateGameScore,
  gameReset,
  newGame,
  gameUndoLastMove
} from "../api/firebase";
import { useGetGame } from "../effects/game";

// 2 person, closed + highest score
// 3 person, closed + lowest score

export default function Game(props) {
  const {
    join_id,
    players,
    id: gameID,
    creator_id,
    score_events: scoreEvents = []
  } = props;
  const userID = useGetUserID();

  // Initialize score object based on how many players there are
  let score: Score = players.reduce((scoreObject, player) => {
    return {
      ...scoreObject,
      [player.id]: {
        20: 0,
        19: 0,
        15: 0,
        18: 0,
        17: 0,
        16: 0,
        25: 0,
        total: 0
      }
    };
  }, {});

  // For each `score_event`, update the score for everyone
  scoreEvents.forEach((scoreEvent: ScoreEvent) => {
    if (!userID) {
      return;
    }

    const { user_id: scoreEventUserID, hit_value: hitValue } = scoreEvent;

    const usersScoreForHitValue = Number(score[scoreEventUserID][hitValue]);
    if (usersScoreForHitValue < 3) {
      // Something because of typescript. Not sure yet
      if (typeof score[scoreEventUserID][hitValue] === "number") {
        score[scoreEventUserID][hitValue] += 1;
      }
    } else {
      // The user already closed that number out
      // If 2 player game, add it to their own score
      // Else, add it to the other players who haven't closed it yet's score
      if (players.length < 3) {
        players.forEach((player: Player) => {
          const wasPlayersOwnHit = player.id === scoreEventUserID;
          if (wasPlayersOwnHit) {
            score[player.id].total += hitValue;
          }
        });
      } else {
        // Add score to users own score if players that don't have hitValue closed out
        players.forEach((player: Player) => {
          const isOtherPlayer = player.id !== scoreEventUserID;
          const playersScoreForHitValue = score[player.id][hitValue];

          if (isOtherPlayer && playersScoreForHitValue < 3) {
            score[player.id].total += hitValue;
          }
        });
      }
    }
  });

  const [highestScore, lowestScore] = Object.values(score).reduce(
    (acc: [number, number], score: Score) => {
      const [currentHighest, currentLowest] = acc;
      let newHighest: number;
      let newLowest: number;

      if (score.total > currentHighest) {
        newHighest = score.total;
      }

      if (score.total < currentLowest) {
        newLowest = score.total;
      }

      return [
        newHighest !== undefined ? currentHighest : 0,
        newLowest !== undefined ? newLowest : currentLowest
      ];
    },
    [0, Infinity]
  );

  const creator = players.find(player => player.id === creator_id);

  let hasWinner = false;
  let winnerName: string;

  Object.keys(score).forEach(userID => {
    const scoreForUserID = score[userID];
    const hasClosedOutBoard =
      scoreForUserID[15] === 3 &&
      scoreForUserID[16] === 3 &&
      scoreForUserID[17] === 3 &&
      scoreForUserID[18] === 3 &&
      scoreForUserID[19] === 3 &&
      scoreForUserID[20] === 3 &&
      scoreForUserID[25] === 3;

    if (hasClosedOutBoard) {
      if (players.length < 3) {
        const isHightest = scoreForUserID.total === highestScore;
        if (isHightest) {
          hasWinner = true;
          const player = players.find(player => player.id === userID);
          winnerName = player.name;
        }
      } else {
        const isLowest = scoreForUserID.total === lowestScore;
        if (isLowest) {
          hasWinner = true;
          const player = players.find(player => player.id === userID);
          winnerName = player.name;
        }
      }
    }
  });

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
      <ScoreBoard score={score} gameID={gameID} players={players} />
      <button
        className="mt-24 mb-4 md:w-auto text-2xl bg-gray-800 hover:bg-teal-700 text-white py-2 px-4 text-xs rounded-lg shadow"
        onClick={() => gameReset(gameID, userID)}
      >
        Reset Score
      </button>
    </div>
  );
}

function ScoreBoard(props) {
  const { players, gameID, score } = props;
  const userID = useGetUserID();
  const [game, error] = useGetGame(gameID);

  return (
    <div className="mt-4 md:mt-8 text-sm md:text-2xl bg-teal-800 rounded-lg chalk">
      <div className="text-white">
        <div className="flex">
          <div className="score__column flex flex-col justify-center align-center">
            {["", 20, 19, 18, 17, 16, 15, 25].map((value, index) => {
              return (
                <div
                  key={value}
                  className={`score__item h-16 ${
                    index === 0 ? "h-24" : ""
                  } md:h-24 w-24 px-4 flex items-center justify-center`}
                >
                  <span>
                    {value === "" && game && game.score_events ? (
                      <button
                        onClick={() => gameUndoLastMove(gameID)}
                        className="bg-teal-600 hover:bg-teal-500 rounded-full"
                      >
                        <SVG stroke="1">
                          <path
                            stroke="white"
                            d="M12 10h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5v2a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 12 8v2z"
                          />
                        </SVG>
                      </button>
                    ) : (
                      value
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          {Object.keys(score).map(userIDForScore => {
            const player = players.find(player => player.id === userIDForScore);
            const userScore = score[userIDForScore];
            const isMine = userIDForScore === userID;
            return (
              <div key={userIDForScore} className="score__column">
                <div
                  className={classnames(
                    "score__item h-24 md:h-24 w-24 text-center pt-2 ",
                    {
                      "bg-teal-700": isMine
                    }
                  )}
                >
                  <div className="text-lg md:text-md text-gray-300">
                    {player.name}
                  </div>
                  <div className="text-4xl">{userScore.total}</div>
                </div>
                {[20, 19, 18, 17, 16, 15, 25].map(number => {
                  return (
                    <ScoreRow
                      key={number}
                      number={number}
                      score={score[userIDForScore][number]}
                      playerID={userIDForScore}
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

  function handleupdateGameScore() {
    updateGameScore(gameID, userID, number);
  }

  return (
    <div className="score__item h-16 md:h-24 flex items-stretch relative">
      <button
        disabled={!isMine}
        onClick={() => handleupdateGameScore()}
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
        {score > 2 && (
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
  const { children, ...rest } = props;
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
      {...rest}
    >
      {children}
    </svg>
  );
}
