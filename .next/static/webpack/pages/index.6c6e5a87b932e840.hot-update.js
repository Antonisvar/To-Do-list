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

/***/ "./node_modules/react-bootstrap/esm/ButtonGroup.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ButtonGroup.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\n\nconst ButtonGroup = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = _s((param, ref)=>{\n    let { bsPrefix, size, vertical = false, className, role = 'group', // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n    as: Component = 'div', ...rest } = param;\n    _s();\n    const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'btn-group');\n    let baseClass = prefix;\n    if (vertical) baseClass = \"\".concat(prefix, \"-vertical\");\n    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n        ...rest,\n        ref: ref,\n        role: role,\n        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, baseClass, size && \"\".concat(prefix, \"-\").concat(size))\n    });\n}, \"10x7WacEFhSyNdxCSprNUSavCZY=\", false, function() {\n    return [\n        _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix\n    ];\n})), \"10x7WacEFhSyNdxCSprNUSavCZY=\", false, function() {\n    return [\n        _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix\n    ];\n});\n_c1 = ButtonGroup;\nButtonGroup.displayName = 'ButtonGroup';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroup);\nvar _c, _c1;\n$RefreshReg$(_c, \"ButtonGroup$React.forwardRef\");\n$RefreshReg$(_c1, \"ButtonGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9CdXR0b25Hcm91cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFb0M7QUFDTDtBQUNzQjtBQUNMO0FBQ2hELE1BQU1LLGNBQWMsV0FBVyxHQUFFSixHQUFBQSw2Q0FBZ0IsU0FBQyxRQVMvQ007UUFUZ0QsRUFDakRDLFFBQVEsRUFDUkMsSUFBSSxFQUNKQyxXQUFXLEtBQUssRUFDaEJDLFNBQVMsRUFDVEMsT0FBTyxPQUFPLEVBQ2QsMkpBQTJKO0lBQzNKQyxJQUFJQyxZQUFZLEtBQUssRUFDckIsR0FBR0MsTUFDSjs7SUFDQyxNQUFNQyxTQUFTZCxrRUFBa0JBLENBQUNNLFVBQVU7SUFDNUMsSUFBSVMsWUFBWUQ7SUFDaEIsSUFBSU4sVUFBVU8sWUFBWSxHQUFVLE9BQVBELFFBQU87SUFDcEMsT0FBTyxXQUFXLEdBQUVaLHNEQUFJQSxDQUFDVSxXQUFXO1FBQ2xDLEdBQUdDLElBQUk7UUFDUFIsS0FBS0E7UUFDTEssTUFBTUE7UUFDTkQsV0FBV1gsaURBQVVBLENBQUNXLFdBQVdNLFdBQVdSLFFBQVEsR0FBYUEsT0FBVk8sUUFBTyxLQUFRLE9BQUxQO0lBQ25FO0FBQ0Y7O1FBVGlCUCw4REFBa0JBOzs7O1FBQWxCQSw4REFBa0JBOzs7O0FBVW5DRyxZQUFZYSxXQUFXLEdBQUc7QUFDMUIsaUVBQWViLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9CdXR0b25Hcm91cC5qcz8zNWM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgQnV0dG9uR3JvdXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBic1ByZWZpeCxcbiAgc2l6ZSxcbiAgdmVydGljYWwgPSBmYWxzZSxcbiAgY2xhc3NOYW1lLFxuICByb2xlID0gJ2dyb3VwJyxcbiAgLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuICBhczogQ29tcG9uZW50ID0gJ2RpdicsXG4gIC4uLnJlc3Rcbn0sIHJlZikgPT4ge1xuICBjb25zdCBwcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdidG4tZ3JvdXAnKTtcbiAgbGV0IGJhc2VDbGFzcyA9IHByZWZpeDtcbiAgaWYgKHZlcnRpY2FsKSBiYXNlQ2xhc3MgPSBgJHtwcmVmaXh9LXZlcnRpY2FsYDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwge1xuICAgIC4uLnJlc3QsXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogcm9sZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYXNlQ2xhc3MsIHNpemUgJiYgYCR7cHJlZml4fS0ke3NpemV9YClcbiAgfSk7XG59KTtcbkJ1dHRvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ0J1dHRvbkdyb3VwJztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkdyb3VwOyJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwiUmVhY3QiLCJ1c2VCb290c3RyYXBQcmVmaXgiLCJqc3giLCJfanN4IiwiQnV0dG9uR3JvdXAiLCJmb3J3YXJkUmVmIiwicmVmIiwiYnNQcmVmaXgiLCJzaXplIiwidmVydGljYWwiLCJjbGFzc05hbWUiLCJyb2xlIiwiYXMiLCJDb21wb25lbnQiLCJyZXN0IiwicHJlZml4IiwiYmFzZUNsYXNzIiwiZGlzcGxheU5hbWUiXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-bootstrap/esm/ButtonGroup.js\n"));

/***/ }),

