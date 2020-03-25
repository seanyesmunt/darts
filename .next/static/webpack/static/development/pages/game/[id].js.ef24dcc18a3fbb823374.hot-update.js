webpackHotUpdate("static/development/pages/game/[id].js",{

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



 // DB types

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

var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"]();
var DEFAULT_SCORE = {
  20: 0,
  19: 0,
  18: 0,
  17: 0,
  16: 0,
  15: 0,
  bull: 0,
  total: 0
};
function getUser(userID) {
  return db.ref("/users/" + userID).once("value").then(function (snapshot) {
    var user = snapshot.val();

    if (user) {
      return _objectSpread({}, user, {
        id: userID
      });
    }

    return createUser(userID);
  });
}

function createUser(userID) {
  var user = {
    created_at: Date.now()
  };
  return new Promise(function (resolve, reject) {
    db.ref("users/" + userID).set(user, function (error) {
      if (error) {
        reject(error);
      }

      resolve(_objectSpread({}, user, {
        id: userID
      }));
    });
  });
}

function getGame(gameID, userID, onUpdate) {
  return new Promise(function (resolve, reject) {
    db.ref("/games/" + gameID).on("value", function (snapshot) {
      var game = snapshot.val();
      onUpdate(game);
    });
  });
}
function getGameId(join_id) {
  return new Promise(function (resolve, reject) {
    db.ref("games").orderByChild("join_id").equalTo(join_id).on("value", function (snapshot) {
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
    players: [{
      id: userID,
      name: name,
      score: DEFAULT_SCORE
    }]
  };
  return new Promise(function (resolve, reject) {
    db.ref("games/" + gameID).set(game, function (error) {
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
    db.ref("games/" + gameID).once("value").then(function (snapshot) {
      var game = snapshot.val();

      if (!game.players.some(function (player) {
        return player.id === userID;
      })) {
        var _newGame = _objectSpread({}, game, {
          players: game.players.concat({
            id: userID,
            name: name,
            score: DEFAULT_SCORE
          })
        });

        db.ref("games/" + gameID).update(_newGame, function (error) {
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
    db.ref("games/" + gameID).once("value").then(function (snapshot) {
      var game = snapshot.val();

      var newGame = _objectSpread({}, game);

      newGame.players = newGame.players.length > 2 ? handleThreePlayerGame(userID, newGame.players, number) : handleTwoPlayerGame(userID, newGame.players, number);
      db.ref("games/" + gameID).set(newGame, function (error) {
        if (error) {
          console.error("error", error);
        }
      });
    });
  });
}
function resetScore(gameID, userID) {
  return new Promise(function (resolve, reject) {
    db.ref("games/" + gameID).once("value").then(function (snapshot) {
      var game = snapshot.val();

      var newGame = _objectSpread({}, game);

      newGame.players = newGame.players.map(function (player) {
        if (player.id !== userID) {
          return player;
        }

        return _objectSpread({}, player, {
          score: DEFAULT_SCORE
        });
      });
      db.ref("games/" + gameID).set(newGame, function (error) {
        if (error) {
          console.error("error", error);
        }
      });
    });
  });
}
function newGame(gameID) {
  return new Promise(function (resolve, reject) {
    db.ref("games/" + gameID).once("value").then(function (snapshot) {
      var game = snapshot.val();

      var newGame = _objectSpread({}, game);

      newGame.players = newGame.players.map(function (player) {
        return _objectSpread({}, player, {
          score: DEFAULT_SCORE
        });
      });
      db.ref("games/" + gameID).set(newGame, function (error) {
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
      newPlayer.score.total += typeof number === "string" ? 50 : number;
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
        newPlayer.score.total += typeof number === "string" ? 50 : number;
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
} // const data = {
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

/***/ }),

/***/ "./component/game.tsx":
/*!****************************!*\
  !*** ./component/game.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
var _jsxFileName = "/Users/sean/Workspace/darts/component/game.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // 2 person, closed + highest score
// 3 person, closed + lowest score

function Game(props) {
  var join_id = props.join_id,
      players = props.players,
      gameID = props.id,
      creator_id = props.creator_id;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  var highestScore = players.reduce(function (acc, player) {
    if (player.score.total > acc) {
      return player.score.total;
    } else {
      return acc;
    }
  }, 0);
  var lowestScore = players.reduce(function (acc, player) {
    if (player.score.total < acc) {
      return player.score.total;
    } else {
      return acc;
    }
  }, Infinity);
  var creator = players.find(function (player) {
    return player.id === creator_id;
  });
  var hasWinner = false;
  var winnerName;

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var scores = player.score;
    var total = scores[15] + scores[16] + scores[17] + scores[18] + scores[19] + scores[20] + scores["bull"];

    if (total === 21) {
      if (players.length > 2) {
        // Does player have the lowest score?
        var isLowest = players.some(function (player) {
          return player.score.total === lowestScore;
        });

        if (isLowest) {
          hasWinner = true;
          winnerName = player.name;
        }
      } else {
        // Does player have the highest score?
        var isHighest = players.some(function (player) {
          return player.score.total === highestScore;
        });

        if (isHighest) {
          hasWinner = true;
          winnerName = player.name;
        }
      }
    }
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, hasWinner ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "Winner winner for ", winnerName, "!"), creator && creator.id === userID ? __jsx("button", {
    className: "bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8",
    onClick: function onClick() {
      return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_3__["newGame"])(gameID);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "New Game") : __jsx("div", {
    className: "text-sm mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Waiting for the host to start a new game...")) : __jsx(ScoreBoard, {
    players: players,
    gameID: gameID,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }));
}

function ScoreBoard(props) {
  var _this = this;

  var players = props.players,
      gameID = props.gameID;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "chalkboard mt-10 bg-teal-700 mx-2 chalk text-white border-b-8 shadow-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "score__column flex flex-col justify-center align-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, ["", 20, 19, 18, 17, 16, 15, "bull"].map(function (value) {
    return __jsx("div", {
      key: value,
      className: "score__item px-2 flex items-center justify-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 19
      }
    }, value));
  })), players.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        score = _ref.score;
    var isMine = id === userID;
    return __jsx("div", {
      key: id,
      className: "score__column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("score__item text-center border-gray-400 p-5", {
        "bg-teal-600": isMine
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 19
      }
    }, name), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 19
      }
    }, score.total)), [20, 19, 18, 17, 16, 15, "bull"].map(function (number) {
      return __jsx(ScoreRow, {
        key: number,
        number: number,
        score: score[number],
        playerID: id,
        gameID: gameID,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      });
    }));
  }))), __jsx("button", {
    className: "bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8",
    onClick: function onClick() {
      return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_3__["resetScore"])(gameID, userID);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, "Reset Score"));
}

function ScoreRow(props) {
  var number = props.number,
      score = props.score,
      gameID = props.gameID,
      playerID = props.playerID;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  var isMine = playerID === userID;

  function handleUpdateScore() {
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_3__["updateScore"])(gameID, userID, number);
  }

  return __jsx("div", {
    className: "score__item flex items-stretch relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: !isMine,
    onClick: function onClick() {
      return handleUpdateScore();
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex-1 text-white ont-bold w-100", {
      "bg-teal-600 hover:bg-teal-500": isMine
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, score === 0 ? "" : score));
}

/***/ })

})
//# sourceMappingURL=[id].js.ef24dcc18a3fbb823374.hot-update.js.map