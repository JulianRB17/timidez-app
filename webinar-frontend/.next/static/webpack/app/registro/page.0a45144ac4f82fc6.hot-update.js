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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countdown: function() { return /* binding */ countdown; }\n/* harmony export */ });\nconst countdown = function(date, setCount) {\n    const countDownDate = new Date(date).getTime();\n    const interval = setInterval(function() {\n        const now = new Date().getTime();\n        const distance = countDownDate - now;\n        const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n        const seconds = Math.floor(distance % (1000 * 60) / 1000);\n        if (distance > 0) setCount(days + \"d \" + hours + \"h \" + minutes + \"m \" + seconds + \"s \");\n        if (distance < 0) {\n            clearInterval(interval);\n            setCount(\"\");\n        }\n    }, 1000);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvdW50ZG93bi9Db3VudGRvd24uanN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxZQUFZLFNBQVVDLElBQUksRUFBRUMsUUFBUTtJQUMvQyxNQUFNQyxnQkFBZ0IsSUFBSUMsS0FBS0gsTUFBTUksT0FBTztJQUM1QyxNQUFNQyxXQUFXQyxZQUFZO1FBQzNCLE1BQU1DLE1BQU0sSUFBSUosT0FBT0MsT0FBTztRQUM5QixNQUFNSSxXQUFXTixnQkFBZ0JLO1FBQ2pDLE1BQU1FLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0gsV0FBWSxRQUFPLEtBQUssS0FBSyxFQUFDO1FBQ3RELE1BQU1JLFFBQVFGLEtBQUtDLEtBQUssQ0FDdEIsV0FBYSxRQUFPLEtBQUssS0FBSyxFQUFDLElBQU8sUUFBTyxLQUFLLEVBQUM7UUFFckQsTUFBTUUsVUFBVUgsS0FBS0MsS0FBSyxDQUFDLFdBQWEsUUFBTyxLQUFLLEVBQUMsSUFBTyxRQUFPLEVBQUM7UUFDcEUsTUFBTUcsVUFBVUosS0FBS0MsS0FBSyxDQUFDLFdBQWEsUUFBTyxFQUFDLElBQU07UUFDdEQsSUFBSUgsV0FBVyxHQUNiUCxTQUFTUSxPQUFPLE9BQU9HLFFBQVEsT0FBT0MsVUFBVSxPQUFPQyxVQUFVO1FBQ25FLElBQUlOLFdBQVcsR0FBRztZQUNoQk8sY0FBY1Y7WUFDZEosU0FBUztRQUNYO0lBQ0YsR0FBRztBQUNMLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY291bnRkb3duL0NvdW50ZG93bi5qc3g/NWM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY291bnRkb3duID0gZnVuY3Rpb24gKGRhdGUsIHNldENvdW50KSB7XHJcbiAgY29uc3QgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKTtcclxuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxyXG4gICAgICAoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICBpZiAoZGlzdGFuY2UgPiAwKVxyXG4gICAgICBzZXRDb3VudChkYXlzICsgJ2QgJyArIGhvdXJzICsgJ2ggJyArIG1pbnV0ZXMgKyAnbSAnICsgc2Vjb25kcyArICdzICcpO1xyXG4gICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgc2V0Q291bnQoJycpO1xyXG4gICAgfVxyXG4gIH0sIDEwMDApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY291bnRkb3duIiwiZGF0ZSIsInNldENvdW50IiwiY291bnREb3duRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/countdown/Countdown.jsx\n"));

/***/ })

});