webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./api/firebase.ts":
/*!*************************!*\
  !*** ./api/firebase.ts ***!
  \*************************/
/*! exports provided: getUser, getGame, getGameId, createGame, addPlayerToGame, updateScore, resetScore, newGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGame", function() { return getGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameId", function() { return getGameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGame", function() { return createGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlayerToGame", function() { return addPlayerToGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScore", function() { return updateScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetScore", function() { return resetScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var config = {
  apiKey: "AIzaSyDp01-0TwxRjNC05CuDcpauXRyLSMv0RRw",
  authDomain: "darts-yeslab.firebaseapp.com",
  databaseURL: "https://darts-yeslab.firebaseio.com",
  projectId: "darts-yeslab",
  storageBucket: "darts-yeslab.appspot.com",
  messagingSenderId: "426404952698",
  appId: "1:426404952698:web:738ac9ab1342a1177419c3",
  measurementId: "G-7DHLMBZXEN"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_2__["apps"].length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
}

var database = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]();

function db(ref) {
  return database.ref("/v1/".concat(ref));
}

function createUser(userID) {
  var user = {
    created_at: Date.now()
  };
  return new Promise(function (resolve, reject) {
    db("users/" + userID).set(user, function (error) {
      if (error) {
        reject(error);
      }

      resolve(_objectSpread({}, user, {
        id: userID
      }));
    });
  });
}

function getUser(userID) {
  return db("users/".concat(userID)).once("value").then(function (snapshot) {
    var user = snapshot.val();

    if (user) {
      return _objectSpread({}, user, {
        id: userID
      });
    }

    return createUser(userID);
  });
}
function getGame(gameID, userID, onUpdate) {
  return new Promise(function (resolve, reject) {
    db("/games/".concat(gameID)).on("value", function (snapshot) {
      var game = snapshot.val();
      onUpdate(game);
    });
  });
}
function getGameId(join_id) {
  return new Promise(function (resolve, reject) {
    db("games").orderByChild("join_id").equalTo(join_id).on("value", function (snapshot) {
      snapshot.forEach(function (data) {
        var id = data.key;

        if (!id) {
          reject("Game not found.");
        } else {
          resolve(id);
        }
      });
    });
  });
}
function createGame(userID, name) {
  var gameID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
  var game = {
    creator_id: userID,
    join_id: gameID.slice(0, 4),
    scoreEvents: [],
    players: [{
      id: userID,
      name: name
    }]
  };
  return new Promise(function (resolve, reject) {
    db("games/".concat(gameID)).set(game, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve(_objectSpread({}, game, {
          id: gameID
        }));
      }
    });
  });
}
function addPlayerToGame(gameID, userID, name) {
  return new Promise(function (resolve, reject) {
    db("games/".concat(gameID)).once("value").then(function (snapshot) {
      var game = snapshot.val();

      if (!game.players.some(function (player) {
        return player.id === userID;
      })) {
        var _newGame = _objectSpread({}, game, {
          players: game.players.concat({
            id: userID,
            name: name
          })
        });

        db("games/" + gameID).update(_newGame, function (error) {
          if (error) {
            console.error("error", error);
          }
        });
      }
    });
  });
}
function updateScore(gameID, userID, number) {
  return new Promise(function (resolve, reject) {
    db("games/".concat(gameID)).once("value").then(function (snapshot) {
      var game = snapshot.val();

      var newGame = _objectSpread({}, game);

      newGame.players = newGame.players.length > 2 ? handleThreePlayerGame(userID, newGame.players, number) : handleTwoPlayerGame(userID, newGame.players, number);
      db("games/" + gameID).set(newGame, function (error) {
        if (error) {
          console.error("error", error);
        }
      });
    });
  });
}
function resetScore(gameID, userID) {
  return new Promise(function (resolve, reject) {
    db("games/".concat(gameID)).once("value").then(function (snapshot) {
      var game = snapshot.val();

      var newGame = _objectSpread({}, game);

      newGame.players = newGame.players.map(function (player) {
        if (player.id !== userID) {
          return player;
        }

        return _objectSpread({}, player);
      });
      db("games/" + gameID).set(newGame, function (error) {
        if (error) {
          console.error("error", error);
        }
      });
    });
  });
}
function newGame(gameID) {
  return new Promise(function (resolve, reject) {
    db("games/" + gameID).once("value").then(function (snapshot) {
      var game = snapshot.val();

      var newGame = _objectSpread({}, game);

      newGame.players = newGame.players.map(function (player) {
        return _objectSpread({}, player);
      });
      db("games/" + gameID).set(newGame, function (error) {
        if (error) {
          console.error("error", error);
        }
      });
    });
  });
}

function handleTwoPlayerGame(userID, originalPlayers, number) {
  var newPlayers = originalPlayers.slice();
  newPlayers = newPlayers.map(function (player) {
    if (player.id !== userID) {
      return player;
    }

    var newPlayer = _objectSpread({}, player);

    var scoreForNumber = newPlayer.score[number];

    if (scoreForNumber === 3) {
      // Update other scores
      newPlayer.score.total += typeof number === "string" ? 25 : number;
    } else {
      newPlayer.score[number] = scoreForNumber + 1;
    }

    return _objectSpread({}, newPlayer);
  });
  return newPlayers;
}

function handleThreePlayerGame(userID, originalPlayers, number) {
  var newPlayers = originalPlayers.slice();
  var amAddingToOtherPlayers = newPlayers.some(function (player) {
    if (player.id === userID && player.score[number] === 3) {
      return true;
    }
  });

  if (amAddingToOtherPlayers) {
    newPlayers = newPlayers.map(function (player) {
      var newPlayer = _objectSpread({}, player);

      if (newPlayer.score[number] !== 3 && newPlayer.id !== userID) {
        newPlayer.score.total += typeof number === "string" ? 25 : number;
      }

      return _objectSpread({}, newPlayer);
    });
  } else {
    newPlayers = newPlayers.map(function (player) {
      if (player.id !== userID) {
        return player;
      }

      var newPlayer = _objectSpread({}, player);

      var scoreForNumber = newPlayer.score[number];
      newPlayer.score[number] = scoreForNumber + 1;
      return _objectSpread({}, newPlayer);
    });
  }

  return newPlayers;
}

/***/ })

})
//# sourceMappingURL=_app.js.080b4cf1cc69cc012f99.hot-update.js.map