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
exports.id = "app/api/driver/orders/route";
exports.ids = ["app/api/driver/orders/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdriver%2Forders%2Froute&page=%2Fapi%2Fdriver%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdriver%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdriver%2Forders%2Froute&page=%2Fapi%2Fdriver%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdriver%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Bevan_uni_food_delivery_src_app_api_driver_orders_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/driver/orders/route.js */ \"(rsc)/./src/app/api/driver/orders/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/driver/orders/route\",\n        pathname: \"/api/driver/orders\",\n        filename: \"route\",\n        bundlePath: \"app/api/driver/orders/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Bevan\\\\uni-food-delivery\\\\src\\\\app\\\\api\\\\driver\\\\orders\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Bevan_uni_food_delivery_src_app_api_driver_orders_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/driver/orders/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZkcml2ZXIlMkZvcmRlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmRyaXZlciUyRm9yZGVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmRyaXZlciUyRm9yZGVycyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0QjtBQUN6RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaS1mb29kLWRlbGl2ZXJ5Lz9hZjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEJldmFuXFxcXHVuaS1mb29kLWRlbGl2ZXJ5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGRyaXZlclxcXFxvcmRlcnNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2RyaXZlci9vcmRlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kcml2ZXIvb3JkZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9kcml2ZXIvb3JkZXJzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQmV2YW5cXFxcdW5pLWZvb2QtZGVsaXZlcnlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZHJpdmVyXFxcXG9yZGVyc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZHJpdmVyL29yZGVycy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdriver%2Forders%2Froute&page=%2Fapi%2Fdriver%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdriver%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/driver/orders/route.js":
/*!********************************************!*\
  !*** ./src/app/api/driver/orders/route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../supabase.js */ \"(rsc)/./src/app/api/supabase.js\");\n\n\nasync function GET(request) {\n    try {\n        // Get the authorization header\n        const authHeader = request.headers.get(\"authorization\");\n        if (!authHeader || !authHeader.startsWith(\"Bearer \")) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Authorization header required\"\n            }, {\n                status: 401\n            });\n        }\n        const token = authHeader.substring(7);\n        // Verify the user (driver authentication)\n        const { data: userData, error: userError } = await _supabase_js__WEBPACK_IMPORTED_MODULE_1__.supabase.auth.getUser(token);\n        if (userError || !userData.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid authentication token\"\n            }, {\n                status: 401\n            });\n        }\n        // Fetch orders from the database, excluding delivered ones initially\n        const { data: orders, error: ordersError } = await _supabase_js__WEBPACK_IMPORTED_MODULE_1__.supabase.from(\"orders\").select(\"*\").neq(\"status\", \"delivered\").order(\"created_at\", {\n            ascending: false\n        });\n        if (ordersError) {\n            console.error(\"Error fetching orders:\", ordersError);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Failed to fetch orders\"\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            orders: orders || [],\n            message: \"Active orders fetched successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error in driver orders API:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch orders\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kcml2ZXIvb3JkZXJzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUNYO0FBRXRDLGVBQWVHLElBQUlDLE9BQU87SUFDL0IsSUFBSTtRQUNGLCtCQUErQjtRQUMvQixNQUFNQyxhQUFhRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUNGLGNBQWMsQ0FBQ0EsV0FBV0csVUFBVSxDQUFDLFlBQVk7WUFDcEQsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBZ0MsR0FDekM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1DLFFBQVFQLFdBQVdRLFNBQVMsQ0FBQztRQUVuQywwQ0FBMEM7UUFDMUMsTUFBTSxFQUFFQyxNQUFNQyxRQUFRLEVBQUVMLE9BQU9NLFNBQVMsRUFBRSxHQUFHLE1BQU1kLGtEQUFRQSxDQUFDZSxJQUFJLENBQUNDLE9BQU8sQ0FBQ047UUFDekUsSUFBSUksYUFBYSxDQUFDRCxTQUFTSSxJQUFJLEVBQUU7WUFDL0IsT0FBT2xCLHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQStCLEdBQ3hDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxxRUFBcUU7UUFDckUsTUFBTSxFQUFFRyxNQUFNTSxNQUFNLEVBQUVWLE9BQU9XLFdBQVcsRUFBRSxHQUFHLE1BQU1uQixrREFBUUEsQ0FDeERvQixJQUFJLENBQUMsVUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEdBQUcsQ0FBQyxVQUFVLGFBQ2RDLEtBQUssQ0FBQyxjQUFjO1lBQUVDLFdBQVc7UUFBTTtRQUUxQyxJQUFJTCxhQUFhO1lBQ2ZNLFFBQVFqQixLQUFLLENBQUMsMEJBQTBCVztZQUN4QyxPQUFPcEIscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBeUIsR0FDbEM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU9WLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFDdkJXLFFBQVFBLFVBQVUsRUFBRTtZQUNwQlEsU0FBUztRQUNYO0lBRUYsRUFBRSxPQUFPbEIsT0FBTztRQUNkaUIsUUFBUWpCLEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBeUIsR0FDbEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmktZm9vZC1kZWxpdmVyeS8uL3NyYy9hcHAvYXBpL2RyaXZlci9vcmRlcnMvcm91dGUuanM/YTAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uLy4uL3N1cGFiYXNlLmpzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBHZXQgdGhlIGF1dGhvcml6YXRpb24gaGVhZGVyXHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnYXV0aG9yaXphdGlvbicpO1xyXG4gICAgaWYgKCFhdXRoSGVhZGVyIHx8ICFhdXRoSGVhZGVyLnN0YXJ0c1dpdGgoJ0JlYXJlciAnKSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ0F1dGhvcml6YXRpb24gaGVhZGVyIHJlcXVpcmVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gYXV0aEhlYWRlci5zdWJzdHJpbmcoNyk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IHRoZSB1c2VyIChkcml2ZXIgYXV0aGVudGljYXRpb24pXHJcbiAgICBjb25zdCB7IGRhdGE6IHVzZXJEYXRhLCBlcnJvcjogdXNlckVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIodG9rZW4pO1xyXG4gICAgaWYgKHVzZXJFcnJvciB8fCAhdXNlckRhdGEudXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ0ludmFsaWQgYXV0aGVudGljYXRpb24gdG9rZW4nIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV0Y2ggb3JkZXJzIGZyb20gdGhlIGRhdGFiYXNlLCBleGNsdWRpbmcgZGVsaXZlcmVkIG9uZXMgaW5pdGlhbGx5XHJcbiAgICBjb25zdCB7IGRhdGE6IG9yZGVycywgZXJyb3I6IG9yZGVyc0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnb3JkZXJzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5uZXEoJ3N0YXR1cycsICdkZWxpdmVyZWQnKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gICAgaWYgKG9yZGVyc0Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9yZGVyczonLCBvcmRlcnNFcnJvcik7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIG9yZGVycycgfSxcclxuICAgICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBvcmRlcnM6IG9yZGVycyB8fCBbXSxcclxuICAgICAgbWVzc2FnZTogJ0FjdGl2ZSBvcmRlcnMgZmV0Y2hlZCBzdWNjZXNzZnVsbHknXHJcbiAgICB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGRyaXZlciBvcmRlcnMgQVBJOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBvcmRlcnMnIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXF1ZXN0IiwiTmV4dFJlc3BvbnNlIiwic3VwYWJhc2UiLCJHRVQiLCJyZXF1ZXN0IiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJzdGFydHNXaXRoIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidG9rZW4iLCJzdWJzdHJpbmciLCJkYXRhIiwidXNlckRhdGEiLCJ1c2VyRXJyb3IiLCJhdXRoIiwiZ2V0VXNlciIsInVzZXIiLCJvcmRlcnMiLCJvcmRlcnNFcnJvciIsImZyb20iLCJzZWxlY3QiLCJuZXEiLCJvcmRlciIsImFzY2VuZGluZyIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/driver/orders/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/supabase.js":
/*!*********************************!*\
  !*** ./src/app/api/supabase.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   supabasePublic: () => (/* binding */ supabasePublic)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://worungtggwywlkorzajo.supabase.co\";\nconst supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcnVuZ3RnZ3d5d2xrb3J6YWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwODQ4MDcsImV4cCI6MjA3MDY2MDgwN30.rGwvkAK8-vHCQ7rgRDpfttd4PZVnCWqi0vgUmE62-P8\";\nconsole.log(\"Supabase config check:\", {\n    hasUrl: !!supabaseUrl,\n    hasServiceKey: !!supabaseServiceKey,\n    hasAnonKey: !!supabaseAnonKey,\n    urlLength: supabaseUrl?.length || 0\n});\nif (!supabaseUrl || !supabaseServiceKey) {\n    throw new Error(\"Missing Supabase environment variables\");\n}\nif (!supabaseAnonKey) {\n    throw new Error(\"Missing Supabase anon key for public client\");\n}\n// Create Supabase client with service role key for server-side operations\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseServiceKey, {\n    auth: {\n        autoRefreshToken: false,\n        persistSession: false\n    }\n});\n// Create public client for client-side operations\nconst supabasePublic = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdXBhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLHFCQUFxQkgsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUI7QUFDaEUsTUFBTUMsa0JBQWtCTCxrTkFBeUM7QUFFakVPLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEI7SUFDcENDLFFBQVEsQ0FBQyxDQUFDVjtJQUNWVyxlQUFlLENBQUMsQ0FBQ1A7SUFDakJRLFlBQVksQ0FBQyxDQUFDTjtJQUNkTyxXQUFXYixhQUFhYyxVQUFVO0FBQ3BDO0FBRUEsSUFBSSxDQUFDZCxlQUFlLENBQUNJLG9CQUFvQjtJQUN2QyxNQUFNLElBQUlXLE1BQU07QUFDbEI7QUFFQSxJQUFJLENBQUNULGlCQUFpQjtJQUNwQixNQUFNLElBQUlTLE1BQU07QUFDbEI7QUFFQSwwRUFBMEU7QUFDbkUsTUFBTUMsV0FBV2pCLG1FQUFZQSxDQUFDQyxhQUFhSSxvQkFBb0I7SUFDcEVhLE1BQU07UUFDSkMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0I7SUFDbEI7QUFDRixHQUFFO0FBRUYsa0RBQWtEO0FBQzNDLE1BQU1DLGlCQUFpQnJCLG1FQUFZQSxDQUFDQyxhQUFhTSxpQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmktZm9vZC1kZWxpdmVyeS8uL3NyYy9hcHAvYXBpL3N1cGFiYXNlLmpzP2Q4ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcclxuY29uc3Qgc3VwYWJhc2VTZXJ2aWNlS2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWVxyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWVxyXG5cclxuY29uc29sZS5sb2coJ1N1cGFiYXNlIGNvbmZpZyBjaGVjazonLCB7XHJcbiAgaGFzVXJsOiAhIXN1cGFiYXNlVXJsLFxyXG4gIGhhc1NlcnZpY2VLZXk6ICEhc3VwYWJhc2VTZXJ2aWNlS2V5LFxyXG4gIGhhc0Fub25LZXk6ICEhc3VwYWJhc2VBbm9uS2V5LFxyXG4gIHVybExlbmd0aDogc3VwYWJhc2VVcmw/Lmxlbmd0aCB8fCAwXHJcbn0pXHJcblxyXG5pZiAoIXN1cGFiYXNlVXJsIHx8ICFzdXBhYmFzZVNlcnZpY2VLZXkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgU3VwYWJhc2UgZW52aXJvbm1lbnQgdmFyaWFibGVzJylcclxufVxyXG5cclxuaWYgKCFzdXBhYmFzZUFub25LZXkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgU3VwYWJhc2UgYW5vbiBrZXkgZm9yIHB1YmxpYyBjbGllbnQnKVxyXG59XHJcblxyXG4vLyBDcmVhdGUgU3VwYWJhc2UgY2xpZW50IHdpdGggc2VydmljZSByb2xlIGtleSBmb3Igc2VydmVyLXNpZGUgb3BlcmF0aW9uc1xyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZUtleSwge1xyXG4gIGF1dGg6IHtcclxuICAgIGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLFxyXG4gICAgcGVyc2lzdFNlc3Npb246IGZhbHNlXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQ3JlYXRlIHB1YmxpYyBjbGllbnQgZm9yIGNsaWVudC1zaWRlIG9wZXJhdGlvbnNcclxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlUHVibGljID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZVNlcnZpY2VLZXkiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwic3VwYWJhc2VBbm9uS2V5IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJjb25zb2xlIiwibG9nIiwiaGFzVXJsIiwiaGFzU2VydmljZUtleSIsImhhc0Fub25LZXkiLCJ1cmxMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciIsInN1cGFiYXNlIiwiYXV0aCIsImF1dG9SZWZyZXNoVG9rZW4iLCJwZXJzaXN0U2Vzc2lvbiIsInN1cGFiYXNlUHVibGljIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/supabase.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdriver%2Forders%2Froute&page=%2Fapi%2Fdriver%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdriver%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();