"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registro/page",{

/***/ "(app-pages-browser)/./src/components/countdown/Countdown.jsx":
/*!************************************************!*\
  !*** ./src/components/countdown/Countdown.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countdownFunction: function() { return /* binding */ countdownFunction; }\n/* harmony export */ });\nconst countdownFunction = function(date, setCountdown) {\n    const countDownDate = new Date(date).getTime();\n    const interval = setInterval(function() {\n        const now = new Date().getTime();\n        const distance = countDownDate - now;\n        const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n        const seconds = Math.floor(distance % (1000 * 60) / 1000);\n        setCountdown(days + \"d \" + hours + \"h \" + minutes + \"m \" + seconds + \"s \");\n        if (distance < 0) {\n            clearInterval(interval);\n            setCountdown(\"Cuenta terminada\");\n        }\n    }, 1000);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvdW50ZG93bi9Db3VudGRvd24uanN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxvQkFBb0IsU0FBVUMsSUFBSSxFQUFFQyxZQUFZO0lBQzNELE1BQU1DLGdCQUFnQixJQUFJQyxLQUFLSCxNQUFNSSxPQUFPO0lBQzVDLE1BQU1DLFdBQVdDLFlBQVk7UUFDM0IsTUFBTUMsTUFBTSxJQUFJSixPQUFPQyxPQUFPO1FBQzlCLE1BQU1JLFdBQVdOLGdCQUFnQks7UUFDakMsTUFBTUUsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSCxXQUFZLFFBQU8sS0FBSyxLQUFLLEVBQUM7UUFDdEQsTUFBTUksUUFBUUYsS0FBS0MsS0FBSyxDQUN0QixXQUFhLFFBQU8sS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssRUFBQztRQUVyRCxNQUFNRSxVQUFVSCxLQUFLQyxLQUFLLENBQUMsV0FBYSxRQUFPLEtBQUssRUFBQyxJQUFPLFFBQU8sRUFBQztRQUNwRSxNQUFNRyxVQUFVSixLQUFLQyxLQUFLLENBQUMsV0FBYSxRQUFPLEVBQUMsSUFBTTtRQUV0RFYsYUFBYVEsT0FBTyxPQUFPRyxRQUFRLE9BQU9DLFVBQVUsT0FBT0MsVUFBVTtRQUNyRSxJQUFJTixXQUFXLEdBQUc7WUFDaEJPLGNBQWNWO1lBQ2RKLGFBQWE7UUFDZjtJQUNGLEdBQUc7QUFDTCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvdW50ZG93bi9Db3VudGRvd24uanN4PzVjNGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvdW50ZG93bkZ1bmN0aW9uID0gZnVuY3Rpb24gKGRhdGUsIHNldENvdW50ZG93bikge1xyXG4gIGNvbnN0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcclxuICAgICAgKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcclxuICAgICk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgIHNldENvdW50ZG93bihkYXlzICsgJ2QgJyArIGhvdXJzICsgJ2ggJyArIG1pbnV0ZXMgKyAnbSAnICsgc2Vjb25kcyArICdzICcpO1xyXG4gICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgc2V0Q291bnRkb3duKCdDdWVudGEgdGVybWluYWRhJyk7XHJcbiAgICB9XHJcbiAgfSwgMTAwMCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjb3VudGRvd25GdW5jdGlvbiIsImRhdGUiLCJzZXRDb3VudGRvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibm93IiwiZGlzdGFuY2UiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/countdown/Countdown.jsx\n"));

/***/ })

});