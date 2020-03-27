webpackHotUpdate("static/development/pages/new.js",{

/***/ "./pages/new.tsx":
/*!***********************!*\
  !*** ./pages/new.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewGame; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/page */ "./component/page.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/sean/Workspace/darts/pages/new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NewGame(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  function handleCreateGame(e) {
    e.preventDefault();

    if (name) {
      router.push("/setup?name=".concat(name));
    }
  }

  return __jsx(_component_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: " flex flex-1 items-center justify-center text-white  p-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleCreateGame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Your Name"), __jsx("input", {
    autoComplete: "off",
    autoFocus: true,
    className: "block w-full shadow appearance-none border h-24 md:h-40 text-4xl rounded py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline",
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
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-col md:flex-row mt-10 pb-24 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "mr-4 w-full md:w-auto text-4xl bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Create Game"), __jsx("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
    },
    className: "mt-4 md:mt-0 w-full md:w-auto text-4xl bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "Cancel"))))));
}

/***/ })

})
//# sourceMappingURL=new.js.1fa4f8500efded062cea.hot-update.js.map