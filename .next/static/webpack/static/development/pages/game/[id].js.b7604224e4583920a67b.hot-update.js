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


function Game(props) {
  var _this = this;

  var join_id = props.join_id,
      players = props.players;
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_1__["useGetUserID"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "ID: ", join_id), __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, ["", 15, 16, 17, 18, 19, 20, "bull"].map(function (value) {
    return __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 20
      }
    }, value);
  })), players.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        score = _ref.score;
    return __jsx("div", {
      key: id,
      className: "mr-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, name), __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, score[15] || 0), __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, score[16] || 0), __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, score[17] || 0), __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    }, score[18] || 0), __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, score[19] || 0), __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, score[20] || 0), __jsx("div", {
      className: "score__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, score["bull"] || 0));
  })));
}

/***/ })

})
//# sourceMappingURL=[id].js.b7604224e4583920a67b.hot-update.js.map