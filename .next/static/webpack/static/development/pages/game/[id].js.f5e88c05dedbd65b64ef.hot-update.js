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





function ScoreRow(props) {
  var number = props.number,
      score = props.score,
      gameID = props.gameID,
      playerID = props.playerID;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  var isMine = playerID === userID;

  function handleUpdateScore(newScore) {
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_3__["updateScore"])(gameID, userID, number, newScore % 4);
  }

  return __jsx("div", {
    className: "score__item flex items-stretch relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return handleUpdateScore(score + 1);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex-1 text-white ont-bold w-100", {
      "bg-teal-600 hover:bg-teal-500": isMine
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, score === 0 ? "" : score));
}

function Game(props) {
  var _this = this;

  var join_id = props.join_id,
      players = props.players,
      gameID = props.id;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  return __jsx("div", {
    className: "mt-10 bg-teal-700 mx-2 chalk text-white rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "score__column flex flex-col justify-center align-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, ["", 15, 16, 17, 18, 19, 20, "bull"].map(function (value) {
    return __jsx("div", {
      className: "score__item px-2 flex items-center justify-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, value));
  })), players.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        score = _ref.score;
    var isMine = id === userID;
    return __jsx("div", {
      className: "score__column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("score__item text-center border-gray-400 p-5", {
        "bg-teal-600": isMine
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, name), Object.keys(score).map(function (number) {
      var scoreForNumber = score[number];
      return __jsx(ScoreRow, {
        key: number,
        number: number,
        score: scoreForNumber,
        playerID: id,
        gameID: gameID,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }
      });
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=[id].js.f5e88c05dedbd65b64ef.hot-update.js.map