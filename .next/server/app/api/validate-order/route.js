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
exports.id = "app/api/validate-order/route";
exports.ids = ["app/api/validate-order/route"];
exports.modules = {

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

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvalidate-order%2Froute&page=%2Fapi%2Fvalidate-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvalidate-order%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvalidate-order%2Froute&page=%2Fapi%2Fvalidate-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvalidate-order%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Bevan_uni_food_delivery_src_app_api_validate_order_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/validate-order/route.js */ \"(rsc)/./src/app/api/validate-order/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/validate-order/route\",\n        pathname: \"/api/validate-order\",\n        filename: \"route\",\n        bundlePath: \"app/api/validate-order/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Bevan\\\\uni-food-delivery\\\\src\\\\app\\\\api\\\\validate-order\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Bevan_uni_food_delivery_src_app_api_validate_order_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/validate-order/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2YWxpZGF0ZS1vcmRlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdmFsaWRhdGUtb3JkZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2YWxpZGF0ZS1vcmRlciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0QjtBQUN6RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaS1mb29kLWRlbGl2ZXJ5Lz82YWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEJldmFuXFxcXHVuaS1mb29kLWRlbGl2ZXJ5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHZhbGlkYXRlLW9yZGVyXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS92YWxpZGF0ZS1vcmRlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZhbGlkYXRlLW9yZGVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS92YWxpZGF0ZS1vcmRlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEJldmFuXFxcXHVuaS1mb29kLWRlbGl2ZXJ5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHZhbGlkYXRlLW9yZGVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS92YWxpZGF0ZS1vcmRlci9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvalidate-order%2Froute&page=%2Fapi%2Fvalidate-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvalidate-order%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/supabase.js":
/*!*********************************!*\
  !*** ./src/app/api/supabase.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   supabasePublic: () => (/* binding */ supabasePublic)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://worungtggwywlkorzajo.supabase.co\";\nconst supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcnVuZ3RnZ3d5d2xrb3J6YWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwODQ4MDcsImV4cCI6MjA3MDY2MDgwN30.rGwvkAK8-vHCQ7rgRDpfttd4PZVnCWqi0vgUmE62-P8\";\nconsole.log(\"Supabase config check:\", {\n    hasUrl: !!supabaseUrl,\n    hasServiceKey: !!supabaseServiceKey,\n    hasAnonKey: !!supabaseAnonKey,\n    urlLength: supabaseUrl?.length || 0\n});\nif (!supabaseUrl || !supabaseServiceKey) {\n    throw new Error(\"Missing Supabase environment variables\");\n}\nif (!supabaseAnonKey) {\n    throw new Error(\"Missing Supabase anon key for public client\");\n}\n// Create Supabase client with service role key for server-side operations\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseServiceKey, {\n    auth: {\n        autoRefreshToken: false,\n        persistSession: false\n    }\n});\n// Create public client for client-side operations\nconst supabasePublic = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdXBhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLHFCQUFxQkgsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUI7QUFDaEUsTUFBTUMsa0JBQWtCTCxrTkFBeUM7QUFFakVPLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEI7SUFDcENDLFFBQVEsQ0FBQyxDQUFDVjtJQUNWVyxlQUFlLENBQUMsQ0FBQ1A7SUFDakJRLFlBQVksQ0FBQyxDQUFDTjtJQUNkTyxXQUFXYixhQUFhYyxVQUFVO0FBQ3BDO0FBRUEsSUFBSSxDQUFDZCxlQUFlLENBQUNJLG9CQUFvQjtJQUN2QyxNQUFNLElBQUlXLE1BQU07QUFDbEI7QUFFQSxJQUFJLENBQUNULGlCQUFpQjtJQUNwQixNQUFNLElBQUlTLE1BQU07QUFDbEI7QUFFQSwwRUFBMEU7QUFDbkUsTUFBTUMsV0FBV2pCLG1FQUFZQSxDQUFDQyxhQUFhSSxvQkFBb0I7SUFDcEVhLE1BQU07UUFDSkMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0I7SUFDbEI7QUFDRixHQUFFO0FBRUYsa0RBQWtEO0FBQzNDLE1BQU1DLGlCQUFpQnJCLG1FQUFZQSxDQUFDQyxhQUFhTSxpQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmktZm9vZC1kZWxpdmVyeS8uL3NyYy9hcHAvYXBpL3N1cGFiYXNlLmpzP2Q4ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcclxuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWVxyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWVxyXG5cclxuY29uc29sZS5sb2coJ1N1cGFiYXNlIGNvbmZpZyBjaGVjazonLCB7XHJcbiAgaGFzVXJsOiAhIXN1cGFiYXNlVXJsLFxyXG4gIGhhc1NlcnZpY2VLZXk6ICEhc3VwYWJhc2VTZXJ2aWNlS2V5LFxyXG4gIGhhc0Fub25LZXk6ICEhc3VwYWJhc2VBbm9uS2V5LFxyXG4gIHVybExlbmd0aDogc3VwYWJhc2VVcmw/Lmxlbmd0aCB8fCAwXHJcbn0pXHJcblxyXG5pZiAoIXN1cGFiYXNlVXJsIHx8ICFzdXBhYmFzZVNlcnZpY2VLZXkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgU3VwYWJhc2UgZW52aXJvbm1lbnQgdmFyaWFibGVzJylcclxufVxyXG5cclxuaWYgKCFzdXBhYmFzZUFub25LZXkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgU3VwYWJhc2UgYW5vbiBrZXkgZm9yIHB1YmxpYyBjbGllbnQnKVxyXG59XHJcblxyXG4vLyBDcmVhdGUgU3VwYWJhc2UgY2xpZW50IHdpdGggc2VydmljZSByb2xlIGtleSBmb3Igc2VydmVyLXNpZGUgb3BlcmF0aW9uc1xyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZUtleSwge1xyXG4gIGF1dGg6IHtcclxuICAgIGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLFxyXG4gICAgcGVyc2lzdFNlc3Npb246IGZhbHNlXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQ3JlYXRlIHB1YmxpYyBjbGllbnQgZm9yIGNsaWVudC1zaWRlIG9wZXJhdGlvbnNcclxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlUHVibGljID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZVNlcnZpY2VLZXkiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwic3VwYWJhc2VBbm9uS2V5IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJjb25zb2xlIiwibG9nIiwiaGFzVXJsIiwiaGFzU2VydmljZUtleSIsImhhc0Fub25LZXkiLCJ1cmxMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciIsInN1cGFiYXNlIiwiYXV0aCIsImF1dG9SZWZyZXNoVG9rZW4iLCJwZXJzaXN0U2Vzc2lvbiIsInN1cGFiYXNlUHVibGljIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/supabase.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/validate-order/route.js":
