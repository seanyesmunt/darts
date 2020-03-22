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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./effects/user.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var GAME_ID = "game_id";
function useGetGame(gameIDFromUrl, options) {
  var userID = Object(_user__WEBPACK_IMPORTED_MODULE_6__["useGetUserID"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(gameIDFromUrl),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      gameID = _React$useState2[0],
      setgameID = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      game = _React$useState4[0],
      setGame = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (gameIDFromUrl) {
      setgameID(gameIDFromUrl);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set(GAME_ID, gameIDFromUrl, {
        expires: 365
      });
      setgameID(gameIDFromUrl);
    } else {
      var gameIDCookie = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get(GAME_ID);

      if (gameIDCookie) {
        setgameID(gameIDCookie);
      } else {
        var newId = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set(GAME_ID, newId, {
          expires: 365
        });
        setgameID(newId);
      }
    }
  }, [gameIDFromUrl]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    function onUpdate(value) {
      setGame(_objectSpread({}, value, {
        id: gameID
      }));
    }

    if (gameID && userID) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_5__["getGame"])(gameID, userID, options, onUpdate);
    }
  }, [gameID, userID]);
  return [game, error];
}
function useGetGameID(_ref) {
  var options = _ref.options;

  var _useGetGame = useGetGame(undefined, options),
      _useGetGame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGetGame, 1),
      game = _useGetGame2[0];

  var gameID = game && game.id;
  return gameID;
}

/***/ })

})
//# sourceMappingURL=_app.js.ac33e2dfc382dc0642ce.hot-update.js.map