/***/ "./src/components/TaskItem.tsx":
/*!*************************************!*\
  !*** ./src/components/TaskItem.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EditTaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditTaskForm */ \"./src/components/EditTaskForm.tsx\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/store/taskStore */ \"./src/pages/store/taskStore.ts\");\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ButtonGroup */ \"./node_modules/react-bootstrap/esm/ButtonGroup.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst TaskItem = (param)=>{\n    let { task } = param;\n    _s();\n    const { deleteTask, updateTask } = (0,_pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__.useTaskStore)();\n    const [isCompleted, setIsCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task.completed);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Use the `update` mutation to update task status or other fields\n    const updateTaskMutation = _utils_trpc__WEBPACK_IMPORTED_MODULE_5__.trpc.task.update.useMutation({\n        onSuccess: (updatedTask)=>{\n            updateTask(updatedTask); // Update Zustand store with the updated task\n        }\n    });\n    // Use tRPC mutation for deleting a task\n    const deleteTaskMutation = _utils_trpc__WEBPACK_IMPORTED_MODULE_5__.trpc.task.delete.useMutation({\n        onSuccess: ()=>{\n            deleteTask(task.id); // Remove task from Zustand store\n        }\n    });\n    const toggleCompleted = ()=>{\n        updateTaskMutation.mutate({\n            id: task.id,\n            completed: !isCompleted\n        }); // Send updated completion status to the server\n        setIsCompleted(!isCompleted); // Optimistic UI update\n    };\n    const handleEditSuccess = (updatedTask)=>{\n        updateTask(updatedTask); // Update task in Zustand store\n        setIsEditing(false); // Close modal on success\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: \"text-center \".concat(isCompleted ? 'border-success' : 'border-danger', \" mb-3\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Header, {\n                children: [\n                    \"Status: \",\n                    isCompleted ? 'Completed' : 'Not Completed'\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Body, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Title, {\n                        children: task.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Text, {\n                        children: task.description || 'No description available'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClick: toggleCompleted,\n                        variant: \"success\",\n                        children: [\n                            \"Mark as \",\n                            isCompleted ? 'Not Completed' : 'Completed'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"\",\n                        onClick: ()=>setIsEditing(true),\n                        variant: \"info\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        \"aria-label\": \"Basic example\",\n                        children: [\n                            \"                \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                className: \"\",\n                                onClick: ()=>deleteTaskMutation.mutate({\n                                        id: task.id\n                                    }),\n                                variant: \"danger\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 73\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Footer, {\n                className: \"text-muted\",\n                children: [\n                    \"Created At: \",\n                    new Date(task.createdAt).toLocaleString(),\n                    \" | Updated At: \",\n                    new Date(task.updatedAt).toLocaleString()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpen: isEditing,\n                onClose: ()=>setIsEditing(false),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"mt-3\",\n                        children: \"Edit Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditTaskForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        taskId: task.id,\n                        initialTitle: task.title,\n                        initialDescription: task.description,\n                        initialCompleted: isCompleted,\n                        onClose: ()=>setIsEditing(false),\n                        onSuccess: handleEditSuccess\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\keray\\\\OneDrive\\\\Documents\\\\GitHub\\\\MyApp\\\\my-app\\\\src\\\\components\\\\TaskItem.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TaskItem, \"iVazYDoM+63s/dMlG5SaGS3FS2w=\", false, function() {\n    return [\n        _pages_store_taskStore__WEBPACK_IMPORTED_MODULE_4__.useTaskStore\n    ];\n});\n_c = TaskItem;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FBSy9CO0dBL0RNbkI7O1FBQ2lDTCxnRUFBWUE7OztLQUQ3Q0s7QUFpRU4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYXNrSXRlbS50c3g/NDhjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVkaXRUYXNrRm9ybSBmcm9tICcuL0VkaXRUYXNrRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcclxuaW1wb3J0IHsgdXNlVGFza1N0b3JlIH0gZnJvbSAnLi4vcGFnZXMvc3RvcmUvdGFza1N0b3JlJztcclxuaW1wb3J0IHsgdHJwYyB9IGZyb20gJy4uL3V0aWxzL3RycGMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9wYWdlcy9zdG9yZS90YXNrU3RvcmUnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbkdyb3VwJztcclxuXHJcbnR5cGUgVGFza0l0ZW1Qcm9wcyA9IHtcclxuICAgIHRhc2s6IFRhc2s7XHJcbn07XHJcblxyXG5jb25zdCBUYXNrSXRlbSA9ICh7IHRhc2sgfTogVGFza0l0ZW1Qcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBkZWxldGVUYXNrLCB1cGRhdGVUYXNrIH0gPSB1c2VUYXNrU3RvcmUoKTtcclxuICAgIGNvbnN0IFtpc0NvbXBsZXRlZCwgc2V0SXNDb21wbGV0ZWRdID0gdXNlU3RhdGUodGFzay5jb21wbGV0ZWQpO1xyXG4gICAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBVc2UgdGhlIGB1cGRhdGVgIG11dGF0aW9uIHRvIHVwZGF0ZSB0YXNrIHN0YXR1cyBvciBvdGhlciBmaWVsZHNcclxuICAgIGNvbnN0IHVwZGF0ZVRhc2tNdXRhdGlvbiA9IHRycGMudGFzay51cGRhdGUudXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG9uU3VjY2VzczogKHVwZGF0ZWRUYXNrOiBUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRhc2sodXBkYXRlZFRhc2spOyAvLyBVcGRhdGUgWnVzdGFuZCBzdG9yZSB3aXRoIHRoZSB1cGRhdGVkIHRhc2tcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVXNlIHRSUEMgbXV0YXRpb24gZm9yIGRlbGV0aW5nIGEgdGFza1xyXG4gICAgY29uc3QgZGVsZXRlVGFza011dGF0aW9uID0gdHJwYy50YXNrLmRlbGV0ZS51c2VNdXRhdGlvbih7XHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFzay5pZCk7IC8vIFJlbW92ZSB0YXNrIGZyb20gWnVzdGFuZCBzdG9yZVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlVGFza011dGF0aW9uLm11dGF0ZSh7XHJcbiAgICAgICAgICAgIGlkOiB0YXNrLmlkLFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICFpc0NvbXBsZXRlZCxcclxuICAgICAgICB9KTsgLy8gU2VuZCB1cGRhdGVkIGNvbXBsZXRpb24gc3RhdHVzIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICBzZXRJc0NvbXBsZXRlZCghaXNDb21wbGV0ZWQpOyAvLyBPcHRpbWlzdGljIFVJIHVwZGF0ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFZGl0U3VjY2VzcyA9ICh1cGRhdGVkVGFzazogVGFzaykgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVRhc2sodXBkYXRlZFRhc2spOyAvLyBVcGRhdGUgdGFzayBpbiBadXN0YW5kIHN0b3JlXHJcbiAgICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTsgLy8gQ2xvc2UgbW9kYWwgb24gc3VjY2Vzc1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17YHRleHQtY2VudGVyICR7aXNDb21wbGV0ZWQgPyAnYm9yZGVyLXN1Y2Nlc3MnIDogJ2JvcmRlci1kYW5nZXInfSBtYi0zYH0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5TdGF0dXM6IHtpc0NvbXBsZXRlZCA/ICdDb21wbGV0ZWQnIDogJ05vdCBDb21wbGV0ZWQnfTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57dGFzay50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0Pnt0YXNrLmRlc2NyaXB0aW9uIHx8ICdObyBkZXNjcmlwdGlvbiBhdmFpbGFibGUnfTwvQ2FyZC5UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlQ29tcGxldGVkfSB2YXJpYW50PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIE1hcmsgYXMge2lzQ29tcGxldGVkID8gJ05vdCBDb21wbGV0ZWQnIDogJ0NvbXBsZXRlZCd9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfSB2YXJpYW50PVwiaW5mb1wiPkVkaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2tNdXRhdGlvbi5tdXRhdGUoeyBpZDogdGFzay5pZCB9KX0gdmFyaWFudD1cImRhbmdlclwiPkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8Q2FyZC5Gb290ZXIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZCBBdDoge25ldyBEYXRlKHRhc2suY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfSB8IFVwZGF0ZWQgQXQ6IHtuZXcgRGF0ZSh0YXNrLnVwZGF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17aXNFZGl0aW5nfSBvbkNsb3NlPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0zXCI+RWRpdCBUYXNrPC9oMz5cclxuICAgICAgICAgICAgICAgIDxFZGl0VGFza0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICB0YXNrSWQ9e3Rhc2suaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRpdGxlPXt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxEZXNjcmlwdGlvbj17dGFzay5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsQ29tcGxldGVkPXtpc0NvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17aGFuZGxlRWRpdFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrSXRlbTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRWRpdFRhc2tGb3JtIiwiTW9kYWwiLCJ1c2VUYXNrU3RvcmUiLCJ0cnBjIiwiQnV0dG9uIiwiQ2FyZCIsIkJ1dHRvbkdyb3VwIiwiVGFza0l0ZW0iLCJ0YXNrIiwiZGVsZXRlVGFzayIsInVwZGF0ZVRhc2siLCJpc0NvbXBsZXRlZCIsInNldElzQ29tcGxldGVkIiwiY29tcGxldGVkIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwidXBkYXRlVGFza011dGF0aW9uIiwidXBkYXRlIiwidXNlTXV0YXRpb24iLCJvblN1Y2Nlc3MiLCJ1cGRhdGVkVGFzayIsImRlbGV0ZVRhc2tNdXRhdGlvbiIsImRlbGV0ZSIsImlkIiwidG9nZ2xlQ29tcGxldGVkIiwibXV0YXRlIiwiaGFuZGxlRWRpdFN1Y2Nlc3MiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJCb2R5IiwiVGl0bGUiLCJ0aXRsZSIsIlRleHQiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiYXJpYS1sYWJlbCIsIkZvb3RlciIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsInVwZGF0ZWRBdCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJoMyIsInRhc2tJZCIsImluaXRpYWxUaXRsZSIsImluaXRpYWxEZXNjcmlwdGlvbiIsImluaXRpYWxDb21wbGV0ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TaskItem.tsx\n"));

/***/ })

});