"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./src/app/admin/page.jsx":
/*!********************************!*\
  !*** ./src/app/admin/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_email_Email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/email/Email */ \"(app-pages-browser)/./src/app/admin/components/email/Email.jsx\");\n/* harmony import */ var _components_numbers_Numbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/numbers/Numbers */ \"(app-pages-browser)/./src/app/admin/components/numbers/Numbers.jsx\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/auth */ \"(app-pages-browser)/./src/utils/auth.js\");\n/* harmony import */ var _components_btnLogout_BtnLogout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/btnLogout/BtnLogout */ \"(app-pages-browser)/./src/app/admin/components/btnLogout/BtnLogout.jsx\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.js\");\n/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/loader/Loader */ \"(app-pages-browser)/./src/components/loader/Loader.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Admin() {\n    _s();\n    // const [jwt, setJwt] = useState('');\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"jwt\");\n        (async function() {\n            console.log(loading);\n            try {\n                if (token) {\n                    const res = await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__.checkToken)(token);\n                    if (res) {\n                        // setJwt(token);\n                        await _utils_api__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getUserInfo(token);\n                        setLoading(false);\n                    } else {\n                        router.replace(\"/login\");\n                    }\n                } else {\n                    router.replace(\"/login\");\n                }\n            } catch (err) {\n                console.error(err);\n            }\n        })();\n    }, [\n        router\n    ]);\n    function handleLogout(e) {\n        e.preventDefault();\n        // setJwt('');\n        localStorage.removeItem(\"jwt\");\n        router.replace(\"/login\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"admin\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\admin\\\\page.jsx\",\n            lineNumber: 51,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_numbers_Numbers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    api: _utils_api__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\admin\\\\page.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_email_Email__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    api: _utils_api__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\admin\\\\page.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_btnLogout_BtnLogout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onClick: handleLogout\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\admin\\\\page.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\admin\\\\page.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Admin, \"2RAYJaWg9X31kr5hXvcE+jFgF28=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDQTtBQUNDO0FBQ007QUFDVDtBQUNlO0FBQzNCO0FBQ2tCO0FBRWpDLFNBQVNTOztJQUN0QixzQ0FBc0M7SUFDdEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1XLFNBQVNWLDBEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbEM7WUFDQ0MsUUFBUUMsR0FBRyxDQUFDUDtZQUNaLElBQUk7Z0JBQ0YsSUFBSUcsT0FBTztvQkFDVCxNQUFNSyxNQUFNLE1BQU1iLHVEQUFVQSxDQUFDUTtvQkFDN0IsSUFBSUssS0FBSzt3QkFDUCxpQkFBaUI7d0JBQ2pCLE1BQU1YLGtEQUFHQSxDQUFDWSxXQUFXLENBQUNOO3dCQUN0QkYsV0FBVztvQkFDYixPQUFPO3dCQUNMQyxPQUFPUSxPQUFPLENBQUM7b0JBQ2pCO2dCQUNGLE9BQU87b0JBQ0xSLE9BQU9RLE9BQU8sQ0FBQztnQkFDakI7WUFDRixFQUFFLE9BQU9DLEtBQUs7Z0JBQ1pMLFFBQVFNLEtBQUssQ0FBQ0Q7WUFDaEI7UUFDRjtJQUNGLEdBQUc7UUFBQ1Q7S0FBTztJQUVYLFNBQVNXLGFBQWFDLENBQUM7UUFDckJBLEVBQUVDLGNBQWM7UUFDaEIsY0FBYztRQUNkWCxhQUFhWSxVQUFVLENBQUM7UUFDeEJkLE9BQU9RLE9BQU8sQ0FBQztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDTztRQUFRQyxXQUFVO2tCQUNoQmxCLHdCQUNDLDhEQUFDRixpRUFBTUE7Ozs7aUNBRVA7OzhCQUNFLDhEQUFDSixtRUFBT0E7b0JBQUNHLEtBQUtBLGtEQUFHQTs7Ozs7OzhCQUNqQiw4REFBQ0osK0RBQUtBO29CQUFDSSxLQUFLQSxrREFBR0E7Ozs7Ozs4QkFDZiw4REFBQ0QsdUVBQVNBO29CQUFDdUIsU0FBU047Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0FqRHdCZDs7UUFJUFAsc0RBQVNBOzs7S0FKRk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hZG1pbi9wYWdlLmpzeD85YzU5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBFbWFpbCBmcm9tICcuL2NvbXBvbmVudHMvZW1haWwvRW1haWwnO1xyXG5pbXBvcnQgTnVtYmVycyBmcm9tICcuL2NvbXBvbmVudHMvbnVtYmVycy9OdW1iZXJzJztcclxuaW1wb3J0IHsgY2hlY2tUb2tlbiB9IGZyb20gJ0AvdXRpbHMvYXV0aCc7XHJcbmltcG9ydCBCdG5Mb2dvdXQgZnJvbSAnLi9jb21wb25lbnRzL2J0bkxvZ291dC9CdG5Mb2dvdXQnO1xyXG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcclxuICAvLyBjb25zdCBband0LCBzZXRKd3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xyXG4gICAgKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2cobG9hZGluZyk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGVja1Rva2VuKHRva2VuKTtcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gc2V0Snd0KHRva2VuKTtcclxuICAgICAgICAgICAgYXdhaXQgYXBpLmdldFVzZXJJbmZvKHRva2VuKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ291dChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBzZXRKd3QoJycpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2p3dCcpO1xyXG4gICAgcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFkbWluXCI+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE51bWJlcnMgYXBpPXthcGl9IC8+XHJcbiAgICAgICAgICA8RW1haWwgYXBpPXthcGl9IC8+XHJcbiAgICAgICAgICA8QnRuTG9nb3V0IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkVtYWlsIiwiTnVtYmVycyIsImNoZWNrVG9rZW4iLCJCdG5Mb2dvdXQiLCJhcGkiLCJMb2FkZXIiLCJBZG1pbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInJlcyIsImdldFVzZXJJbmZvIiwicmVwbGFjZSIsImVyciIsImVycm9yIiwiaGFuZGxlTG9nb3V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlSXRlbSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/page.jsx\n"));

/***/ })

});