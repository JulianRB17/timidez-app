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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countdown: function() { return /* binding */ countdown; }\n/* harmony export */ });\nconst countdown = function(date, setCount) {\n    const countDownDate = new Date(date).getTime();\n    console.log(date);\n    const interval = setInterval(function() {\n        const now = new Date().getTime();\n        const distance = countDownDate - now;\n        const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n        const seconds = Math.floor(distance % (1000 * 60) / 1000);\n        if (distance > 0) setCount(days + \"d \" + hours + \"h \" + minutes + \"m \" + seconds + \"s \");\n        if (distance < 0) {\n            clearInterval(interval);\n            setCount(\"\");\n        }\n    }, 1000);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvdW50ZG93bi9Db3VudGRvd24uanN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxZQUFZLFNBQVVDLElBQUksRUFBRUMsUUFBUTtJQUMvQyxNQUFNQyxnQkFBZ0IsSUFBSUMsS0FBS0gsTUFBTUksT0FBTztJQUM1Q0MsUUFBUUMsR0FBRyxDQUFDTjtJQUNaLE1BQU1PLFdBQVdDLFlBQVk7UUFDM0IsTUFBTUMsTUFBTSxJQUFJTixPQUFPQyxPQUFPO1FBQzlCLE1BQU1NLFdBQVdSLGdCQUFnQk87UUFDakMsTUFBTUUsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSCxXQUFZLFFBQU8sS0FBSyxLQUFLLEVBQUM7UUFDdEQsTUFBTUksUUFBUUYsS0FBS0MsS0FBSyxDQUN0QixXQUFhLFFBQU8sS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssRUFBQztRQUVyRCxNQUFNRSxVQUFVSCxLQUFLQyxLQUFLLENBQUMsV0FBYSxRQUFPLEtBQUssRUFBQyxJQUFPLFFBQU8sRUFBQztRQUNwRSxNQUFNRyxVQUFVSixLQUFLQyxLQUFLLENBQUMsV0FBYSxRQUFPLEVBQUMsSUFBTTtRQUN0RCxJQUFJSCxXQUFXLEdBQ2JULFNBQVNVLE9BQU8sT0FBT0csUUFBUSxPQUFPQyxVQUFVLE9BQU9DLFVBQVU7UUFDbkUsSUFBSU4sV0FBVyxHQUFHO1lBQ2hCTyxjQUFjVjtZQUNkTixTQUFTO1FBQ1g7SUFDRixHQUFHO0FBQ0wsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb3VudGRvd24vQ291bnRkb3duLmpzeD81YzRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb3VudGRvd24gPSBmdW5jdGlvbiAoZGF0ZSwgc2V0Q291bnQpIHtcclxuICBjb25zdCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoZGF0ZSkuZ2V0VGltZSgpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGUpO1xyXG4gIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXHJcbiAgICAgIChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXHJcbiAgICApO1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgIGlmIChkaXN0YW5jZSA+IDApXHJcbiAgICAgIHNldENvdW50KGRheXMgKyAnZCAnICsgaG91cnMgKyAnaCAnICsgbWludXRlcyArICdtICcgKyBzZWNvbmRzICsgJ3MgJyk7XHJcbiAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICBzZXRDb3VudCgnJyk7XHJcbiAgICB9XHJcbiAgfSwgMTAwMCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjb3VudGRvd24iLCJkYXRlIiwic2V0Q291bnQiLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwibG9nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/countdown/Countdown.jsx\n"));

/***/ })

});