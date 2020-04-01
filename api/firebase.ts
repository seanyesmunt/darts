import { v4 as uuidv4 } from "uuid";
import * as firebase from "firebase/app";
import "firebase/database";

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

const database = firebase.database();

function db(ref: string) {
  return database.ref(`/v1/${ref}`);
}

//
//
// User
//
//
function createUser(userID: string): Promise<User> {
  const user = {
    created_at: Date.now()
  };

  return new Promise((resolve, reject) => {
    db("users/" + userID).set(user, error => {
      if (error) {
        reject(error);
      }

      resolve({ ...user, id: userID });
    });
  });
}

export function getUser(userID: string): Promise<User> {
  return db(`users/${userID}`)
    .once("value")
    .then(function(snapshot) {
      const user = snapshot.val();
      if (user) {
        return { ...user, id: userID };
      }

      return createUser(userID);
    });
}

//
//
// Games
//
//
export function createGame(userID: string, name: string): Promise<Game> {
  const gameID = uuidv4();

  const game: GameLessID = {
    creator_id: userID,
    join_id: gameID.slice(0, 4),
    score_events: [],
    players: [
      {
        id: userID,
        name
      }
    ]
  };

  return new Promise((resolve, reject) => {
    db(`games/${gameID}`).set(game, error => {
      if (error) {
        reject(error);
      } else {
        resolve({ ...game, id: gameID });
      }
    });
  });
}

export function updateGameScore(
  gameID: string,
  userID: string,
  hitValue: number
) {
  return new Promise((resolve, reject) => {
    db(`games/${gameID}`)
      .once("value")
      .then(snapshot => {
        const game = snapshot.val();
        let newGame: Game = { ...game };

        if (!newGame.score_events) {
          newGame.score_events = [];
        }

        newGame.score_events.push({
          user_id: userID,
          hit_value: hitValue
        });
        db("games/" + gameID).set(newGame, error => {
          if (error) {
            console.error("error", error);
          }
        });
      });
  });
}

export function getGame(
  gameID: string,
  userID: string,
  onUpdate: any
): Promise<Game> {
  return new Promise((resolve, reject) => {
    db(`/games/${gameID}`).on("value", snapshot => {
      const game = snapshot.val();
      onUpdate(game);
    });
  });
}

export function getGameId(join_id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    db("games")
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

export function addPlayerToGame(gameID, userID, name) {
  db(`games/${gameID}`)
    .once("value")
    .then(snapshot => {
      const game = snapshot.val();
      const newGame = {
        ...game,
        players: game.players.concat({
          id: userID,
          name
        })
      };
      db("games/" + gameID).update(newGame, error => {
        if (error) {
          console.error("error", error);
        }
      });
    });
}

export function resetScore(gameID, userID) {
  // return new Promise((resolve, reject) => {
  //   db(`games/${gameID}`)
  //     .once("value")
  //     .then(snapshot => {
  //       const game = snapshot.val();
  //       const newGame = { ...game };
  //       newGame.players = newGame.players.map(player => {
  //         if (player.id !== userID) {
  //           return player;
  //         }
  //         return { ...player };
  //       });
  //       db("games/" + gameID).set(newGame, error => {
  //         if (error) {
  //           console.error("error", error);
  //         }
  //       });
  //     });
  // });
}

export function newGame(gameID) {
  return new Promise((resolve, reject) => {
    db("games/" + gameID)
      .once("value")
      .then(snapshot => {
        const game = snapshot.val();
        const newGame = { ...game };
        newGame.score_events = [];

        db("games/" + gameID).set(newGame, error => {
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
  // let newPlayers = originalPlayers.slice();
  // newPlayers = newPlayers.map(player => {
  //   if (player.id !== userID) {
  //     return player;
  //   }
  //   const newPlayer = { ...player };
  //   const scoreForNumber = newPlayer.score[number];
  //   if (scoreForNumber === 3) {
  //     // Update other scores
  //     newPlayer.score.total += typeof number === "string" ? 25 : number;
  //   } else {
  //     newPlayer.score[number] = scoreForNumber + 1;
  //   }
  //   return { ...newPlayer };
  // });
  // return newPlayers;
}

function handleThreePlayerGame(
  userID: string,
  originalPlayers: Array<Player>,
  number: string | number
) {
  // let newPlayers = originalPlayers.slice();
  // const amAddingToOtherPlayers = newPlayers.some(player => {
  //   if (player.id === userID && player.score[number] === 3) {
  //     return true;
  //   }
  // });
  // if (amAddingToOtherPlayers) {
  //   newPlayers = newPlayers.map(player => {
  //     const newPlayer = { ...player };
  //     if (newPlayer.score[number] !== 3 && newPlayer.id !== userID) {
  //       newPlayer.score.total += typeof number === "string" ? 25 : number;
  //     }
  //     return { ...newPlayer };
  //   });
  // } else {
  //   newPlayers = newPlayers.map(player => {
  //     if (player.id !== userID) {
  //       return player;
  //     }
  //     const newPlayer = { ...player };
  //     const scoreForNumber = newPlayer.score[number];
  //     newPlayer.score[number] = scoreForNumber + 1;
  //     return { ...newPlayer };
  //   });
  // }
  // return newPlayers;
}
