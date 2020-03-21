import * as firebase from "firebase";
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
  firebase.database();
}

// DB types
declare global {
  interface User {
    id: string;
  }

  interface Error {
    message: string;
  }
}

export function getUser(userId: string): Promise<User> {
  return firebase
    .database()
    .ref("/users/" + userId)
    .once("value")
    .then(function(snapshot) {
      const user = snapshot.val();
      console.log("user", user);
      if (user) {
        return user;
      }

      return createUser(userId);
    });
}

function createUser(userId): Promise<User> {
  const user = {};

  console.log("create user for: ", userId);
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("users/" + userId)
      .set(user, error => {
        if (error) {
          reject(error.message);
        }

        resolve({ ...user, id: userId });
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
