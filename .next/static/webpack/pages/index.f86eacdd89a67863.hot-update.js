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

/***/ "./src/components/TaskItem.tsx":
/*!*************************************!*\
  !*** ./src/components/TaskItem.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EditTaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditTaskForm */ \"./src/components/EditTaskForm.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/store/taskStore */ \"./src/pages/store/taskStore.ts\");\n/* harmony import */ var _hooks_useUpdateTaskStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUpdateTaskStatus */ \"./src/hooks/useUpdateTaskStatus.ts\");\n/* harmony import */ var _hooks_useDeleteTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useDeleteTask */ \"./src/hooks/useDeleteTask.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst TaskItem = (param)=>{\n    let { task, refetchTasks } = param;\n    _s();\n    const { deleteTask, updateTask } = (0,_pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__.useTaskStore)();\n    const [isCompleted, setIsCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task.completed);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { updateTaskStatus, isLoading, error } = (0,_hooks_useUpdateTaskStatus__WEBPACK_IMPORTED_MODULE_5__.useUpdateTaskStatus)(refetchTasks, (updatedTask)=>{\n        updateTask(updatedTask); // Update Zustand or local state\n        console.log(\"Task updated:\", updatedTask);\n        refetchTasks();\n        router.refresh();\n        router.replace('/');\n    });\n    const { deleteTask: performDeleteTask } = (0,_hooks_useDeleteTask__WEBPACK_IMPORTED_MODULE_6__.useDeleteTask)(()=>{\n        deleteTask(task.id);\n        console.log(\"Task deleted with id:\", task.id);\n        refetchTasks(); // Refetch after deleting the task\n        router.refresh();\n        router.replace('/');\n    });\n    const toggleCompleted = ()=>{\n        console.log(\"Toggling task completion status for task id:\", task.id);\n        updateTaskStatus({\n            id: task.id,\n            completed: !isCompleted\n        });\n        setIsCompleted(!isCompleted); // Optimistic UI update\n    };\n    const handleEditSuccess = (updatedTask)=>{\n        updateTask(updatedTask);\n        console.log(\"Edit successful for task:\", updatedTask);\n        refetchTasks(); // Refetch tasks after edit success\n        setIsEditing(false); // Close modal on success\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            className: \"text-center \".concat(isCompleted ? 'border-success' : 'border-danger', \" mb-3\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Header, {\n                    children: [\n                        \"Status: \",\n                        isCompleted ? 'Completed' : 'Not Completed'\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Title, {\n                            children: task.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Text, {\n                            children: task.description ? task.description : 'No description available'\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"mx-1\",\n                            onClick: toggleCompleted,\n                            variant: \"success\",\n                            children: [\n                                \"Mark as \",\n                                isCompleted ? 'Not Completed' : 'Completed'\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"mx-1\",\n                            onClick: ()=>setIsEditing(true),\n                            variant: \"info\",\n                            children: \"Edit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"mx-1\",\n                            onClick: ()=>performDeleteTask({\n                                    id: task.id\n                                }),\n                            variant: \"danger\",\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Footer, {\n                    className: \"text-muted\",\n                    children: [\n                        \"Created At: \",\n                        new Date(task.createdAt).toLocaleString(),\n                        \" | Updated At: \",\n                        new Date(task.updatedAt).toLocaleString()\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    isOpen: isEditing,\n                    onClose: ()=>setIsEditing(false),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-3\",\n                            children: \"Edit Task\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditTaskForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            taskId: task.id,\n                            initialTitle: task.title,\n                            initialDescription: task.description,\n                            initialCompleted: isCompleted,\n                            onClose: ()=>setIsEditing(false),\n                            onSuccess: handleEditSuccess,\n                            refetchTasks: refetchTasks\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(TaskItem, \"0aRxLkLp7cen35KWAV4Fjifxe+M=\", false, function() {\n    return [\n        _pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__.useTaskStore,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _hooks_useUpdateTaskStatus__WEBPACK_IMPORTED_MODULE_5__.useUpdateTaskStatus,\n        _hooks_useDeleteTask__WEBPACK_IMPORTED_MODULE_6__.useDeleteTask\n    ];\n});\n_c = TaskItem;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(TaskItem));\nvar _c, _c1;\n$RefreshReg$(_c, \"TaskItem\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFHaEIsV0FBVTtzQ0FBTzs7Ozs7O3NDQUNyQiw4REFBQ2pDLHFEQUFZQTs0QkFDVGtELFFBQVF2QyxLQUFLbUIsRUFBRTs0QkFDZnFCLGNBQWN4QyxLQUFLMEIsS0FBSzs0QkFDeEJlLG9CQUFvQnpDLEtBQUs0QixXQUFXOzRCQUNwQ2Msa0JBQWtCdEM7NEJBQ2xCaUMsU0FBUyxJQUFNN0IsYUFBYTs0QkFDNUJtQyxXQUFXdEI7NEJBQ1hwQixjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0QztHQTNFTUY7O1FBQ2lDUixnRUFBWUE7UUFHaENLLHNEQUFTQTtRQUV1QkosMkVBQW1CQTtRQVl4QkMsK0RBQWFBOzs7S0FsQnJETTtBQTZFTixvRkFBZUosMkNBQUlBLENBQUNJLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYXNrSXRlbS50c3g/NDhjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cnBjIH0gZnJvbSAnLi4vdXRpbHMvdHJwYyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRWRpdFRhc2tGb3JtIGZyb20gJy4vRWRpdFRhc2tGb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VUYXNrU3RvcmUgfSBmcm9tICcuLi9wYWdlcy9zdG9yZS90YXNrU3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VVcGRhdGVUYXNrU3RhdHVzIH0gZnJvbSAnLi4vaG9va3MvdXNlVXBkYXRlVGFza1N0YXR1cyc7XHJcbmltcG9ydCB7IHVzZURlbGV0ZVRhc2sgfSBmcm9tICcuLi9ob29rcy91c2VEZWxldGVUYXNrJztcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL3BhZ2VzL3N0b3JlL3Rhc2tTdG9yZSc7XHJcblxyXG5cclxudHlwZSBUYXNrSXRlbVByb3BzID0ge1xyXG4gICAgdGFzazogVGFzaztcclxuICAgIHJlZmV0Y2hUYXNrczogKCkgPT4gdm9pZDsgLy8gSW5jbHVkZSByZWZldGNoVGFza3MgYXMgYSBwcm9wXHJcbn07XHJcblxyXG5jb25zdCBUYXNrSXRlbSA9ICh7IHRhc2ssIHJlZmV0Y2hUYXNrcyB9OiBUYXNrSXRlbVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2sgfSA9IHVzZVRhc2tTdG9yZSgpO1xyXG4gICAgY29uc3QgW2lzQ29tcGxldGVkLCBzZXRJc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZSh0YXNrLmNvbXBsZXRlZCk7XHJcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgeyB1cGRhdGVUYXNrU3RhdHVzLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VVcGRhdGVUYXNrU3RhdHVzKFxyXG4gICAgICAgIHJlZmV0Y2hUYXNrcywgLy8gTm8gYXJndW1lbnRzIG5lZWRlZCBmb3IgcmVmZXRjaFRhc2tzXHJcbiAgICAgICAgKHVwZGF0ZWRUYXNrOiBUYXNrKSA9PiB7IC8vIFBhc3MgdXBkYXRlZFRhc2sgYXMgYSBwYXJhbWV0ZXIgaGVyZVxyXG4gICAgICAgICAgICB1cGRhdGVUYXNrKHVwZGF0ZWRUYXNrKTsgLy8gVXBkYXRlIFp1c3RhbmQgb3IgbG9jYWwgc3RhdGVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIHVwZGF0ZWQ6XCIsIHVwZGF0ZWRUYXNrKTtcclxuICAgICAgICAgICAgcmVmZXRjaFRhc2tzKCk7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgeyBkZWxldGVUYXNrOiBwZXJmb3JtRGVsZXRlVGFzayB9ID0gdXNlRGVsZXRlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlVGFzayh0YXNrLmlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgZGVsZXRlZCB3aXRoIGlkOlwiLCB0YXNrLmlkKTtcclxuICAgICAgICByZWZldGNoVGFza3MoKTsgLy8gUmVmZXRjaCBhZnRlciBkZWxldGluZyB0aGUgdGFza1xyXG4gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRvZ2dsaW5nIHRhc2sgY29tcGxldGlvbiBzdGF0dXMgZm9yIHRhc2sgaWQ6XCIsIHRhc2suaWQpO1xyXG4gICAgICAgIHVwZGF0ZVRhc2tTdGF0dXMoe1xyXG4gICAgICAgICAgICBpZDogdGFzay5pZCxcclxuICAgICAgICAgICAgY29tcGxldGVkOiAhaXNDb21wbGV0ZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SXNDb21wbGV0ZWQoIWlzQ29tcGxldGVkKTsgLy8gT3B0aW1pc3RpYyBVSSB1cGRhdGVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRWRpdFN1Y2Nlc3MgPSAodXBkYXRlZFRhc2s6IFRhc2spID0+IHtcclxuICAgICAgICB1cGRhdGVUYXNrKHVwZGF0ZWRUYXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXQgc3VjY2Vzc2Z1bCBmb3IgdGFzazpcIiwgdXBkYXRlZFRhc2spO1xyXG4gICAgICAgIHJlZmV0Y2hUYXNrcygpOyAvLyBSZWZldGNoIHRhc2tzIGFmdGVyIGVkaXQgc3VjY2Vzc1xyXG4gICAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7IC8vIENsb3NlIG1vZGFsIG9uIHN1Y2Nlc3NcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciAke2lzQ29tcGxldGVkID8gJ2JvcmRlci1zdWNjZXNzJyA6ICdib3JkZXItZGFuZ2VyJ30gbWItM2B9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlN0YXR1czoge2lzQ29tcGxldGVkID8gJ0NvbXBsZXRlZCcgOiAnTm90IENvbXBsZXRlZCd9PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e3Rhc2sudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLmRlc2NyaXB0aW9uID8gdGFzay5kZXNjcmlwdGlvbiA6ICdObyBkZXNjcmlwdGlvbiBhdmFpbGFibGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXgtMVwiIG9uQ2xpY2s9e3RvZ2dsZUNvbXBsZXRlZH0gdmFyaWFudD1cInN1Y2Nlc3NcIj5NYXJrIGFzIHtpc0NvbXBsZXRlZCA/ICdOb3QgQ29tcGxldGVkJyA6ICdDb21wbGV0ZWQnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXgtMVwiIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyh0cnVlKX0gdmFyaWFudD1cImluZm9cIj5FZGl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIE1vZGFsIGZvciBlZGl0aW5nIHRhc2sgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXgtMVwiIG9uQ2xpY2s9eygpID0+IHBlcmZvcm1EZWxldGVUYXNrKHsgaWQ6IHRhc2suaWQgfSl9IHZhcmlhbnQ9XCJkYW5nZXJcIj5EZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuRm9vdGVyIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5DcmVhdGVkIEF0OiB7bmV3IERhdGUodGFzay5jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9IHwgVXBkYXRlZCBBdDoge25ldyBEYXRlKHRhc2sudXBkYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfTwvQ2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc0VkaXRpbmd9IG9uQ2xvc2U9eygpID0+IHNldElzRWRpdGluZyhmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0zXCI+RWRpdCBUYXNrPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8RWRpdFRhc2tGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJZD17dGFzay5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRpdGxlPXt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGVzY3JpcHRpb249e3Rhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxDb21wbGV0ZWQ9e2lzQ29tcGxldGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e2hhbmRsZUVkaXRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoVGFza3M9e3JlZmV0Y2hUYXNrc30gLy8gUGFzcyByZWZldGNoVGFza3MgdG8gRWRpdFRhc2tGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGFza0l0ZW0pO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJFZGl0VGFza0Zvcm0iLCJNb2RhbCIsInVzZVRhc2tTdG9yZSIsInVzZVVwZGF0ZVRhc2tTdGF0dXMiLCJ1c2VEZWxldGVUYXNrIiwiUmVhY3QiLCJtZW1vIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiQ2FyZCIsIlRhc2tJdGVtIiwidGFzayIsInJlZmV0Y2hUYXNrcyIsImRlbGV0ZVRhc2siLCJ1cGRhdGVUYXNrIiwiaXNDb21wbGV0ZWQiLCJzZXRJc0NvbXBsZXRlZCIsImNvbXBsZXRlZCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInJvdXRlciIsInVwZGF0ZVRhc2tTdGF0dXMiLCJpc0xvYWRpbmciLCJlcnJvciIsInVwZGF0ZWRUYXNrIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2giLCJyZXBsYWNlIiwicGVyZm9ybURlbGV0ZVRhc2siLCJpZCIsInRvZ2dsZUNvbXBsZXRlZCIsImhhbmRsZUVkaXRTdWNjZXNzIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiQm9keSIsIlRpdGxlIiwidGl0bGUiLCJUZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIiwidmFyaWFudCIsIkZvb3RlciIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsInVwZGF0ZWRBdCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJoMyIsInRhc2tJZCIsImluaXRpYWxUaXRsZSIsImluaXRpYWxEZXNjcmlwdGlvbiIsImluaXRpYWxDb21wbGV0ZWQiLCJvblN1Y2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TaskItem.tsx\n"));

/***/ })

});