/*!*********************************************!*\
  !*** ./src/app/api/validate-order/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supabase.js */ \"(rsc)/./src/app/api/supabase.js\");\n\n\nasync function GET(request) {\n    try {\n        // Get the orderId from query parameters\n        const { searchParams } = new URL(request.url);\n        const orderId = searchParams.get(\"orderId\");\n        if (!orderId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Order ID is required\"\n            }, {\n                status: 400\n            });\n        }\n        // Get the authorization header\n        const authHeader = request.headers.get(\"authorization\");\n        if (!authHeader || !authHeader.startsWith(\"Bearer \")) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Authorization header required\"\n            }, {\n                status: 401\n            });\n        }\n        const token = authHeader.substring(7);\n        // Verify the user\n        const { data: userData, error: userError } = await _supabase_js__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.getUser(token);\n        if (userError || !userData.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid authentication token\"\n            }, {\n                status: 401\n            });\n        }\n        // Query the orders table to find the order\n        const { data: orderData, error: orderError } = await _supabase_js__WEBPACK_IMPORTED_MODULE_1__.supabase.from(\"orders\").select(\"*\").eq(\"id\", orderId).eq(\"customer_id\", userData.user.id).single();\n        if (orderError || !orderData) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Order not found or access denied\"\n            }, {\n                status: 404\n            });\n        }\n        // Return the order data\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            order: orderData,\n            message: \"Order found successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error validating order:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to validate order\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS92YWxpZGF0ZS1vcmRlci9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDZDtBQUVuQyxlQUFlRyxJQUFJQyxPQUFPO0lBQy9CLElBQUk7UUFDRix3Q0FBd0M7UUFDeEMsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO1FBQzVDLE1BQU1DLFVBQVVILGFBQWFJLEdBQUcsQ0FBQztRQUVqQyxJQUFJLENBQUNELFNBQVM7WUFDWixPQUFPUCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF1QixHQUNoQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsK0JBQStCO1FBQy9CLE1BQU1DLGFBQWFULFFBQVFVLE9BQU8sQ0FBQ0wsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQ0ksY0FBYyxDQUFDQSxXQUFXRSxVQUFVLENBQUMsWUFBWTtZQUNwRCxPQUFPZCxxREFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFnQyxHQUN6QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTUksUUFBUUgsV0FBV0ksU0FBUyxDQUFDO1FBRW5DLGtCQUFrQjtRQUNsQixNQUFNLEVBQUVDLE1BQU1DLFFBQVEsRUFBRVIsT0FBT1MsU0FBUyxFQUFFLEdBQUcsTUFBTWxCLGtEQUFRQSxDQUFDbUIsSUFBSSxDQUFDQyxPQUFPLENBQUNOO1FBQ3pFLElBQUlJLGFBQWEsQ0FBQ0QsU0FBU0ksSUFBSSxFQUFFO1lBQy9CLE9BQU90QixxREFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUErQixHQUN4QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsMkNBQTJDO1FBQzNDLE1BQU0sRUFBRU0sTUFBTU0sU0FBUyxFQUFFYixPQUFPYyxVQUFVLEVBQUUsR0FBRyxNQUFNdkIsa0RBQVFBLENBQzFEd0IsSUFBSSxDQUFDLFVBQ0xDLE1BQU0sQ0FBQyxLQUNQQyxFQUFFLENBQUMsTUFBTXBCLFNBQ1RvQixFQUFFLENBQUMsZUFBZVQsU0FBU0ksSUFBSSxDQUFDTSxFQUFFLEVBQ2xDQyxNQUFNO1FBRVQsSUFBSUwsY0FBYyxDQUFDRCxXQUFXO1lBQzVCLE9BQU92QixxREFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFtQyxHQUM1QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsd0JBQXdCO1FBQ3hCLE9BQU9YLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFDdkJxQixPQUFPUDtZQUNQUSxTQUFTO1FBQ1g7SUFFRixFQUFFLE9BQU9yQixPQUFPO1FBQ2RzQixRQUFRdEIsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUEyQixHQUNwQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaS1mb29kLWRlbGl2ZXJ5Ly4vc3JjL2FwcC9hcGkvdmFsaWRhdGUtb3JkZXIvcm91dGUuanM/OTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL3N1cGFiYXNlLmpzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBHZXQgdGhlIG9yZGVySWQgZnJvbSBxdWVyeSBwYXJhbWV0ZXJzXHJcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgICBjb25zdCBvcmRlcklkID0gc2VhcmNoUGFyYW1zLmdldCgnb3JkZXJJZCcpO1xyXG5cclxuICAgIGlmICghb3JkZXJJZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ09yZGVyIElEIGlzIHJlcXVpcmVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgYXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICAgIGNvbnN0IGF1dGhIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdhdXRob3JpemF0aW9uJyk7XHJcbiAgICBpZiAoIWF1dGhIZWFkZXIgfHwgIWF1dGhIZWFkZXIuc3RhcnRzV2l0aCgnQmVhcmVyICcpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnQXV0aG9yaXphdGlvbiBoZWFkZXIgcmVxdWlyZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnN1YnN0cmluZyg3KTtcclxuXHJcbiAgICAvLyBWZXJpZnkgdGhlIHVzZXJcclxuICAgIGNvbnN0IHsgZGF0YTogdXNlckRhdGEsIGVycm9yOiB1c2VyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcih0b2tlbik7XHJcbiAgICBpZiAodXNlckVycm9yIHx8ICF1c2VyRGF0YS51c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnSW52YWxpZCBhdXRoZW50aWNhdGlvbiB0b2tlbicgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBRdWVyeSB0aGUgb3JkZXJzIHRhYmxlIHRvIGZpbmQgdGhlIG9yZGVyXHJcbiAgICBjb25zdCB7IGRhdGE6IG9yZGVyRGF0YSwgZXJyb3I6IG9yZGVyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdvcmRlcnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIG9yZGVySWQpXHJcbiAgICAgIC5lcSgnY3VzdG9tZXJfaWQnLCB1c2VyRGF0YS51c2VyLmlkKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKG9yZGVyRXJyb3IgfHwgIW9yZGVyRGF0YSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ09yZGVyIG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgb3JkZXIgZGF0YVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgb3JkZXI6IG9yZGVyRGF0YSxcclxuICAgICAgbWVzc2FnZTogJ09yZGVyIGZvdW5kIHN1Y2Nlc3NmdWxseSdcclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdmFsaWRhdGluZyBvcmRlcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gdmFsaWRhdGUgb3JkZXInIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXF1ZXN0IiwiTmV4dFJlc3BvbnNlIiwic3VwYWJhc2UiLCJHRVQiLCJyZXF1ZXN0Iiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwib3JkZXJJZCIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwic3RhcnRzV2l0aCIsInRva2VuIiwic3Vic3RyaW5nIiwiZGF0YSIsInVzZXJEYXRhIiwidXNlckVycm9yIiwiYXV0aCIsImdldFVzZXIiLCJ1c2VyIiwib3JkZXJEYXRhIiwib3JkZXJFcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsImlkIiwic2luZ2xlIiwib3JkZXIiLCJtZXNzYWdlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/validate-order/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvalidate-order%2Froute&page=%2Fapi%2Fvalidate-order%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvalidate-order%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();