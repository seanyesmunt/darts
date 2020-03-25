import { v4 as uuidv4 } from "uuid";
import * as firebase from "firebase/app";
import "firebase/database";

// DB types
declare global {
  interface User {
    id: string;
    created_at: number;
  }

  interface Options {
    name: string;
  }

  interface Player {
    id: string;
    name: string;
    score: {
      15: number;
      16: number;
      17: number;
      18: number;
      19: number;
      20: number;
      bull: number;
      total: number; // This shouldn't exist, it should just be calculated from the other values, but that's more work
    };
  }

  interface Game {
    id: string;
    creator_id: string;
    join_id: string;
    players: Array<Player>;
  }

  interface Error {
    message: string;
  }
}

const config = {
  apiKey: "AIzaSyDp01-0TwxRjNC05CuDcpauXRyLSMv0RRw",
  authDomain: "darts-yeslab.firebaseapp.com",
  databaseURL: "https://darts-yeslab.firebaseio.com",
  projectId: "darts-yeslab",
  storageBucket: "darts-yeslab.appspot.com",
  messagingSenderId: "426404952698",
  appId: "1:426404952698:web:738ac9ab1342a1177419c3",
  measurementId: "G-7DHLMBZXEN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();

const DEFAULT_SCORE = {
  20: 0,
  19: 0,
  18: 0,
  17: 0,
  16: 0,
  15: 0,
  bull: 0,
  total: 0
};

export function getUser(userID: string): Promise<User> {
  return db
    .ref("/users/" + userID)
    .once("value")
    .then(function(snapshot) {
      const user = snapshot.val();
      if (user) {
        return { ...user, id: userID };
      }

      return createUser(userID);
    });
}

function createUser(userID): Promise<User> {
  const user = {
    created_at: Date.now()
  };

  return new Promise((resolve, reject) => {
    db.ref("users/" + userID).set(user, error => {
      if (error) {
        reject(error);
      }

      resolve({ ...user, id: userID });
    });
  });
}

export function getGame(
  gameID: string,
  userID: string,
  onUpdate: any
): Promise<Game> {
  return new Promise((resolve, reject) => {
    db.ref("/games/" + gameID).on("value", snapshot => {
      const game = snapshot.val();
      onUpdate(game);
    });
  });
}

export function getGameId(join_id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    db.ref("games")
      .orderByChild("join_id")
      .equalTo(join_id)
      .on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          const id = data.key;
          if (!id) {
            reject("Game not found.");
          } else {
            resolve(id);
          }
        });
      });
  });
}

export function createGame(userID, name): Promise<Game> {
  const gameID = uuidv4();

  const game = {
    creator_id: userID,
    join_id: gameID.slice(0, 4),
    players: [
      {
        id: userID,
        name,
        score: DEFAULT_SCORE
      }
    ]
  };

  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID).set(game, error => {
      if (error) {
        reject(error);
      } else {
        resolve({ ...game, id: gameID });
      }
    });
  });
}

export function addPlayerToGame(gameID, userID, name) {
  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID)
      .once("value")
      .then(snapshot => {
        const game = snapshot.val();

        if (!game.players.some(player => player.id === userID)) {
          const newGame = {
            ...game,
            players: game.players.concat({
              id: userID,
              name,
              score: DEFAULT_SCORE
            })
          };

          db.ref("games/" + gameID).update(newGame, error => {
            if (error) {
              console.error("error", error);
            }
          });
        }
      });
  });
}

export function updateScore(gameID, userID, number) {
  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID)
      .once("value")
      .then(snapshot => {
        const game = snapshot.val();

        const newGame = { ...game };
        newGame.players =
          newGame.players.length > 2
            ? handleThreePlayerGame(userID, newGame.players, number)
            : handleTwoPlayerGame(userID, newGame.players, number);

        db.ref("games/" + gameID).set(newGame, error => {
          if (error) {
            console.error("error", error);
          }
        });
      });
  });
}

export function resetScore(gameID, userID) {
  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID)
      .once("value")
      .then(snapshot => {
        const game = snapshot.val();

        const newGame = { ...game };
        newGame.players = newGame.players.map(player => {
          if (player.id !== userID) {
            return player;
          }

          return { ...player, score: DEFAULT_SCORE };
        });

        db.ref("games/" + gameID).set(newGame, error => {
          if (error) {
            console.error("error", error);
          }
        });
      });
  });
}

export function newGame(gameID) {
  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID)
      .once("value")
      .then(snapshot => {
        const game = snapshot.val();

        const newGame = { ...game };
        newGame.players = newGame.players.map(player => {
          return { ...player, score: DEFAULT_SCORE };
        });

        db.ref("games/" + gameID).set(newGame, error => {
          if (error) {
            console.error("error", error);
          }
        });
      });
  });
}

function handleTwoPlayerGame(
  userID: string,
  originalPlayers: Array<Player>,
  number: string | number
) {
  let newPlayers = originalPlayers.slice();

  newPlayers = newPlayers.map(player => {
    if (player.id !== userID) {
      return player;
    }

    const newPlayer = { ...player };
    const scoreForNumber = newPlayer.score[number];
    if (scoreForNumber === 3) {
      // Update other scores
      newPlayer.score.total += typeof number === "string" ? 50 : number;
    } else {
      newPlayer.score[number] = scoreForNumber + 1;
    }

    return { ...newPlayer };
  });

  return newPlayers;
}

function handleThreePlayerGame(
  userID: string,
  originalPlayers: Array<Player>,
  number: string | number
) {
  let newPlayers = originalPlayers.slice();
  const amAddingToOtherPlayers = newPlayers.some(player => {
    if (player.id === userID && player.score[number] === 3) {
      return true;
    }
  });

  if (amAddingToOtherPlayers) {
    newPlayers = newPlayers.map(player => {
      const newPlayer = { ...player };
      if (newPlayer.score[number] !== 3 && newPlayer.id !== userID) {
        newPlayer.score.total += typeof number === "string" ? 50 : number;
      }
      return { ...newPlayer };
    });
  } else {
    newPlayers = newPlayers.map(player => {
      if (player.id !== userID) {
        return player;
      }

      const newPlayer = { ...player };
      const scoreForNumber = newPlayer.score[number];
      newPlayer.score[number] = scoreForNumber + 1;

      return { ...newPlayer };
    });
  }

  return newPlayers;
}

// const data = {
//   games: {
//     "one": {
//       creator: "user_id",
//       timestamp: 000,
//       code: "7yzh"
//     },
//     "two": {
//       creator: "user_id",
//       timestamp: 000,
//       code: "8n0a"
//     }
//   }

// }
