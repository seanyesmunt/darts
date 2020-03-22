webpackHotUpdate("static/development/pages/game/[id].js",{

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
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../effects/user */ "./effects/user.ts");

var _jsxFileName = "/Users/sean/Workspace/darts/pages/game/[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Game(props) {
  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useGetGame = Object(_effects_game__WEBPACK_IMPORTED_MODULE_3__["useGetGame"])(id),
      _useGetGame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGetGame, 1),
      game = _useGetGame2[0];

  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_4__["useGetUserID"])();
  var creatorID = game && game.creator_id;
  var players = game && game.players;
  var gameID = game && game.id;
  var isInGame = players && players.some(function (player) {
    return player.id === userID;
  }); // React.useEffect(() => {
  //   if (gameID && !amIncludedInListOfPlayers && creatorID !== userID) {
  //     // addPlayerToGame(gameID, userID);
  //   }
  // }, [amIncludedInListOfPlayers, creatorID, userID, gameID]);

  function setGameIDToJoin() {}

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, isInGame && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "ID: ", game.join_id), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Players"), __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, players.map(function (player) {
    return __jsx("li", {
      key: player.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, player.id);
  }))), !isInGame && __jsx("form", {
    onSubmit: handleJoinGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "ID to join"), __jsx("input", {
    autoComplete: "off",
    className: "block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "Big winner Stevey Jones",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
    onClick: handleJoinGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Join Game"))));
}

/***/ })

})
//# sourceMappingURL=[id].js.48518f6301b3d8cd0543.hot-update.js.map