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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");

var _jsxFileName = "/Users/sean/Workspace/darts/component/game.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // 2 person, closed + highest score
// 3 person, closed + lowest score

function Game(props) {
  var join_id = props.join_id,
      players = props.players,
      gameID = props.id,
      creator_id = props.creator_id,
      scoreEvents = props.score_events;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_3__["useGetUserID"])();
  var highestScore = 0;
  var score = players.reduce(function (scoreObject, player) {
    return _objectSpread({}, scoreObject, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, player.id, {
      20: 0,
      19: 0,
      15: 0,
      18: 0,
      17: 0,
      16: 0,
      25: 0,
      total: 0
    }));
  }, {});
  scoreEvents.forEach(function (scoreEvent) {
    var userID = scoreEvent.user_id,
        hitValue = scoreEvent.hit_value;

    if (score[userID][hitValue] && score[userID][hitValue] < 3) {
      score[userID][hitValue] += 1;
    }
  }); // const highestScore = players.reduce((acc, player) => {
  //   if (player.score.total > acc) {
  //     return player.score.total;
  //   } else {
  //     return acc;
  //   }
  // }, 0);
  // const lowestScore = players.reduce((acc, player) => {
  //   if (player.score.total < acc) {
  //     return player.score.total;
  //   } else {
  //     return acc;
  //   }
  // }, Infinity);
  // const creator = players.find(player => player.id === creator_id);
  // let hasWinner = false;
  // let winnerName;
  // for (var i = 0; i < players.length; i++) {
  //   const player = players[i];
  //   const scores = player.score;
  //   const total =
  //     scores[15] +
  //     scores[16] +
  //     scores[17] +
  //     scores[18] +
  //     scores[19] +
  //     scores[20] +
  //     scores["bull"];
  //   if (total === 21) {
  //     if (players.length > 2) {
  //       // Does player have the lowest score?
  //       const isLowest = players.some(player => {
  //         return player.score.total === lowestScore;
  //       });
  //       if (isLowest) {
  //         hasWinner = true;
  //         winnerName = player.name;
  //       }
  //     } else {
  //       // Does player have the highest score?
  //       const isHighest = players.some(player => {
  //         return player.score.total === highestScore;
  //       });
  //       if (isHighest) {
  //         hasWinner = true;
  //         winnerName = player.name;
  //       }
  //     }
  //   }
  // }
  //   <div className="mx-auto">
  //     <img src="/winner.png" className="w-full max-w-md md:mt-8 px-8" />
  //     <h1 className="chalk text-6xl px-8">Nice one {winnerName}!</h1>
  //     <div className="px-8">
  //       {creator && creator.id === userID ? (
  //         <button
  //           className="mt-4 md:mt-24 w-full md:w-auto text-2xl bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow"
  //           onClick={() => newGame(gameID)}
  //         >
  //           New Game
  //         </button>
  //       ) : (
  //         <div className="text-sm my-16">
  //           Waiting for the host to start the another game...
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // )

  return __jsx("div", {
    className: "flex-col overflow-x-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx(ScoreBoard, {
    score: score,
    gameID: gameID,
    players: players,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), __jsx("button", {
    className: "mt-24 mb-4 md:w-auto text-2xl bg-gray-800 hover:bg-teal-700 text-white py-2 px-4 text-xs rounded-lg shadow",
    onClick: function onClick() {
      return Object(_api_firebase__WEBPACK_IMPORTED_MODULE_4__["resetScore"])(gameID, userID);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Reset Score"));
}

function ScoreBoard(props) {
  var _this = this;

  var players = props.players,
      gameID = props.gameID,
      score = props.score;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_3__["useGetUserID"])();
  return __jsx("div", {
    className: "mt-4 md:mt-8 text-sm md:text-2xl bg-teal-800 rounded-lg chalk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "score__column flex flex-col justify-center align-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, ["", 20, 19, 18, 17, 16, 15, 25].map(function (value, index) {
    return __jsx("div", {
      key: value,
      className: "score__item h-16 ".concat(index === 0 ? "h-24" : "", " md:h-24 px-4 flex items-center justify-center"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
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
        lineNumber: 161,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("score__item h-24 md:h-24 w-24 text-center pt-2 ", {
        "bg-teal-700": isMine
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "text-lg md:text-md text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 19
      }
    }, player.name), __jsx("div", {
      className: "text-4xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
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
          lineNumber: 177,
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
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_3__["useGetUserID"])();
  var isMine = playerID === userID;

  function handleupdateGameScore() {
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_4__["updateGameScore"])(gameID, userID, number);
  }

  return __jsx("div", {
    className: "score__item h-16 md:h-24 flex items-stretch relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: !isMine,
    onClick: function onClick() {
      return handleupdateGameScore();
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("flex-1 flex align-center justify-center text-white ont-bold w-100", {
      "bg-teal-700 hover:bg-teal-500": isMine
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, score === 1 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 218,
      columnNumber: 13
    }
  })), score === 2 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 223,
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
      lineNumber: 224,
      columnNumber: 13
    }
  })), score > 2 && __jsx(SVG, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
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
      lineNumber: 230,
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
      lineNumber: 231,
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
      lineNumber: 241,
      columnNumber: 5
    }
  }, props.children);
}

/***/ })

})
//# sourceMappingURL=[id].js.d957655a8a6c63418e1f.hot-update.js.map