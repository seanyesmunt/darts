webpackHotUpdate("static/development/pages/join.js",{

/***/ "./pages/join.tsx":
/*!************************!*\
  !*** ./pages/join.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/page */ "./component/page.tsx");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/sean/Workspace/darts/pages/join.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Home(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      gameIDToJoin = _React$useState2[0],
      setGameIDToJoin = _React$useState2[1];

  function handleJoinGame(e) {
    e.preventDefault();
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_3__["getGameId"])(gameIDToJoin).then(function (gameId) {
      router.push("/game/".concat(gameId));
    })["catch"](console.error);
  }

  return __jsx(_component_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: " flex flex-1 items-center justify-center text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleJoinGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "text-gray-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "ID to join"), __jsx("input", {
    autoFocus: true,
    autoComplete: "off",
    className: "block shadow appearance-none border h-40 text-6xl rounded-lg py-2 px-3 text-gray-800 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline",
    type: "text",
    placeholder: "4b90",
    value: gameIDToJoin,
    onChange: function onChange(e) {
      return setGameIDToJoin(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "mr-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Join Game"), __jsx("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
    },
    className: "mr-4 bg-gray-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "Cancel"))))));
}

/***/ })

})
//# sourceMappingURL=join.js.5a5e1ed6235378cf1910.hot-update.js.map