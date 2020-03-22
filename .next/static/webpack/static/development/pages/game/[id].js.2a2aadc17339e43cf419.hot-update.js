webpackHotUpdate("static/development/pages/game/[id].js",{

/***/ "./api/firebase.ts":
/*!*************************!*\
  !*** ./api/firebase.ts ***!
  \*************************/
/*! exports provided: getUser, getGame, getGameId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGame", function() { return getGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameId", function() { return getGameId; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");


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

if (!firebase_app__WEBPACK_IMPORTED_MODULE_1__["apps"].length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
}

firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"](); // DB types

function getUser(userID) {
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("/users/" + userID).once("value").then(function (snapshot) {
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
    firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("users/" + userID).set(user, function (error) {
      if (error) {
        reject(error);
      }

      resolve(_objectSpread({}, user, {
        id: userID
      }));
    });
  });
}

function getGame(gameID, userID) {
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("/games/" + gameID).once("value").then(function (snapshot) {
    var game = snapshot.val();

    if (game) {
      return _objectSpread({}, game, {
        id: gameID
      });
    }

    return createGame(gameID, userID);
  });
}
function getGameId(join_id) {
  return new Promise(function (resolve, reject) {
    firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("games").orderByChild("join_id").equalTo(join_id).on("value", function (snapshot) {
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

function createGame(gameID, userId) {
  var game = {
    creator_id: userId,
    join_id: gameID.slice(0, 4)
  };
  return new Promise(function (resolve, reject) {
    firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]().ref("games/" + gameID).set(game, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve(_objectSpread({}, game, {
          id: gameID
        }));
      }
    });
  });
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

/***/ "./effects/game.ts":
/*!*************************!*\
  !*** ./effects/game.ts ***!
  \*************************/
/*! exports provided: useGetGame, useGetGameID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetGame", function() { return useGetGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetGameID", function() { return useGetGameID; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./effects/user.ts");






var GAME_ID = "game_id";
function useGetGame(gameIDFromUrl) {
  console.log("gameID", gameIDFromUrl);
  var userID = Object(_user__WEBPACK_IMPORTED_MODULE_5__["useGetUserID"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(gameIDFromUrl),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      gameID = _React$useState2[0],
      setgameID = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      game = _React$useState4[0],
      setGame = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (gameIDFromUrl) {
      setgameID(gameIDFromUrl);
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(GAME_ID, gameIDFromUrl, {
        expires: 365
      });
      setgameID(gameIDFromUrl);
    } else {
      var gameIDCookie = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(GAME_ID);

      if (gameIDCookie) {
        setgameID(gameIDCookie);
      } else {
        var newId = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(GAME_ID, newId, {
          expires: 365
        });
        setgameID(newId);
      }
    }
  }, [gameIDFromUrl]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (gameID && userID) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_4__["getGame"])(gameID, userID).then(function (gameFromDB) {
        setGame(gameFromDB);
      })["catch"](function (error) {
        setError(error);
      });
    }
  }, [gameID, userID]);
  return [game, error];
}
function useGetGameID() {
  var _useGetGame = useGetGame(undefined),
      _useGetGame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGetGame, 1),
      game = _useGetGame2[0];

  var gameID = game && game.id;
  return gameID;
}

/***/ }),

/***/ "./pages/game/[id].tsx":
/*!*****************************!*\
  !*** ./pages/game/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _effects_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../effects/game */ "./effects/game.ts");

var _jsxFileName = "/Users/sean/Workspace/darts/pages/game/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Game(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useGetGame = Object(_effects_game__WEBPACK_IMPORTED_MODULE_3__["useGetGame"])(id),
      _useGetGame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGetGame, 1),
      game = _useGetGame2[0];

  console.log("game", game);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, game && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 22
    }
  }, "ID: ", game.join_id)));
}

/***/ })

})
//# sourceMappingURL=[id].js.2a2aadc17339e43cf419.hot-update.js.map