webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./api/firebase.ts":
/*!*************************!*\
  !*** ./api/firebase.ts ***!
  \*************************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");


var config = {
  apiKey: "AIzaSyDp01-0TwxRjNC05CuDcpauXRyLSMv0RRw",
  authDomain: "darts-yeslab.firebaseapp.com",
  databaseURL: "https://darts-yeslab.firebaseio.com",
  projectId: "darts-yeslab",
  storageBucket: "darts-yeslab.appspot.com",
  messagingSenderId: "426404952698",
  appId: "1:426404952698:web:738ac9ab1342a1177419c3",
  measurementId: "G-7DHLMBZXEN"
};

if (!firebase__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config);
  firebase__WEBPACK_IMPORTED_MODULE_0__["database"]();
} // DB types


function getUser(userId) {
  return firebase__WEBPACK_IMPORTED_MODULE_0__["database"]().ref("/users/" + userId).once("value").then(function (snapshot) {
    var user = snapshot.val();
    console.log("user", user);

    if (user) {
      return user;
    }

    return createUser(userId);
  });
}

function createUser(userId) {
  var user = {
    id: userId
  };
  console.log("create user for: ", userId);
  return firebase__WEBPACK_IMPORTED_MODULE_0__["database"]().ref("users/" + userId).set(user, function (error) {
    if (error) {
      throw new Error(error.message);
    }

    console.log("return");
    return {
      user: user,
      id: userId
    };
  });
} // const data = {
//   games: {
//     "one": {
//       creator: "user_id",
//       timestamp: 000,
//       code: "7yzh"
//     },
//     "two": {
//       creator: "user_id",
//       timestamp: 000,
//       code: "8n0a"
//     }
//   }
// }

/***/ })

})
//# sourceMappingURL=_app.js.b826e9d1d75341f628a6.hot-update.js.map