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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");


var _jsxFileName = "/Users/sean/Workspace/darts/component/game.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // 2 person, closed + highest score
// 3 person, closed + lowest score

function Game(props) {
  var join_id = props.join_id,
      players = props.players,
      gameID = props.id,
      creator_id = props.creator_id,
      _props$score_events = props.score_events,
      scoreEvents = _props$score_events === void 0 ? [] : _props$score_events;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_4__["useGetUserID"])(); // Initialize score object based on how many players there are

  var score = players.reduce(function (scoreObject, player) {
    return _objectSpread({}, scoreObject, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, player.id, {
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
      if (players.length > 2) {
        // Add score to other players that don't have hitValue closed out
        players.forEach(function (player) {
          var wasMyHit = player.id === scoreEventUserID;

          if (wasMyHit) {
            score[player.id] += hitValue;
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
    var _acc = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc, 2),
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
      _Object$values$reduce2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$values$reduce, 2),
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
      lineNumber: 128,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/winner.png",
    className: "w-full max-w-md md:mt-8 px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: "chalk text-6xl px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "Nice one ", winnerName, "!"), __jsx("div", {
    className: "px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, creator && creator.id === userID ? __jsx("button", {
    className: "mt-4 md:mt-24 w-full md:w-auto text-2xl bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow",
    onClick: function onClick() {
      return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_5__["newGame"])(gameID);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "New Game") : __jsx("div", {
    className: "text-sm my-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Waiting for the host to start the another game..."))) : __jsx("div", {
    className: "flex-col overflow-x-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, __jsx(ScoreBoard, {
    score: score,
    gameID: gameID,
    players: players,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }), __jsx("button", {
    className: "mt-24 mb-4 md:w-auto text-2xl bg-gray-800 hover:bg-teal-700 text-white py-2 px-4 text-xs rounded-lg shadow",
    onClick: function onClick() {
      return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_5__["resetScore"])(gameID, userID);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, "Reset Score"));
}

function ScoreBoard(props) {
  var _this = this;

  var players = props.players,
      gameID = props.gameID,
      score = props.score;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_4__["useGetUserID"])();
  return __jsx("div", {
    className: "mt-4 md:mt-8 text-sm md:text-2xl bg-teal-800 rounded-lg chalk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "score__column flex flex-col justify-center align-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, ["", 20, 19, 18, 17, 16, 15, 25].map(function (value, index) {
    return __jsx("div", {
      key: value,
      className: "score__item h-16 ".concat(index === 0 ? "h-24" : "", " md:h-24 px-4 flex items-center justify-center"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 19
      }
    }, value));
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
        lineNumber: 187,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("score__item h-24 md:h-24 w-24 text-center pt-2 ", {
        "bg-teal-700": isMine
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "text-lg md:text-md text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 19
      }
    }, player.name), __jsx("div", {
      className: "text-4xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
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
          lineNumber: 203,
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
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_4__["useGetUserID"])();
  var isMine = playerID === userID;

  function handleupdateGameScore() {
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_5__["updateGameScore"])(gameID, userID, number);
  }

  return __jsx("div", {
    className: "score__item h-16 md:h-24 flex items-stretch relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: !isMine,
    onClick: function onClick() {
      return handleupdateGameScore();
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex-1 flex align-center justify-center text-white ont-bold w-100", {
      "bg-teal-700 hover:bg-teal-500": isMine
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, score === 1 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
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
      lineNumber: 244,
      columnNumber: 13
    }
  })), score === 2 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
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
      lineNumber: 249,
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
      lineNumber: 250,
      columnNumber: 13
    }
  })), score > 2 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 256,
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
      lineNumber: 257,
      columnNumber: 13
    }
  }))));
}

function SVG(props) {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: 48,
    height: 48,
    fill: "none",
    stroke: "white",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 5
    }
  }, props.children);
}

/***/ })

})
//# sourceMappingURL=[id].js.e50d3275f37e5d8b3dd2.hot-update.js.map