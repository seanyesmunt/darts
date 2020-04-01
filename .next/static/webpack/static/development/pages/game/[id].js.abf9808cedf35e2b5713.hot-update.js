webpackHotUpdate("static/development/pages/game/[id].js",{

/***/ "./component/game.tsx":
/*!****************************!*\
  !*** ./component/game.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
/* harmony import */ var _effects_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../effects/game */ "./effects/game.ts");




var _jsxFileName = "/Users/sean/Workspace/darts/component/game.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // 2 person, closed + highest score
// 3 person, closed + lowest score

function Game(props) {
  var join_id = props.join_id,
      players = props.players,
      gameID = props.id,
      creator_id = props.creator_id,
      _props$score_events = props.score_events,
      scoreEvents = _props$score_events === void 0 ? [] : _props$score_events;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_6__["useGetUserID"])(); // Initialize score object based on how many players there are

  var score = players.reduce(function (scoreObject, player) {
    return _objectSpread({}, scoreObject, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, player.id, {
      20: 0,
      19: 0,
      15: 0,
      18: 0,
      17: 0,
      16: 0,
      25: 0,
      total: 0
    }));
  }, {}); // For each `score_event`, update the score for everyone

  scoreEvents.forEach(function (scoreEvent) {
    if (!userID) {
      return;
    }

    var scoreEventUserID = scoreEvent.user_id,
        hitValue = scoreEvent.hit_value;
    var usersScoreForHitValue = score[scoreEventUserID][hitValue];

    if (usersScoreForHitValue < 3) {
      score[scoreEventUserID][hitValue] += 1;
    } else {
      // The user already closed that number out
      // If 2 player game, add it to their own score
      // Else, add it to the other players who haven't closed it yet's score
      if (players.length < 3) {
        players.forEach(function (player) {
          var wasMyHit = player.id === userID;

          if (wasMyHit) {
            score[userID] += hitValue;
          }
        });
      } else {
        // Add score to my score if players that don't have hitValue closed out
        players.forEach(function (player) {
          var isOtherPlayer = player.id !== scoreEventUserID;
          var playersScoreForHitValue = score[player.id][hitValue];

          if (isOtherPlayer && playersScoreForHitValue < 3) {
            score[userID].total += hitValue;
          }
        });
      }
    }
  });

  var _Object$values$reduce = Object.values(score).reduce(function (acc, score) {
    var _acc = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(acc, 2),
        currentHighest = _acc[0],
        currentLowest = _acc[1];

    var newHighest;
    var newLowest;

    if (score.total > currentHighest) {
      newHighest = score.total;
    }

    if (score.total < currentLowest) {
      newLowest = score.total;
    }

    return [newHighest !== undefined ? currentHighest : 0, newLowest !== undefined ? newLowest : currentLowest];
  }, [0, Infinity]),
      _Object$values$reduce2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$values$reduce, 2),
      highestScore = _Object$values$reduce2[0],
      lowestScore = _Object$values$reduce2[1];

  var creator = players.find(function (player) {
    return player.id === creator_id;
  });
  var hasWinner = false;
  var winnerName;
  Object.keys(score).forEach(function (userID) {
    var scoreForUserID = score[userID];
    var hasClosedOutBoard = scoreForUserID[15] === 3 && scoreForUserID[16] === 3 && scoreForUserID[17] === 3 && scoreForUserID[18] === 3 && scoreForUserID[19] === 3 && scoreForUserID[20] === 3 && scoreForUserID[25] === 3;

    if (hasClosedOutBoard) {
      if (players.length < 3) {
        var isHightest = scoreForUserID.total === highestScore;

        if (isHightest) {
          hasWinner = true;
          var player = players.find(function (player) {
            return player.id === userID;
          });
          winnerName = player.name;
        }
      } else {
        var isLowest = scoreForUserID.total === lowestScore;

        if (isLowest) {
          hasWinner = true;

          var _player = players.find(function (player) {
            return player.id === userID;
          });

          winnerName = _player.name;
        }
      }
    }
  });
  return hasWinner ? __jsx("div", {
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/winner.png",
    className: "w-full max-w-md md:mt-8 px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: "chalk text-6xl px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, "Nice one ", winnerName, "!"), __jsx("div", {
    className: "px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, creator && creator.id === userID ? __jsx("button", {
    className: "mt-4 md:mt-24 w-full md:w-auto text-2xl bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow",
    onClick: function onClick() {
      return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_7__["newGame"])(gameID);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, "New Game") : __jsx("div", {
    className: "text-sm my-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, "Waiting for the host to start the another game..."))) : __jsx("div", {
    className: "flex-col overflow-x-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx(ScoreBoard, {
    score: score,
    gameID: gameID,
    players: players,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }), __jsx("button", {
    className: "mt-24 mb-4 md:w-auto text-2xl bg-gray-800 hover:bg-teal-700 text-white py-2 px-4 text-xs rounded-lg shadow",
    onClick: function onClick() {
      return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_7__["gameReset"])(gameID, userID);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, "Reset Score"));
}

function ScoreBoard(props) {
  var _this = this;

  var players = props.players,
      gameID = props.gameID,
      score = props.score;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_6__["useGetUserID"])();

  var _useGetGame = Object(_effects_game__WEBPACK_IMPORTED_MODULE_8__["useGetGame"])(gameID),
      _useGetGame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useGetGame, 2),
      game = _useGetGame2[0],
      error = _useGetGame2[1];

  return __jsx("div", {
    className: "mt-4 md:mt-8 text-sm md:text-2xl bg-teal-800 rounded-lg chalk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "score__column flex flex-col justify-center align-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, ["", 20, 19, 18, 17, 16, 15, 25].map(function (value, index) {
    return __jsx("div", {
      key: value,
      className: "score__item h-16 ".concat(index === 0 ? "h-24" : "", " md:h-24 w-24 px-4 flex items-center justify-center"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 19
      }
    }, value === "" && game && game.score_events ? __jsx("button", {
      onClick: function onClick() {
        return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_7__["gameUndoLastMove"])(gameID);
      },
      className: "bg-teal-600 hover:bg-teal-500 rounded-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 23
      }
    }, __jsx(SVG, {
      stroke: "1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 25
      }
    }, __jsx("path", {
      stroke: "white",
      d: "M12 10h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5v2a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 12 8v2z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 27
      }
    }))) : value));
  })), Object.keys(score).map(function (userIDForScore) {
    var player = players.find(function (player) {
      return player.id === userIDForScore;
    });
    var userScore = score[userIDForScore];
    var isMine = userIDForScore === userID;
    return __jsx("div", {
      key: userIDForScore,
      className: "score__column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("score__item h-24 md:h-24 w-24 text-center pt-2 ", {
        "bg-teal-700": isMine
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "text-lg md:text-md text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 19
      }
    }, player.name), __jsx("div", {
      className: "text-4xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 19
      }
    }, userScore.total)), [20, 19, 18, 17, 16, 15, 25].map(function (number) {
      return __jsx(ScoreRow, {
        key: number,
        number: number,
        score: score[userIDForScore][number],
        playerID: userIDForScore,
        gameID: gameID,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }
      });
    }));
  }))));
}

function ScoreRow(props) {
  var number = props.number,
      score = props.score,
      gameID = props.gameID,
      playerID = props.playerID;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_6__["useGetUserID"])();
  var isMine = playerID === userID;

  function handleupdateGameScore() {
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_7__["updateGameScore"])(gameID, userID, number);
  }

  return __jsx("div", {
    className: "score__item h-16 md:h-24 flex items-stretch relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: !isMine,
    onClick: function onClick() {
      return handleupdateGameScore();
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("flex-1 flex align-center justify-center text-white ont-bold w-100", {
      "bg-teal-700 hover:bg-teal-500": isMine
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }
  }, score === 1 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 11
    }
  }, __jsx("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  })), score === 2 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, __jsx("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }), __jsx("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  })), score > 2 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, __jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }), __jsx("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }), __jsx("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 13
    }
  }))));
}

function SVG(props) {
  var children = props.children,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children"]);

  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: 48,
    height: 48,
    fill: "none",
    stroke: "white",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 5
    }
  }), children);
}

/***/ })

})
//# sourceMappingURL=[id].js.abf9808cedf35e2b5713.hot-update.js.map