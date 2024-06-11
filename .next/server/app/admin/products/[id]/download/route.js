"use strict";
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
exports.id = "app/admin/products/[id]/download/route";
exports.ids = ["app/admin/products/[id]/download/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&page=%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute.ts&appDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&page=%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute.ts&appDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_ayushi_Ayushi_Workspace_Goals_NextJs_nextjs_ecommerce_app_src_app_admin_products_id_download_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/admin/products/[id]/download/route.ts */ \"(rsc)/./src/app/admin/products/[id]/download/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/admin/products/[id]/download/route\",\n        pathname: \"/admin/products/[id]/download\",\n        filename: \"route\",\n        bundlePath: \"app/admin/products/[id]/download/route\"\n    },\n    resolvedPagePath: \"/home/ayushi/Ayushi Workspace/Goals/NextJs/nextjs-ecommerce-app/src/app/admin/products/[id]/download/route.ts\",\n    nextConfigOutput,\n    userland: _home_ayushi_Ayushi_Workspace_Goals_NextJs_nextjs_ecommerce_app_src_app_admin_products_id_download_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/admin/products/[id]/download/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhZG1pbiUyRnByb2R1Y3RzJTJGJTVCaWQlNUQlMkZkb3dubG9hZCUyRnJvdXRlJnBhZ2U9JTJGYWRtaW4lMkZwcm9kdWN0cyUyRiU1QmlkJTVEJTJGZG93bmxvYWQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhZG1pbiUyRnByb2R1Y3RzJTJGJTVCaWQlNUQlMkZkb3dubG9hZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGYXl1c2hpJTJGQXl1c2hpJTIwV29ya3NwYWNlJTJGR29hbHMlMkZOZXh0SnMlMkZuZXh0anMtZWNvbW1lcmNlLWFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRmF5dXNoaSUyRkF5dXNoaSUyMFdvcmtzcGFjZSUyRkdvYWxzJTJGTmV4dEpzJTJGbmV4dGpzLWVjb21tZXJjZS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZEO0FBQzFJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFwcC8/MzUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9heXVzaGkvQXl1c2hpIFdvcmtzcGFjZS9Hb2Fscy9OZXh0SnMvbmV4dGpzLWVjb21tZXJjZS1hcHAvc3JjL2FwcC9hZG1pbi9wcm9kdWN0cy9baWRdL2Rvd25sb2FkL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FkbWluL3Byb2R1Y3RzL1tpZF0vZG93bmxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FkbWluL3Byb2R1Y3RzL1tpZF0vZG93bmxvYWRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYWRtaW4vcHJvZHVjdHMvW2lkXS9kb3dubG9hZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2F5dXNoaS9BeXVzaGkgV29ya3NwYWNlL0dvYWxzL05leHRKcy9uZXh0anMtZWNvbW1lcmNlLWFwcC9zcmMvYXBwL2FkbWluL3Byb2R1Y3RzL1tpZF0vZG93bmxvYWQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYWRtaW4vcHJvZHVjdHMvW2lkXS9kb3dubG9hZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&page=%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute.ts&appDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/admin/products/[id]/download/route.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/products/[id]/download/route.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/db */ \"(rsc)/./src/db/db.ts\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(rsc)/./node_modules/next/dist/api/navigation.react-server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nconst GET = async (req, { params: { id } })=>{\n    console.log(\"is: \", id);\n    const product = await _db_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.findUnique({\n        where: {\n            id\n        },\n        select: {\n            filePath: true,\n            name: true\n        }\n    });\n    if (product === null) return (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.notFound)();\n    const { size } = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().stat(product.filePath);\n    const file = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(product.filePath);\n    const extension = product.filePath.split(\".\").pop();\n    return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(file, {\n        headers: {\n            \"Content-Disposition\": `attachment; filename=${product.name}.${extension}`,\n            \"Content-Length\": size.toString()\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FkbWluL3Byb2R1Y3RzL1tpZF0vZG93bmxvYWQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFDYztBQUNhO0FBRWpELE1BQU1JLE1BQU0sT0FDakJDLEtBQ0EsRUFBRUMsUUFBUSxFQUFFQyxFQUFFLEVBQUUsRUFBOEI7SUFFOUNDLFFBQVFDLEdBQUcsQ0FBQyxRQUFRRjtJQUNwQixNQUFNRyxVQUFVLE1BQU1WLDhDQUFFQSxDQUFDVSxPQUFPLENBQUNDLFVBQVUsQ0FBQztRQUMxQ0MsT0FBTztZQUFFTDtRQUFHO1FBQ1pNLFFBQVE7WUFBRUMsVUFBVTtZQUFNQyxNQUFNO1FBQUs7SUFDdkM7SUFDQSxJQUFJTCxZQUFZLE1BQU0sT0FBT1IseURBQVFBO0lBQ3JDLE1BQU0sRUFBRWMsSUFBSSxFQUFFLEdBQUcsTUFBTWYsdURBQU8sQ0FBQ1MsUUFBUUksUUFBUTtJQUMvQyxNQUFNSSxPQUFPLE1BQU1qQiwyREFBVyxDQUFDUyxRQUFRSSxRQUFRO0lBQy9DLE1BQU1NLFlBQVlWLFFBQVFJLFFBQVEsQ0FBQ08sS0FBSyxDQUFDLEtBQUtDLEdBQUc7SUFDakQsT0FBTyxJQUFJbkIscURBQVlBLENBQUNlLE1BQU07UUFDNUJLLFNBQVM7WUFDUCx1QkFBdUIsQ0FBQyxxQkFBcUIsRUFBRWIsUUFBUUssSUFBSSxDQUFDLENBQUMsRUFBRUssVUFBVSxDQUFDO1lBQzFFLGtCQUFrQkosS0FBS1EsUUFBUTtRQUNqQztJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hcHAvLi9zcmMvYXBwL2FkbWluL3Byb2R1Y3RzL1tpZF0vZG93bmxvYWQvcm91dGUudHM/ODdiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSBcIkAvZGIvZGJcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcbmltcG9ydCB7IG5vdEZvdW5kIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKFxuICByZXE6IE5leHRSZXF1ZXN0LFxuICB7IHBhcmFtczogeyBpZCB9IH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9XG4pID0+IHtcbiAgY29uc29sZS5sb2coXCJpczogXCIsIGlkKTtcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBzZWxlY3Q6IHsgZmlsZVBhdGg6IHRydWUsIG5hbWU6IHRydWUgfSxcbiAgfSk7XG4gIGlmIChwcm9kdWN0ID09PSBudWxsKSByZXR1cm4gbm90Rm91bmQoKTtcbiAgY29uc3QgeyBzaXplIH0gPSBhd2FpdCBmcy5zdGF0KHByb2R1Y3QuZmlsZVBhdGgpO1xuICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGUocHJvZHVjdC5maWxlUGF0aCk7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IHByb2R1Y3QuZmlsZVBhdGguc3BsaXQoXCIuXCIpLnBvcCgpO1xuICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShmaWxlLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LURpc3Bvc2l0aW9uXCI6IGBhdHRhY2htZW50OyBmaWxlbmFtZT0ke3Byb2R1Y3QubmFtZX0uJHtleHRlbnNpb259YCxcbiAgICAgIFwiQ29udGVudC1MZW5ndGhcIjogc2l6ZS50b1N0cmluZygpLFxuICAgIH0sXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJkYiIsImZzIiwibm90Rm91bmQiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXEiLCJwYXJhbXMiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwiZmlsZVBhdGgiLCJuYW1lIiwic2l6ZSIsInN0YXQiLCJmaWxlIiwicmVhZEZpbGUiLCJleHRlbnNpb24iLCJzcGxpdCIsInBvcCIsImhlYWRlcnMiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/admin/products/[id]/download/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/db.ts":
/*!**********************!*\
  !*** ./src/db/db.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst db = globalThis.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\nif (true) globalThis.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1FLEtBQUtDLFdBQVdDLE1BQU0sSUFBSUg7QUFFaEMsaUVBQWVDLEVBQUVBLEVBQUM7QUFFbEIsSUFBSUcsSUFBcUMsRUFBRUYsV0FBV0MsTUFBTSxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hcHAvLi9zcmMvZGIvZGIudHM/OTJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpO1xufTtcblxuZGVjbGFyZSBjb25zdCBnbG9iYWxUaGlzOiB7XG4gIHByaXNtYTogUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPjtcbn0gJiB0eXBlb2YgZ2xvYmFsO1xuXG5jb25zdCBkYiA9IGdsb2JhbFRoaXMucHJpc21hID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBkYjtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJkYiIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/db/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&page=%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fadmin%2Fproducts%2F%5Bid%5D%2Fdownload%2Froute.ts&appDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fayushi%2FAyushi%20Workspace%2FGoals%2FNextJs%2Fnextjs-ecommerce-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();