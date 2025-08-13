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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Bevan_uni_food_delivery_src_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/login/route.js */ \"(rsc)/./src/app/api/auth/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Bevan\\\\uni-food-delivery\\\\src\\\\app\\\\api\\\\auth\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Bevan_uni_food_delivery_src_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN5QjtBQUN0RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaS1mb29kLWRlbGl2ZXJ5Lz84MTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEJldmFuXFxcXHVuaS1mb29kLWRlbGl2ZXJ5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQmV2YW5cXFxcdW5pLWZvb2QtZGVsaXZlcnlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/login/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/auth/login/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../supabase.js */ \"(rsc)/./src/app/api/supabase.js\");\n\n\nasync function POST(request) {\n    try {\n        const { email, password } = await request.json();\n        // Validate required fields\n        if (!email || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Email and password are required\"\n            }, {\n                status: 400\n            });\n        }\n        // Authenticate with Supabase using public client\n        const { data, error } = await _supabase_js__WEBPACK_IMPORTED_MODULE_1__.supabasePublic.auth.signInWithPassword({\n            email,\n            password\n        });\n        if (error) {\n            console.error(\"Login error:\", error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: error.message || \"Authentication failed\"\n            }, {\n                status: 401\n            });\n        }\n        if (!data.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User not found\"\n            }, {\n                status: 401\n            });\n        }\n        // Get user profile data using service role client for database access\n        const { supabase } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../supabase.js */ \"(rsc)/./src/app/api/supabase.js\"));\n        const { data: profileData, error: profileError } = await supabase.from(\"profiles\").select(\"*\").eq(\"id\", data.user.id).single();\n        // Return user data with tokens\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: {\n                id: data.user.id,\n                email: data.user.email,\n                firstName: profileData?.first_name || data.user.user_metadata?.firstName,\n                lastName: profileData?.last_name || data.user.user_metadata?.lastName,\n                phone: profileData?.phone || data.user.user_metadata?.phone\n            },\n            accessToken: data.session?.access_token,\n            refreshToken: data.session?.refresh_token\n        });\n    } catch (error) {\n        console.error(\"Login error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error during login\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RDtBQUNMO0FBRTNDLGVBQWVHLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBRTlDLDJCQUEyQjtRQUMzQixJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsVUFBVTtZQUN2QixPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUN2QkMsT0FBTztZQUNULEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuQjtRQUVBLGlEQUFpRDtRQUNqRCxNQUFNLEVBQUVDLElBQUksRUFBRUYsS0FBSyxFQUFFLEdBQUcsTUFBTU4sd0RBQWNBLENBQUNTLElBQUksQ0FBQ0Msa0JBQWtCLENBQUM7WUFDbkVQO1lBQ0FDO1FBQ0Y7UUFFQSxJQUFJRSxPQUFPO1lBQ1RLLFFBQVFMLEtBQUssQ0FBQyxnQkFBZ0JBO1lBQzlCLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQ3ZCQyxPQUFPQSxNQUFNTSxPQUFPLElBQUk7WUFDMUIsR0FBRztnQkFBRUwsUUFBUTtZQUFJO1FBQ25CO1FBRUEsSUFBSSxDQUFDQyxLQUFLSyxJQUFJLEVBQUU7WUFDZCxPQUFPZCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUN2QkMsT0FBTztZQUNULEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuQjtRQUVBLHNFQUFzRTtRQUN0RSxNQUFNLEVBQUVPLFFBQVEsRUFBRSxHQUFHLE1BQU0sZ0pBQU87UUFDbEMsTUFBTSxFQUFFTixNQUFNTyxXQUFXLEVBQUVULE9BQU9VLFlBQVksRUFBRSxHQUFHLE1BQU1GLFNBQ3RERyxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxNQUFNWCxLQUFLSyxJQUFJLENBQUNPLEVBQUUsRUFDckJDLE1BQU07UUFFVCwrQkFBK0I7UUFDL0IsT0FBT3RCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFDdkJRLE1BQU07Z0JBQ0pPLElBQUlaLEtBQUtLLElBQUksQ0FBQ08sRUFBRTtnQkFDaEJqQixPQUFPSyxLQUFLSyxJQUFJLENBQUNWLEtBQUs7Z0JBQ3RCbUIsV0FBV1AsYUFBYVEsY0FBY2YsS0FBS0ssSUFBSSxDQUFDVyxhQUFhLEVBQUVGO2dCQUMvREcsVUFBVVYsYUFBYVcsYUFBYWxCLEtBQUtLLElBQUksQ0FBQ1csYUFBYSxFQUFFQztnQkFDN0RFLE9BQU9aLGFBQWFZLFNBQVNuQixLQUFLSyxJQUFJLENBQUNXLGFBQWEsRUFBRUc7WUFDeEQ7WUFDQUMsYUFBYXBCLEtBQUtxQixPQUFPLEVBQUVDO1lBQzNCQyxjQUFjdkIsS0FBS3FCLE9BQU8sRUFBRUc7UUFDOUI7SUFFRixFQUFFLE9BQU8xQixPQUFPO1FBQ2RLLFFBQVFMLEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFDdkJDLE9BQU87UUFDVCxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pLWZvb2QtZGVsaXZlcnkvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLmpzPzIwOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBzdXBhYmFzZVB1YmxpYyB9IGZyb20gJy4uLy4uL3N1cGFiYXNlLmpzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcclxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxyXG4gICAgICAgIGVycm9yOiAnRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZCcgXHJcbiAgICAgIH0sIHsgc3RhdHVzOiA0MDAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdXRoZW50aWNhdGUgd2l0aCBTdXBhYmFzZSB1c2luZyBwdWJsaWMgY2xpZW50XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVB1YmxpYy5hdXRoLnNpZ25JbldpdGhQYXNzd29yZCh7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnQXV0aGVudGljYXRpb24gZmFpbGVkJyBcclxuICAgICAgfSwgeyBzdGF0dXM6IDQwMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGF0YS51c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxyXG4gICAgICAgIGVycm9yOiAnVXNlciBub3QgZm91bmQnIFxyXG4gICAgICB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHVzZXIgcHJvZmlsZSBkYXRhIHVzaW5nIHNlcnZpY2Ugcm9sZSBjbGllbnQgZm9yIGRhdGFiYXNlIGFjY2Vzc1xyXG4gICAgY29uc3QgeyBzdXBhYmFzZSB9ID0gYXdhaXQgaW1wb3J0KCcuLi8uLi9zdXBhYmFzZS5qcycpXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVEYXRhLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIGRhdGEudXNlci5pZClcclxuICAgICAgLnNpbmdsZSgpXHJcblxyXG4gICAgLy8gUmV0dXJuIHVzZXIgZGF0YSB3aXRoIHRva2Vuc1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGlkOiBkYXRhLnVzZXIuaWQsXHJcbiAgICAgICAgZW1haWw6IGRhdGEudXNlci5lbWFpbCxcclxuICAgICAgICBmaXJzdE5hbWU6IHByb2ZpbGVEYXRhPy5maXJzdF9uYW1lIHx8IGRhdGEudXNlci51c2VyX21ldGFkYXRhPy5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHByb2ZpbGVEYXRhPy5sYXN0X25hbWUgfHwgZGF0YS51c2VyLnVzZXJfbWV0YWRhdGE/Lmxhc3ROYW1lLFxyXG4gICAgICAgIHBob25lOiBwcm9maWxlRGF0YT8ucGhvbmUgfHwgZGF0YS51c2VyLnVzZXJfbWV0YWRhdGE/LnBob25lLFxyXG4gICAgICB9LFxyXG4gICAgICBhY2Nlc3NUb2tlbjogZGF0YS5zZXNzaW9uPy5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgIHJlZnJlc2hUb2tlbjogZGF0YS5zZXNzaW9uPy5yZWZyZXNoX3Rva2VuLFxyXG4gICAgfSlcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXHJcbiAgICAgIGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yIGR1cmluZyBsb2dpbicgXHJcbiAgICB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVxdWVzdCIsIk5leHRSZXNwb25zZSIsInN1cGFiYXNlUHVibGljIiwiUE9TVCIsInJlcXVlc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZGF0YSIsImF1dGgiLCJzaWduSW5XaXRoUGFzc3dvcmQiLCJjb25zb2xlIiwibWVzc2FnZSIsInVzZXIiLCJzdXBhYmFzZSIsInByb2ZpbGVEYXRhIiwicHJvZmlsZUVycm9yIiwiZnJvbSIsInNlbGVjdCIsImVxIiwiaWQiLCJzaW5nbGUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwidXNlcl9tZXRhZGF0YSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwicGhvbmUiLCJhY2Nlc3NUb2tlbiIsInNlc3Npb24iLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/login/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/supabase.js":
/*!*********************************!*\
  !*** ./src/app/api/supabase.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   supabasePublic: () => (/* binding */ supabasePublic)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://worungtggwywlkorzajo.supabase.co\";\nconst supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;\nif (!supabaseUrl || !supabaseServiceKey) {\n    throw new Error(\"Missing Supabase environment variables\");\n}\n// Create Supabase client with service role key for server-side operations\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseServiceKey, {\n    auth: {\n        autoRefreshToken: false,\n        persistSession: false\n    }\n});\n// Create public client for client-side operations\nconst supabasePublic = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://worungtggwywlkorzajo.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcnVuZ3RnZ3d5d2xrb3J6YWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwODQ4MDcsImV4cCI6MjA3MDY2MDgwN30.rGwvkAK8-vHCQ7rgRDpfttd4PZVnCWqi0vgUmE62-P8\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdXBhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLHFCQUFxQkgsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUI7QUFFaEUsSUFBSSxDQUFDTCxlQUFlLENBQUNJLG9CQUFvQjtJQUN2QyxNQUFNLElBQUlFLE1BQU07QUFDbEI7QUFFQSwwRUFBMEU7QUFDbkUsTUFBTUMsV0FBV1IsbUVBQVlBLENBQUNDLGFBQWFJLG9CQUFvQjtJQUNwRUksTUFBTTtRQUNKQyxrQkFBa0I7UUFDbEJDLGdCQUFnQjtJQUNsQjtBQUNGLEdBQUU7QUFFRixrREFBa0Q7QUFDM0MsTUFBTUMsaUJBQWlCWixtRUFBWUEsQ0FDeENFLDBDQUFvQyxFQUNwQ0Esa05BQXlDLEVBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pLWZvb2QtZGVsaXZlcnkvLi9zcmMvYXBwL2FwaS9zdXBhYmFzZS5qcz9kOGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMXHJcbmNvbnN0IHN1cGFiYXNlU2VydmljZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVlcclxuXHJcbmlmICghc3VwYWJhc2VVcmwgfHwgIXN1cGFiYXNlU2VydmljZUtleSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBTdXBhYmFzZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMnKVxyXG59XHJcblxyXG4vLyBDcmVhdGUgU3VwYWJhc2UgY2xpZW50IHdpdGggc2VydmljZSByb2xlIGtleSBmb3Igc2VydmVyLXNpZGUgb3BlcmF0aW9uc1xyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZUtleSwge1xyXG4gIGF1dGg6IHtcclxuICAgIGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLFxyXG4gICAgcGVyc2lzdFNlc3Npb246IGZhbHNlXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQ3JlYXRlIHB1YmxpYyBjbGllbnQgZm9yIGNsaWVudC1zaWRlIG9wZXJhdGlvbnNcclxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlUHVibGljID0gY3JlYXRlQ2xpZW50KFxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCxcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWVxyXG4pXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZVNlcnZpY2VLZXkiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwiRXJyb3IiLCJzdXBhYmFzZSIsImF1dGgiLCJhdXRvUmVmcmVzaFRva2VuIiwicGVyc2lzdFNlc3Npb24iLCJzdXBhYmFzZVB1YmxpYyIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/supabase.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();