"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TaskList.tsx":
/*!*************************************!*\
  !*** ./src/components/TaskList.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskItem */ \"./src/components/TaskItem.tsx\");\n/* harmony import */ var _barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Form,ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=Button,Form,ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/store/taskStore */ \"./src/pages/store/taskStore.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TaskList = ()=>{\n    _s();\n    const { data: fetchedTasks, isLoading } = _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.task.getAll.useQuery(); // Fetch tasks from the server\n    const { tasks, setTasks } = (0,_pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__.useTaskStore)(); // Zustand store\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [searchedTasks, setSearchedTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Load tasks into Zustand store on first load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (fetchedTasks) {\n            setTasks(fetchedTasks);\n        }\n    }, [\n        fetchedTasks,\n        setTasks\n    ]);\n    const handleSearch = (e)=>{\n        e.preventDefault();\n        const foundTasks = tasks.filter((task)=>task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()));\n        setSearchedTasks(foundTasks);\n    };\n    const handleClear = ()=>{\n        setSearchTerm('');\n        setSearchedTasks([]);\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n        lineNumber: 36,\n        columnNumber: 27\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"mb-3\",\n                children: \"Search Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                onSubmit: handleSearch,\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {\n                        type: \"text\",\n                        placeholder: \"Search tasks by title or description\",\n                        value: searchTerm,\n                        onChange: (e)=>setSearchTerm(e.target.value),\n                        className: \"mb-3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                variant: \"primary\",\n                                type: \"submit\",\n                                className: \"me-2\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                variant: \"secondary\",\n                                type: \"button\",\n                                onClick: handleClear,\n                                children: \"Clear\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ListGroup, {\n                children: [\n                    searchedTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ListGroup.Item, {\n                            variant: \"info\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                task: task\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, undefined)\n                        }, task.id, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, undefined)),\n                    tasks.filter((task)=>!searchedTasks.some((searchedTask)=>searchedTask.id === task.id)).map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ListGroup.Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                task: task\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 29\n                            }, undefined)\n                        }, task.id, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskList.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TaskList, \"v5HME8TfozJNnQUtsHAuCmSXcuM=\", false, function() {\n    return [\n        _pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__.useTaskStore\n    ];\n});\n_c = TaskList;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);\nvar _c;\n$RefreshReg$(_c, \"TaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDUDtBQUNIO0FBQ3dCO0FBQ0Y7QUFHeEQsTUFBTVEsV0FBVzs7SUFDYixNQUFNLEVBQUVDLE1BQU1DLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQUdULDZDQUFJQSxDQUFDVSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxJQUFJLDhCQUE4QjtJQUNyRyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdULG9FQUFZQSxJQUFJLGdCQUFnQjtJQUM1RCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ21CLGVBQWVDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQVMsRUFBRTtJQUU3RCw4Q0FBOEM7SUFDOUNDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVMsY0FBYztZQUNkTSxTQUFTTjtRQUNiO0lBQ0osR0FBRztRQUFDQTtRQUFjTTtLQUFTO0lBRTNCLE1BQU1LLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsYUFBYVQsTUFBTVUsTUFBTSxDQUMzQixDQUFDYixPQUNHQSxLQUFLYyxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWCxXQUFXVSxXQUFXLE9BQ3ZEZixLQUFLaUIsV0FBVyxJQUFJakIsS0FBS2lCLFdBQVcsQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNYLFdBQVdVLFdBQVc7UUFFM0ZQLGlCQUFpQkk7SUFDckI7SUFFQSxNQUFNTSxjQUFjO1FBQ2hCWixjQUFjO1FBQ2RFLGlCQUFpQixFQUFFO0lBQ3ZCO0lBRUEsSUFBSVQsV0FBVyxxQkFBTyw4REFBQ29CO2tCQUFJOzs7Ozs7SUFFM0IscUJBQ0ksOERBQUNBOzswQkFDRyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQU87Ozs7OzswQkFDckIsOERBQUM1Qiw4RkFBSUE7Z0JBQUM2QixVQUFVYjtnQkFBY1ksV0FBVTs7a0NBQ3BDLDhEQUFDNUIsOEZBQUlBLENBQUM4QixPQUFPO3dCQUNUQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPckI7d0JBQ1BzQixVQUFVLENBQUNqQixJQUFNSixjQUFjSSxFQUFFa0IsTUFBTSxDQUFDRixLQUFLO3dCQUM3Q0wsV0FBVTs7Ozs7O2tDQUVkLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUMzQixnR0FBTUE7Z0NBQUNtQyxTQUFRO2dDQUFVTCxNQUFLO2dDQUFTSCxXQUFVOzBDQUFPOzs7Ozs7MENBR3pELDhEQUFDM0IsZ0dBQU1BO2dDQUFDbUMsU0FBUTtnQ0FBWUwsTUFBSztnQ0FBU00sU0FBU1o7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNeEUsOERBQUMxQixtR0FBU0E7O29CQUVMZSxjQUFjd0IsR0FBRyxDQUFDLENBQUMvQixxQkFDaEIsOERBQUNSLG1HQUFTQSxDQUFDd0MsSUFBSTs0QkFBZUgsU0FBUTtzQ0FDbEMsNEVBQUN0QyxpREFBUUE7Z0NBQUNTLE1BQU1BOzs7Ozs7MkJBRENBLEtBQUtpQyxFQUFFOzs7OztvQkFNL0I5QixNQUNJVSxNQUFNLENBQUMsQ0FBQ2IsT0FBUyxDQUFDTyxjQUFjMkIsSUFBSSxDQUFDLENBQUNDLGVBQWlCQSxhQUFhRixFQUFFLEtBQUtqQyxLQUFLaUMsRUFBRSxHQUNsRkYsR0FBRyxDQUFDLENBQUMvQixxQkFDRiw4REFBQ1IsbUdBQVNBLENBQUN3QyxJQUFJO3NDQUNYLDRFQUFDekMsaURBQVFBO2dDQUFDUyxNQUFNQTs7Ozs7OzJCQURDQSxLQUFLaUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEQ7R0F0RU1yQzs7UUFFMEJELGdFQUFZQTs7O0tBRnRDQztBQXdFTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0LnRzeD82ZjY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRycGMgfSBmcm9tICcuLi91dGlscy90cnBjJztcclxuaW1wb3J0IFRhc2tJdGVtIGZyb20gJy4vVGFza0l0ZW0nO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAsIEZvcm0sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVRhc2tTdG9yZSB9IGZyb20gJy4uL3BhZ2VzL3N0b3JlL3Rhc2tTdG9yZSc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9wYWdlcy9zdG9yZS90YXNrU3RvcmUnO1xyXG5cclxuY29uc3QgVGFza0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZldGNoZWRUYXNrcywgaXNMb2FkaW5nIH0gPSB0cnBjLnRhc2suZ2V0QWxsLnVzZVF1ZXJ5KCk7IC8vIEZldGNoIHRhc2tzIGZyb20gdGhlIHNlcnZlclxyXG4gICAgY29uc3QgeyB0YXNrcywgc2V0VGFza3MgfSA9IHVzZVRhc2tTdG9yZSgpOyAvLyBadXN0YW5kIHN0b3JlXHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VhcmNoZWRUYXNrcywgc2V0U2VhcmNoZWRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10+KFtdKTtcclxuXHJcbiAgICAvLyBMb2FkIHRhc2tzIGludG8gWnVzdGFuZCBzdG9yZSBvbiBmaXJzdCBsb2FkXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmZXRjaGVkVGFza3MpIHtcclxuICAgICAgICAgICAgc2V0VGFza3MoZmV0Y2hlZFRhc2tzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmV0Y2hlZFRhc2tzLCBzZXRUYXNrc10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZm91bmRUYXNrcyA9IHRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgKHRhc2spID0+XHJcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRhc2suZGVzY3JpcHRpb24gJiYgdGFzay5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRTZWFyY2hlZFRhc2tzKGZvdW5kVGFza3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKCcnKTtcclxuICAgICAgICBzZXRTZWFyY2hlZFRhc2tzKFtdKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zXCI+U2VhcmNoIFRhc2s8L2gzPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofSBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHRhc2tzIGJ5IHRpdGxlIG9yIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtZS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGVhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAgICAgIHsvKiBEaXNwbGF5IGFsbCBtYXRjaGVkIHRhc2tzIGF0IHRoZSB0b3AgKi99XHJcbiAgICAgICAgICAgICAgICB7c2VhcmNoZWRUYXNrcy5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0ga2V5PXt0YXNrLmlkfSB2YXJpYW50PVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFza0l0ZW0gdGFzaz17dGFza30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIERpc3BsYXkgdGhlIHJlc3Qgb2YgdGhlIHRhc2tzLCBleGNsdWRpbmcgdGhlIHNlYXJjaGVkIHRhc2tzICovfVxyXG4gICAgICAgICAgICAgICAge3Rhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodGFzaykgPT4gIXNlYXJjaGVkVGFza3Muc29tZSgoc2VhcmNoZWRUYXNrKSA9PiBzZWFyY2hlZFRhc2suaWQgPT09IHRhc2suaWQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGtleT17dGFzay5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFza0l0ZW0gdGFzaz17dGFza30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRycGMiLCJUYXNrSXRlbSIsIkxpc3RHcm91cCIsIkZvcm0iLCJCdXR0b24iLCJ1c2VUYXNrU3RvcmUiLCJUYXNrTGlzdCIsImRhdGEiLCJmZXRjaGVkVGFza3MiLCJpc0xvYWRpbmciLCJ0YXNrIiwiZ2V0QWxsIiwidXNlUXVlcnkiLCJ0YXNrcyIsInNldFRhc2tzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hlZFRhc2tzIiwic2V0U2VhcmNoZWRUYXNrcyIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvdW5kVGFza3MiLCJmaWx0ZXIiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNsZWFyIiwiZGl2IiwiaDMiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFyaWFudCIsIm9uQ2xpY2siLCJtYXAiLCJJdGVtIiwiaWQiLCJzb21lIiwic2VhcmNoZWRUYXNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TaskList.tsx\n"));

/***/ })

});