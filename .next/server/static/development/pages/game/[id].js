module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/firebase.ts":
/*!*************************!*\
  !*** ./api/firebase.ts ***!
  \*************************/
/*! exports provided: getUser, getGame, getGameId, createGame, addPlayerToGame, updateScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGame", function() { return getGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameId", function() { return getGameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGame", function() { return createGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlayerToGame", function() { return addPlayerToGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScore", function() { return updateScore; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // DB types

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

if (!firebase_app__WEBPACK_IMPORTED_MODULE_1__["apps"].length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
}

const db = firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"]();
const DEFAULT_SCORE = {
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  bull: 0
};
function getUser(userID) {
  return db.ref("/users/" + userID).once("value").then(function (snapshot) {
    const user = snapshot.val();

    if (user) {
      return _objectSpread({}, user, {
        id: userID
      });
    }

    return createUser(userID);
  });
}

function createUser(userID) {
  const user = {
    created_at: Date.now()
  };
  return new Promise((resolve, reject) => {
    db.ref("users/" + userID).set(user, error => {
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
  return new Promise((resolve, reject) => {
    db.ref("/games/" + gameID).on("value", snapshot => {
      const game = snapshot.val();
      onUpdate(game);
    });
  });
}
function getGameId(join_id) {
  return new Promise((resolve, reject) => {
    db.ref("games").orderByChild("join_id").equalTo(join_id).on("value", function (snapshot) {
      snapshot.forEach(function (data) {
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
function createGame(userID, name) {
  const gameID = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
  const game = {
    creator_id: userID,
    join_id: gameID.slice(0, 4),
    players: [{
      id: userID,
      name,
      score: DEFAULT_SCORE
    }]
  };
  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID).set(game, error => {
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
  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID).once("value").then(snapshot => {
      const game = snapshot.val();

      if (!game.players.some(player => player.id === userID)) {
        const newGame = _objectSpread({}, game, {
          players: game.players.concat({
            id: userID,
            name,
            score: DEFAULT_SCORE
          })
        });

        db.ref("games/" + gameID).update(newGame, error => {
          if (error) {
            console.error("error", error);
          }
        });
      }
    });
  });
}
function updateScore(gameID, userID, number, newScore) {
  return new Promise((resolve, reject) => {
    db.ref("games/" + gameID).once("value").then(snapshot => {
      const game = snapshot.val();

      const newGame = _objectSpread({}, game);

      newGame.players = newGame.players.map(player => {
        if (player.id !== userID) {
          return player;
        }

        const newPlayer = _objectSpread({}, player);

        newPlayer.score[number] = newScore;
        return _objectSpread({}, newPlayer);
      });
      db.ref("games/" + gameID).set(newGame, error => {
        if (error) {
          console.error("error", error);
        }
      });
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

/***/ "./component/game.tsx":
/*!****************************!*\
  !*** ./component/game.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
var _jsxFileName = "/Users/sean/Workspace/darts/component/game.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ScoreRow(props) {
  const {
    number,
    score,
    gameID,
    playerID
  } = props;
  const userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_1__["useGetUserID"])();
  const isMine = playerID === userID;

  function handleUpdateScore(newScore) {
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_2__["updateScore"])(gameID, userID, number, newScore);
  }

  return __jsx("div", {
    className: "score__item p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, score || 0), isMine ? __jsx("div", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: () => handleUpdateScore(score + 1),
    className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "+"), __jsx("button", {
    onClick: () => handleUpdateScore(score - 1),
    className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "-")) : null);
}

function Game(props) {
  const {
    join_id,
    players,
    id: gameID
  } = props;
  return __jsx("div", {
    className: "pl-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-gray-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "#", join_id), __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "score__column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, ["", 15, 16, 17, 18, 19, 20, "bull"].map(value => {
    return __jsx("div", {
      className: "score__item pr-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 20
      }
    }, value);
  })), players.map(({
    id,
    name,
    score
  }) => {
    return __jsx("div", {
      className: "score__column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "score__item border-gray-200 p-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, name), Object.keys(score).map(number => {
      const scoreForNumber = score[number];
      return __jsx(ScoreRow, {
        key: number,
        number: number,
        score: scoreForNumber,
        playerID: id,
        gameID: gameID,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }
      });
    }));
  })));
}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./effects/user.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const GAME_ID = "game_id";
function useGetGame(gameID) {
  const userID = Object(_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  const [game, setGame] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    function onUpdate(value) {
      setGame(_objectSpread({}, value, {
        id: gameID
      }));
    }

    if (gameID && userID) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_1__["getGame"])(gameID, userID, onUpdate);
    }
  }, [gameID, userID]);
  return [game, error];
}
function useGetGameID() {
  const [game] = useGetGame(undefined);
  const gameID = game && game.id;
  return gameID;
}

/***/ }),

/***/ "./effects/user.ts":
/*!*************************!*\
  !*** ./effects/user.ts ***!
  \*************************/
/*! exports provided: useGetUser, useGetUserID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUser", function() { return useGetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetUserID", function() { return useGetUserID; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");




const USER_ID = "user_id";
function useGetUser() {
  const [userID, setUserID] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const userIDCookie = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(USER_ID);

    if (userIDCookie) {
      setUserID(userIDCookie);
    } else {
      const newID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(USER_ID, newID, {
        expires: 365
      });
      setUserID(newID);
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (userID) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_3__["getUser"])(userID).then(userFromDB => {
        setUser(userFromDB);
      }).catch(error => {
        setError(error);
      });
    }
  }, [userID]);

  if (error) {
    console.error(error);
  }

  return [user, error];
}
function useGetUserID() {
  const [user] = useGetUser();
  return user && user.id;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/game */ "./component/game.tsx");
/* harmony import */ var _effects_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../effects/game */ "./effects/game.ts");
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/firebase */ "./api/firebase.ts");
var _jsxFileName = "/Users/sean/Workspace/darts/pages/game/[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function GamePage(props) {
  const [name, setName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  const [game] = Object(_effects_game__WEBPACK_IMPORTED_MODULE_3__["useGetGame"])(id);
  const userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_4__["useGetUserID"])();
  const creatorID = game && game.creator_id;
  const players = game && game.players;
  const gameID = game && game.id;
  const isInGame = players && players.some(player => {
    return player.id === userID;
  });

  function handleJoinGame() {
    if (gameID && !isInGame && creatorID !== userID) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_5__["addPlayerToGame"])(gameID, userID, name);
    }
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, isInGame && __jsx(_component_game__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, game, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }
  })), !isInGame && __jsx("form", {
    onSubmit: handleJoinGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Enter your name"), __jsx("input", {
    autoComplete: "off",
    className: "block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "Big winner Stevey Jones",
    value: name,
    onChange: e => setName(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Join Game"))));
}

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/game/[id].tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sean/Workspace/darts/pages/game/[id].tsx */"./pages/game/[id].tsx");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map