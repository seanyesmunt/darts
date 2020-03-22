webpackHotUpdate("static/development/pages/setup.js",{

/***/ "./pages/setup.tsx":
/*!*************************!*\
  !*** ./pages/setup.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Setup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");



 // Genereate a game url and redirect

function Setup() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_2__["useGetUserID"])();
  var push = router.push,
      query = router.query;
  var name = query.name;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (userID && name) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_3__["createGame"])(userID, name);
    }
  }, [userID, name]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (gameID) {
      push("/game/".concat(gameID));
    }
  }, [gameID, push]);
  return null;
}

/***/ })

})
//# sourceMappingURL=setup.js.391136a3ac83e4dc83a1.hot-update.js.map