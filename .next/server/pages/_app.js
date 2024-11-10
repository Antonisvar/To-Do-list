/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_client__WEBPACK_IMPORTED_MODULE_2__, _utils_trpc__WEBPACK_IMPORTED_MODULE_3__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_client__WEBPACK_IMPORTED_MODULE_2__, _utils_trpc__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    // Initialize the QueryClient\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient());\n    // Initialize the TRPC Client\n    const [trpcClient] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(()=>_utils_trpc__WEBPACK_IMPORTED_MODULE_3__.trpc.createClient({\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_2__.httpBatchLink)({\n                    url: 'http://localhost:3000/api/trpc',\n                    async headers () {\n                        return {\n                        };\n                    }\n                })\n            ]\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.Hydrate, {\n            state: pageProps.dehydratedState,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_trpc__WEBPACK_IMPORTED_MODULE_3__.trpc.Provider, {\n                client: trpcClient,\n                queryClient: queryClient,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDa0Y7QUFDckM7QUFDUjtBQUNHO0FBQ1Q7QUFFL0IsTUFBTU8sUUFBUSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzdDLDZCQUE2QjtJQUM3QixNQUFNLENBQUNDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsSUFBTSxJQUFJTiw4REFBV0E7SUFFcEQsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQ1csV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUMxQkYsNkNBQUlBLENBQUNRLFlBQVksQ0FBQztZQUNkQyxPQUFPO2dCQUNIViwyREFBYUEsQ0FBQztvQkFDVlcsS0FBSztvQkFDTCxNQUFNQzt3QkFDRixPQUFPO3dCQUVQO29CQUNKO2dCQUNKO2FBQ0g7UUFDTDtJQUdKLHFCQUNJLDhEQUFDZCxzRUFBbUJBO1FBQUNlLFFBQVFOO2tCQUN6Qiw0RUFBQ1IsMERBQU9BO1lBQUNlLE9BQU9SLFVBQVVTLGVBQWU7c0JBQ3JDLDRFQUFDZCw2Q0FBSUEsQ0FBQ2UsUUFBUTtnQkFBQ0gsUUFBUUw7Z0JBQVlELGFBQWFBOztrQ0FDNUMsOERBQUNGO3dCQUFXLEdBQUdDLFNBQVM7Ozs7OztvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQ7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgSHlkcmF0ZSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCB7IGh0dHBCYXRjaExpbmsgfSBmcm9tICdAdHJwYy9jbGllbnQnO1xyXG5pbXBvcnQgeyB0cnBjIH0gZnJvbSAnLi4vdXRpbHMvdHJwYyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgUXVlcnlDbGllbnRcclxuICAgIGNvbnN0IFtxdWVyeUNsaWVudF0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgUXVlcnlDbGllbnQoKSk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgVFJQQyBDbGllbnRcclxuICAgIGNvbnN0IFt0cnBjQ2xpZW50XSA9IHVzZVN0YXRlKCgpID0+XHJcbiAgICAgICAgdHJwYy5jcmVhdGVDbGllbnQoe1xyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgaHR0cEJhdGNoTGluayh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90cnBjJyxcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyBoZWFkZXJzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhZGQgYW55IGhlYWRlcnMgaGVyZSBpZiBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgPHRycGMuUHJvdmlkZXIgY2xpZW50PXt0cnBjQ2xpZW50fSBxdWVyeUNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4gey8qIFJlbmRlciB0aGUgY3VycmVudCBwYWdlIGNvbXBvbmVudCAqL31cclxuICAgICAgICAgICAgICAgIDwvdHJwYy5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9IeWRyYXRlPlxyXG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIkh5ZHJhdGUiLCJodHRwQmF0Y2hMaW5rIiwidHJwYyIsIlJlYWN0IiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInF1ZXJ5Q2xpZW50IiwidHJwY0NsaWVudCIsImNyZWF0ZUNsaWVudCIsImxpbmtzIiwidXJsIiwiaGVhZGVycyIsImNsaWVudCIsInN0YXRlIiwiZGVoeWRyYXRlZFN0YXRlIiwiUHJvdmlkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trpc: () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/react-query */ \"@trpc/react-query\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_react_query__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst trpc = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_0__.createTRPCReact)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRDtBQUc3QyxNQUFNQyxPQUFPRCxrRUFBZUEsR0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy90cnBjLnRzPzExYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVFJQQ1JlYWN0IH0gZnJvbSAnQHRycGMvcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFJvdXRlciB9IGZyb20gJy4uL3NlcnZlci9yb3V0ZXJzL3Rhc2tSb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRycGMgPSBjcmVhdGVUUlBDUmVhY3Q8QXBwUm91dGVyPigpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlVFJQQ1JlYWN0IiwidHJwYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/react-query":
/*!************************************!*\
  !*** external "@trpc/react-query" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();