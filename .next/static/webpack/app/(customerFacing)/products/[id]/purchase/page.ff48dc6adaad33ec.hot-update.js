"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(customerFacing)/products/[id]/purchase/page",{

/***/ "(app-pages-browser)/./src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx":
/*!**************************************************************************************!*\
  !*** ./src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"(app-pages-browser)/./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"(app-pages-browser)/./node_modules/@stripe/stripe-js/lib/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)(\"pk_test_51PQileRoIAo45U26avTvk7JrKK5x8T7j9W24GGZgs370u2jtVR4myMAfEWRmi6x5WNgc7Q0WokDoMn2JX8jm22zR00EJm5jLx4\");\nconst CheckoutForm = (param)=>{\n    let { product, clientSecret } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-5xl w-full mx-auto space-y-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4 items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aspect-video flex-shrink-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: product.imagePath,\n                            fill: true,\n                            alt: product.name\n                        }, void 0, false, {\n                            fileName: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.Elements, {\n                    options: {\n                        clientSecret\n                    },\n                    stripe: stripePromise,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {}, void 0, false, {\n                        fileName: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CheckoutForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutForm);\nfunction Form() {\n    _s();\n    const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();\n    const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useElements)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.PaymentElement, {}, void 0, false, {\n        fileName: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, this);\n}\n_s(Form, \"EKvoGMX7lxsZ5SGPpYu2aKFzClQ=\", false, function() {\n    return [\n        _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe,\n        _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useElements\n    ];\n});\n_c1 = Form;\nvar _c, _c1;\n$RefreshReg$(_c, \"CheckoutForm\");\n$RefreshReg$(_c1, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGN1c3RvbWVyRmFjaW5nKS9wcm9kdWN0cy9baWRdL3B1cmNoYXNlL19jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9pQztBQUNjO0FBQ2hCO0FBQ0w7QUFNMUIsTUFBTU8sZ0JBQWdCSCw2REFBVUEsQ0FDOUJJLDZHQUF5QztBQUUzQyxNQUFNRyxlQUFlO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQXFCO0lBQ2hFLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDVixrREFBS0E7NEJBQUNXLEtBQUtKLFFBQVFLLFNBQVM7NEJBQUVDLElBQUk7NEJBQUNDLEtBQUtQLFFBQVFRLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3pELDhEQUFDcEIsNkRBQVFBO29CQUFDcUIsU0FBUzt3QkFBRVI7b0JBQWE7b0JBQUdTLFFBQVFmOzhCQUMzQyw0RUFBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBZk1aO0FBaUJOLCtEQUFlQSxZQUFZQSxFQUFDO0FBRTVCLFNBQVNZOztJQUNQLE1BQU1ELFNBQVNuQixrRUFBU0E7SUFDeEIsTUFBTXFCLFdBQVd0QixvRUFBV0E7SUFDNUIscUJBQU8sOERBQUNELG1FQUFjQTs7Ozs7QUFDeEI7R0FKU3NCOztRQUNRcEIsOERBQVNBO1FBQ1BELGdFQUFXQTs7O01BRnJCcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oY3VzdG9tZXJGYWNpbmcpL3Byb2R1Y3RzL1tpZF0vcHVyY2hhc2UvX2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtLnRzeD9lN2E1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgRWxlbWVudHMsXG4gIFBheW1lbnRFbGVtZW50LFxuICB1c2VFbGVtZW50cyxcbiAgdXNlU3RyaXBlLFxufSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIENoZWNrb3V0Rm9ybVByb3BzID0ge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICBjbGllbnRTZWNyZXQ6IHN0cmluZztcbn07XG5jb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkgYXMgc3RyaW5nXG4pO1xuY29uc3QgQ2hlY2tvdXRGb3JtID0gKHsgcHJvZHVjdCwgY2xpZW50U2VjcmV0IH06IENoZWNrb3V0Rm9ybVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIHctZnVsbCBteC1hdXRvIHNwYWNlLXktOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtdmlkZW8gZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdC5pbWFnZVBhdGh9IGZpbGwgYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RWxlbWVudHMgb3B0aW9ucz17eyBjbGllbnRTZWNyZXQgfX0gc3RyaXBlPXtzdHJpcGVQcm9taXNlfT5cbiAgICAgICAgICA8Rm9ybSAvPlxuICAgICAgICA8L0VsZW1lbnRzPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIHJldHVybiA8UGF5bWVudEVsZW1lbnQgLz47XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudHMiLCJQYXltZW50RWxlbWVudCIsInVzZUVsZW1lbnRzIiwidXNlU3RyaXBlIiwibG9hZFN0cmlwZSIsIkltYWdlIiwiUmVhY3QiLCJzdHJpcGVQcm9taXNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIiwiQ2hlY2tvdXRGb3JtIiwicHJvZHVjdCIsImNsaWVudFNlY3JldCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlUGF0aCIsImZpbGwiLCJhbHQiLCJuYW1lIiwib3B0aW9ucyIsInN0cmlwZSIsIkZvcm0iLCJlbGVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(customerFacing)/products/[id]/purchase/_components/CheckoutForm.tsx\n"));

/***/ })

});