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
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
var _jsxFileName = "/Users/sean/Workspace/darts/component/game.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ScoreRow(props) {
  var number = props.number,
      score = props.score,
      isMine = props.isMine;
  return __jsx("div", {
    className: "score__item p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, score || 0), isMine ? __jsx("div", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return handleUpdateScore();
    },
    className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "+"), "onClick=", function () {
    return handleUpdateScore();
  }, " ", __jsx("button", {
    className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "-")) : null);
}

function Game(props) {
  var _this = this;

  var join_id = props.join_id,
      players = props.players;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_1__["useGetUserID"])();
  return __jsx("div", {
    className: "pl-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-gray-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "#", join_id), __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "score__column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, ["", 15, 16, 17, 18, 19, 20, "bull"].map(function (value) {
    return __jsx("div", {
      className: "score__item pr-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 20
      }
    }, value);
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
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "score__item border-gray-200 p-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, name), Object.keys(score).map(function (number) {
      var scoreForNumber = score[number];
      return __jsx(ScoreRow, {
        key: number,
        number: number,
        score: scoreForNumber,
        isMine: isMine,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 19
        }
      });
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=[id].js.9627f20818114524ec7a.hot-update.js.map