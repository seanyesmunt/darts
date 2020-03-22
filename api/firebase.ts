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

firebase.database();

// DB types
declare global {
  interface User {
    id: string;
    created_at: number;
  }

  interface Game {
    id: string;
    creator_id: string;
    join_id: string;
  }

  interface Error {
    message: string;
  }
}

export function getUser(userID: string): Promise<User> {
  return firebase
    .database()
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
    firebase
      .database()
      .ref("users/" + userID)
      .set(user, error => {
        if (error) {
          reject(error);
        }

        resolve({ ...user, id: userID });
      });
  });
}

export function getGame(gameID: string, userID: string): Promise<Game> {
  return firebase
    .database()
    .ref("/games/" + gameID)
    .once("value")
    .then(function(snapshot) {
      const game = snapshot.val();
      if (game) {
        return { ...game, id: gameID };
      }

      return createGame(gameID, userID);
    });
}

export function getGameId(join_id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("games")
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

function createGame(gameID, userId): Promise<Game> {
  const game = {
    creator_id: userId,
    join_id: gameID.slice(0, 4)
  };

  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("games/" + gameID)
      .set(game, error => {
        if (error) {
          reject(error);
        } else {
          resolve({ ...game, id: gameID });
        }
      });
  });
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
