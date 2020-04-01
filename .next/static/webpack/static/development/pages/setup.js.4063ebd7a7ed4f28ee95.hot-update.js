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
/* harmony import */ var _component_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/page */ "./component/page.tsx");
/* harmony import */ var _effects_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../effects/user */ "./effects/user.ts");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
var _jsxFileName = "/Users/sean/Workspace/darts/pages/setup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Genereate a game url and redirect

function Setup() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var userID = Object(_effects_user__WEBPACK_IMPORTED_MODULE_3__["useGetUserID"])();
  var query = router.query;
  var name = query.name;
  var nameIsString = typeof name === "string";
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (userID && name) {
      Object(_api_firebase__WEBPACK_IMPORTED_MODULE_4__["createGame"])(userID, name).then(function (game) {
        router.replace("/game/".concat(game.id));
      });
    }
  }, [userID, name]);
  return __jsx(_component_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  });
}

/***/ })

})
//# sourceMappingURL=setup.js.4063ebd7a7ed4f28ee95.hot-update.js.map