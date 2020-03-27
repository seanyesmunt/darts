webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/page */ "./component/page.tsx");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/sean/Workspace/darts/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Home(props) {
  var game = props.game;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isJoiningGame = _React$useState2[0],
      setIsJoiningGame = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      isCreatingGame = _React$useState4[0],
      setIsCreatingGame = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      name = _React$useState6[0],
      setName = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      gameIDToJoin = _React$useState8[0],
      setGameIDToJoin = _React$useState8[1];

  function handleJoinGame(e) {
    e.preventDefault();
    Object(_api_firebase__WEBPACK_IMPORTED_MODULE_4__["getGameId"])(gameIDToJoin).then(function (gameId) {
      router.push("/game/".concat(gameId));
    })["catch"](console.error);
  }

  function handleCreateGame(e) {
    e.preventDefault();
    router.push("/setup?name=".concat(name));
  }

  return __jsx(_component_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: " flex flex-1 items-center justify-center text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, !isJoiningGame && !isCreatingGame && __jsx("div", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "chalk font-bold text-6xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "darts.now.sh"), __jsx("div", {
    className: "flex mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setIsCreatingGame(true);
    },
    className: "mr-5 bg-white hover:bg-gray-200 text-xl text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Start A Game")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/join",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setIsJoiningGame(true);
    },
    className: "bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-2 px-4 border-b-4 border-orange-600 hover:border-orange-700 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Join Someones Game")))), isJoiningGame && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("form", {
    onSubmit: handleJoinGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-gray-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "ID to join"), __jsx("input", {
    autoFocus: true,
    autoComplete: "off",
    className: "block shadow appearance-none border h-40 text-6xl rounded py-2 px-3 text-gray-800 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline",
    type: "text",
    placeholder: "4b90",
    value: gameIDToJoin,
    onChange: function onChange(e) {
      return setGameIDToJoin(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("button", {
    type: "submit",
    className: "mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Join Game"), __jsx("button", {
    onClick: function onClick() {
      return setIsJoiningGame(false);
    },
    className: "mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Cancel")))), isCreatingGame && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("form", {
    onSubmit: handleCreateGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "Your Name"), __jsx("input", {
    autoComplete: "off",
    autoFocus: true,
    className: "block shadow appearance-none border h-40 text-6xl rounded py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "text",
    placeholder: "Kenny Powers",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "flex mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("button", {
    type: "submit",
    className: "mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "Create Game"), __jsx("button", {
    onClick: function onClick() {
      return setIsCreatingGame(false);
    },
    className: "mr-5 bg-white hover:bg-gray-200 text-blue-900 font-bold py-2 px-4 border-b-4 border-gray-300 hover:border-gray-400 rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "Cancel"))))));
}

/***/ })

})
//# sourceMappingURL=index.js.ae6bae5058aeb04d993f.hot-update.js.map