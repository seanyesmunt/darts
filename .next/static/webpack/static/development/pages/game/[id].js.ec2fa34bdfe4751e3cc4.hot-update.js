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
      gameID = props.id;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  var highestScore = players.reduce(function (acc, player) {
    if (player.score.total > acc) {
      return player.score.total;
    } else {
      return acc;
    }
  }, [0]);
  console.log("highest", highestScore);

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var scores = player.score;
    var total = scores[15] + scores[16] + scores[17] + scores[18] + scores[19] + scores[20] + scores["bull"];

    if (total === 21) {
      // Check scores, 2 v 3 players
      if (players.length > 2) {} else {
        // Does player have the highest score?
        var isHighest = players.some(function (player) {
          return player.score.total === highestScore;
        });
        console.log("isHigh", isHighest);

        if (isHighest) {
          alert("winner!");
        }
      }
    }
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(ScoreBoard, {
    players: players,
    gameID: gameID,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
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
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "chalkboard mt-10 bg-teal-700 mx-2 chalk text-white border-b-8 shadow-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "score__column flex flex-col justify-center align-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, ["", 20, 19, 18, 17, 16, 15, "bull"].map(function (value) {
    return __jsx("div", {
      key: value,
      className: "score__item px-2 flex items-center justify-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
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
        lineNumber: 85,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("score__item text-center border-gray-400 p-5", {
        "bg-teal-600": isMine
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }, name), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
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
          lineNumber: 99,
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
      lineNumber: 113,
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
      lineNumber: 133,
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
      lineNumber: 134,
      columnNumber: 7
    }
  }, score === 0 ? "" : score));
}

/***/ })

})
//# sourceMappingURL=[id].js.ec2fa34bdfe4751e3cc4.hot-update.js.map