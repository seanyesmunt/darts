webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./effects/user.ts");






var GAME_ID = "game_id";
function useGetGame(gameIDFromUrl) {
  console.log("gameID", gameIDFromUrl);
  var userID = Object(_user__WEBPACK_IMPORTED_MODULE_5__["useGetUserID"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(gameIDFromUrl),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      gameID = _React$useState2[0],
      setgameID = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      game = _React$useState4[0],
      setGame = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (gameIDFromUrl) {
      setgameID(gameIDFromUrl);
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(GAME_ID, gameIDFromUrl, {
        expires: 365
      });
      setgameID(gameIDFromUrl);
    } else {
      var gameIDCookie = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(GAME_ID);

      if (gameIDCookie) {
        setgameID(gameIDCookie);
      } else {
        var newId = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(GAME_ID, newId, {
          expires: 365
        });
        setgameID(newId);
      }
    }
  }, [gameIDFromUrl]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (gameID && userID) {
      debugger;
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_4__["getGame"])(gameID, userID).then(function (gameFromDB) {
        setGame(gameFromDB);
      })["catch"](function (error) {
        setError(error);
      });
    }
  }, [gameID, userID]);
  return [game, error];
}
function useGetGameID() {
  var _useGetGame = useGetGame(undefined),
      _useGetGame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGetGame, 1),
      game = _useGetGame2[0];

  var gameID = game && game.id;
  return gameID;
}

/***/ })

})
//# sourceMappingURL=_app.js.dbc36fd8805f9f098401.hot-update.js.map