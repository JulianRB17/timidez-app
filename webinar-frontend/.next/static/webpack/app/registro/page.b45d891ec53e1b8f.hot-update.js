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

/***/ "(app-pages-browser)/./src/app/registro/components/form/Form.jsx":
/*!***************************************************!*\
  !*** ./src/app/registro/components/form/Form.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.css */ \"(app-pages-browser)/./src/app/registro/components/form/form.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Form() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (e)=>{\n        const { target } = e;\n        const { id, value } = target;\n        setForm({\n            ...form,\n            [id]: value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n    // setLoading(true);\n    // try {\n    //   const result = await emailjs.sendForm(\n    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,\n    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,\n    //     formRef.current,\n    //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY\n    //   );\n    //   setLoading(false);\n    //   if (result) {\n    //     setForm({\n    //       name: '',\n    //       email: '',\n    //       message: '',\n    //     });\n    //     alert('Thank you. I will get back to you as soon as possible.');\n    //   }\n    // } catch (error) {\n    //   setLoading(false);\n    //   console.error(error);\n    //   alert('Ahh, something went wrong. Please try again.');\n    // }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"\",\n                id: \"form\",\n                className: \"form__container\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"form__title\",\n                        children: \"Reg\\xedstrate GRATIS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form__input-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form__overlay\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"form__label\",\n                                children: [\n                                    \" \",\n                                    \"Nombre:\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form__input\",\n                                id: \"name\",\n                                placeholder: \"Escribe tu nombre aqu\\xed\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"form__error-msg\",\n                                children: \"Escribe tu nombre correctamente.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"form__label\",\n                                children: [\n                                    \" \",\n                                    \"Email:\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                className: \"form__input\",\n                                id: \"email\",\n                                placeholder: \"Coloca tu email para mandarte la invitaci\\xf3n\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"form__error-msg\",\n                                children: \"Escribe un email v\\xe1lido.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {\n                                type: \"submit\",\n                                className: \"form__btn\",\n                                whileHover: {\n                                    scale: 1.1\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: \"APARTA MI LUGAR\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"form__credits\",\n                children: \"Fotograf\\xeda: Carlos Alvar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"form__credits\",\n                children: \"Direcci\\xf3n esc\\xe9nica: Juli\\xe1n reyes Botello\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ignis\\\\Desktop\\\\cursos\\\\Reconcili\\xe1ndote con tu timidez\\\\app\\\\webinar-frontend\\\\src\\\\app\\\\registro\\\\components\\\\form\\\\Form.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"OqKIx8oxjGwHzYRdoWL84X0Jzy4=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVnaXN0cm8vY29tcG9uZW50cy9mb3JtL0Zvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ2I7QUFDbUI7QUFFeEIsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUMvQkssTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdEO1FBQ25CLE1BQU0sRUFBRUUsRUFBRSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Y7UUFDdEJSLFFBQVE7WUFDTixHQUFHRCxJQUFJO1lBQ1AsQ0FBQ1UsR0FBRyxFQUFFQztRQUNSO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlLE9BQU9KO1FBQzFCQSxFQUFFSyxjQUFjO0lBQ2hCLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRCxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLCtDQUErQztJQUMvQyxPQUFPO0lBQ1AsdUJBQXVCO0lBRXZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHVFQUF1RTtJQUN2RSxNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFFMUIsMkRBQTJEO0lBQzNELElBQUk7SUFDTjtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNmO2dCQUNDZ0IsUUFBTztnQkFDUE4sSUFBRztnQkFDSEssV0FBVTtnQkFDVkUsVUFBVUw7O2tDQUVWLDhEQUFDTTt3QkFBR0gsV0FBVTtrQ0FBYzs7Ozs7O2tDQUM1Qiw4REFBQ0k7d0JBQUlKLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBSUosV0FBVTs7Ozs7OzBDQUNmLDhEQUFDSztnQ0FBTUMsU0FBUTtnQ0FBT04sV0FBVTs7b0NBQzdCO29DQUFJO29DQUNHOzs7Ozs7OzBDQUVWLDhEQUFDTztnQ0FDQ0MsTUFBSztnQ0FDTFIsV0FBVTtnQ0FDVkwsSUFBRztnQ0FDSGMsYUFBWTtnQ0FDWkMsVUFBVWxCOzs7Ozs7MENBRVosOERBQUNtQjtnQ0FBRVgsV0FBVTswQ0FBa0I7Ozs7OzswQ0FDL0IsOERBQUNLO2dDQUFNQyxTQUFRO2dDQUFRTixXQUFVOztvQ0FDOUI7b0NBQUk7b0NBQ0U7Ozs7Ozs7MENBRVQsOERBQUNPO2dDQUNDQyxNQUFLO2dDQUNMUixXQUFVO2dDQUNWTCxJQUFHO2dDQUNIYyxhQUFZO2dDQUNaQyxVQUFVbEI7Ozs7OzswQ0FFWiw4REFBQ21CO2dDQUFFWCxXQUFVOzBDQUFrQjs7Ozs7OzBDQUMvQiw4REFBQ2pCLGlEQUFNQSxDQUFDNkIsTUFBTTtnQ0FDWkosTUFBSztnQ0FDTFIsV0FBVTtnQ0FDVmEsWUFBWTtvQ0FDVkMsT0FBTztnQ0FDVDtnQ0FDQUMsVUFBVTtvQ0FBRUQsT0FBTztnQ0FBSTswQ0FDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ0g7Z0JBQUVYLFdBQVU7MEJBQWdCOzs7Ozs7MEJBQzdCLDhEQUFDVztnQkFBRVgsV0FBVTswQkFBZ0I7Ozs7Ozs7Ozs7OztBQUduQztHQWhHd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlZ2lzdHJvL2NvbXBvbmVudHMvZm9ybS9Gb3JtLmpzeD8xZjU4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9mb3JtLmNzcyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xyXG4gICAgY29uc3QgeyBpZCwgdmFsdWUgfSA9IHRhcmdldDtcclxuICAgIHNldEZvcm0oe1xyXG4gICAgICAuLi5mb3JtLFxyXG4gICAgICBbaWRdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZW1haWxqcy5zZW5kRm9ybShcclxuICAgIC8vICAgICBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRU1BSUxKU19TRVJWSUNFX0lELFxyXG4gICAgLy8gICAgIHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FTUFJTEpTX1RFTVBMQVRFX0lELFxyXG4gICAgLy8gICAgIGZvcm1SZWYuY3VycmVudCxcclxuICAgIC8vICAgICBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRU1BSUxKU19QVUJMSUNfS0VZXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIC8vICAgaWYgKHJlc3VsdCkge1xyXG4gICAgLy8gICAgIHNldEZvcm0oe1xyXG4gICAgLy8gICAgICAgbmFtZTogJycsXHJcbiAgICAvLyAgICAgICBlbWFpbDogJycsXHJcbiAgICAvLyAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBhbGVydCgnVGhhbmsgeW91LiBJIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuJyk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHJcbiAgICAvLyAgIGFsZXJ0KCdBaGgsIHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgYWN0aW9uPVwiXCJcclxuICAgICAgICBpZD1cImZvcm1cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRhaW5lclwiXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb3JtX190aXRsZVwiPlJlZ8Otc3RyYXRlIEdSQVRJUzwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19pbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fb3ZlcmxheVwiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICBOb21icmU6eycgJ31cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19pbnB1dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBub21icmUgYXF1w61cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1fX2Vycm9yLW1zZ1wiPkVzY3JpYmUgdHUgbm9tYnJlIGNvcnJlY3RhbWVudGUuPC9wPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIEVtYWlsOnsnICd9XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2lucHV0XCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29sb2NhIHR1IGVtYWlsIHBhcmEgbWFuZGFydGUgbGEgaW52aXRhY2nDs25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1fX2Vycm9yLW1zZ1wiPkVzY3JpYmUgdW4gZW1haWwgdsOhbGlkby48L3A+XHJcbiAgICAgICAgICA8bW90aW9uLmJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fYnRuXCJcclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQVBBUlRBIE1JIExVR0FSXHJcbiAgICAgICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybV9fY3JlZGl0c1wiPkZvdG9ncmFmw61hOiBDYXJsb3MgQWx2YXI8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1fX2NyZWRpdHNcIj5EaXJlY2Npw7NuIGVzY8OpbmljYTogSnVsacOhbiByZXllcyBCb3RlbGxvPC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiRm9ybSIsImZvcm0iLCJzZXRGb3JtIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJvblN1Ym1pdCIsImgxIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInAiLCJidXR0b24iLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ3aGlsZVRhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/registro/components/form/Form.jsx\n"));

/***/ })

});