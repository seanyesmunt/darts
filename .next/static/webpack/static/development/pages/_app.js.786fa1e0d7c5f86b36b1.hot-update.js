webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./api/firebase.ts":
/*!*************************!*\
  !*** ./api/firebase.ts ***!
  \*************************/
/*! exports provided: getUser, createGame, updateGameScore, getGame, getGameId, addPlayerToGame, resetScore, newGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGame", function() { return createGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGameScore", function() { return updateGameScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGame", function() { return getGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameId", function() { return getGameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlayerToGame", function() { return addPlayerToGame; });
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
} //
//
// User
//
//


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
} //
//
// Games
//
//

function createGame(userID, name) {
  var gameID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
  var game = {
    creator_id: userID,
    join_id: gameID.slice(0, 4),
    score_events: [],
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
function updateGameScore(gameID, userID, hitValue) {
  return new Promise(function (resolve, reject) {
    db("games/".concat(gameID)).once("value").then(function (snapshot) {
      var game = snapshot.val();

      var newGame = _objectSpread({}, game);

      if (!newGame.score_events) {
        newGame.score_events = [];
      }

      newGame.score_events.push({
        user_id: userID,
        hit_value: hitValue
      });
      db("games/" + gameID).set(newGame, function (error) {
        if (error) {
          console.error("error", error);
        }
      });
    });
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
function addPlayerToGame(gameID, userID, name) {
  db("games/".concat(gameID)).once("value").then(function (snapshot) {
    var game = snapshot.val();

    var newGame = _objectSpread({}, game, {
      players: game.players.concat({
        id: userID,
        name: name
      })
    });

    db("games/" + gameID).update(newGame, function (error) {
      if (error) {
        console.error("error", error);
      }
    });
  });
}
function resetScore(gameID, userID) {// return new Promise((resolve, reject) => {
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
function newGame(gameID) {// return new Promise((resolve, reject) => {
  //   db("games/" + gameID)
  //     .once("value")
  //     .then(snapshot => {
  //       const game = snapshot.val();
  //       const newGame = { ...game };
  //       newGame.players = newGame.players.map(player => {
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

function handleTwoPlayerGame(userID, originalPlayers, number) {// let newPlayers = originalPlayers.slice();
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

function handleThreePlayerGame(userID, originalPlayers, number) {// let newPlayers = originalPlayers.slice();
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

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _effects_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../effects/game */ "./effects/game.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types.ts */ "./types.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./pages/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/sean/Workspace/darts/pages/_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useGetUser = Object(_effects_user__WEBPACK_IMPORTED_MODULE_4__["useGetUser"])(),
      _useGetUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGetUser, 2),
      user = _useGetUser2[0],
      userError = _useGetUser2[1];

  if (userError) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    }, userError.message);
  }

  if (!user) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:400,700|Mansalva&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul


/***/ })

})
//# sourceMappingURL=_app.js.786fa1e0d7c5f86b36b1.hot-update.js.map