webpackHotUpdate("static/development/pages/game/[id].js",{

/***/ "./pages/game/[id].tsx":
/*!*****************************!*\
  !*** ./pages/game/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamePage; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/game */ "./component/game.tsx");
/* harmony import */ var _component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/page */ "./component/page.tsx");
/* harmony import */ var _effects_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../effects/game */ "./effects/game.ts");
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/firebase */ "./api/firebase.ts");


var _jsxFileName = "/Users/sean/Workspace/darts/pages/game/[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function GamePage(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;

  var _useGetGame = Object(_effects_game__WEBPACK_IMPORTED_MODULE_6__["useGetGame"])(id),
      _useGetGame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGetGame, 1),
      game = _useGetGame2[0];

  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_7__["useGetUserID"])();
  var creatorID = game && game.creator_id;
  var players = game && game.players;
  var gameID = game && game.id;
  var isInGame = players && players.some(function (player) {
    return player.id === userID;
  });

  function handleJoinGame() {
    if (gameID && !isInGame && creatorID !== userID) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_8__["addPlayerToGame"])(gameID, userID, name);
    }
  }

  return __jsx(_component_page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "flex flex-1 items-center justify-center ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, isInGame && __jsx(_component_game__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, game, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 22
    }
  })), !isInGame && __jsx("form", {
    onSubmit: handleJoinGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Enter your name"), __jsx("input", {
    autoFocus: true,
    autoComplete: "off",
    className: "block shadow appearance-none border h-40 text-6xl rounded py-2 px-3 text-gray-800 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "Ricky Bobby",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "mr-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-800 hover:border-indigo-600 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Join Game")))));
}

/***/ })

})
//# sourceMappingURL=[id].js.43a61d0bc48a09749879.hot-update.js.map