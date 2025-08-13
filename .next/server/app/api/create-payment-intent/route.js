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
exports.id = "app/api/create-payment-intent/route";
exports.ids = ["app/api/create-payment-intent/route"];
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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Bevan_uni_food_delivery_src_app_api_create_payment_intent_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/create-payment-intent/route.js */ \"(rsc)/./src/app/api/create-payment-intent/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/create-payment-intent/route\",\n        pathname: \"/api/create-payment-intent\",\n        filename: \"route\",\n        bundlePath: \"app/api/create-payment-intent/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Bevan\\\\uni-food-delivery\\\\src\\\\app\\\\api\\\\create-payment-intent\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Bevan_uni_food_delivery_src_app_api_create_payment_intent_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/create-payment-intent/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjcmVhdGUtcGF5bWVudC1pbnRlbnQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNyZWF0ZS1wYXltZW50LWludGVudCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNyZWF0ZS1wYXltZW50LWludGVudCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNCZXZhbiU1Q3VuaS1mb29kLWRlbGl2ZXJ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNtQztBQUNoSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaS1mb29kLWRlbGl2ZXJ5Lz81MGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEJldmFuXFxcXHVuaS1mb29kLWRlbGl2ZXJ5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNyZWF0ZS1wYXltZW50LWludGVudFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY3JlYXRlLXBheW1lbnQtaW50ZW50L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY3JlYXRlLXBheW1lbnQtaW50ZW50XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxCZXZhblxcXFx1bmktZm9vZC1kZWxpdmVyeVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjcmVhdGUtcGF5bWVudC1pbnRlbnRcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NyZWF0ZS1wYXltZW50LWludGVudC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/create-payment-intent/route.js":
/*!****************************************************!*\
  !*** ./src/app/api/create-payment-intent/route.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2023-10-16\"\n});\nasync function POST(request) {\n    try {\n        const { items, total } = await request.json();\n        if (!items || !Array.isArray(items) || items.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid items array\"\n            }, {\n                status: 400\n            });\n        }\n        if (!total || typeof total !== \"number\" || total <= 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid total amount\"\n            }, {\n                status: 400\n            });\n        }\n        // Step 2: Backend validates prices against items\n        const calculatedTotal = items.reduce((sum, item)=>{\n            const itemTotal = item.totalPrice || item.price * item.quantity;\n            return sum + itemTotal;\n        }, 0);\n        // Add delivery fee\n        const finalTotal = calculatedTotal + 2.99; // $2.99 delivery fee\n        // Validate that client-calculated total matches server-calculated total\n        if (Math.abs(total - finalTotal) > 0.01) {\n            console.error(\"Price mismatch:\", {\n                clientTotal: total,\n                serverTotal: finalTotal\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Price validation failed\"\n            }, {\n                status: 400\n            });\n        }\n        // Convert to cents for Stripe\n        const amountInCents = Math.round(finalTotal * 100);\n        // Create PaymentIntent\n        const paymentIntent = await stripe.paymentIntents.create({\n            amount: amountInCents,\n            currency: \"aud\",\n            metadata: {\n                items_count: items.length.toString(),\n                delivery_fee: \"2.99\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            clientSecret: paymentIntent.client_secret,\n            paymentIntentId: paymentIntent.id,\n            amount: finalTotal\n        });\n    } catch (error) {\n        console.error(\"Error creating payment intent:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create payment intent\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQzVCO0FBRTVCLE1BQU1HLFNBQVMsSUFBSUQsOENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQUU7SUFDdkRDLFlBQVk7QUFDZDtBQUVPLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBRTNDLElBQUksQ0FBQ0YsU0FBUyxDQUFDRyxNQUFNQyxPQUFPLENBQUNKLFVBQVVBLE1BQU1LLE1BQU0sS0FBSyxHQUFHO1lBQ3pELE9BQU9kLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO2dCQUFFSSxPQUFPO1lBQXNCLEdBQy9CO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxJQUFJLENBQUNOLFNBQVMsT0FBT0EsVUFBVSxZQUFZQSxTQUFTLEdBQUc7WUFDckQsT0FBT1YscURBQVlBLENBQUNXLElBQUksQ0FDdEI7Z0JBQUVJLE9BQU87WUFBdUIsR0FDaEM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGlEQUFpRDtRQUNqRCxNQUFNQyxrQkFBa0JSLE1BQU1TLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztZQUN6QyxNQUFNQyxZQUFZRCxLQUFLRSxVQUFVLElBQUtGLEtBQUtHLEtBQUssR0FBR0gsS0FBS0ksUUFBUTtZQUNoRSxPQUFPTCxNQUFNRTtRQUNmLEdBQUc7UUFFSCxtQkFBbUI7UUFDbkIsTUFBTUksYUFBYVIsa0JBQWtCLE1BQU0scUJBQXFCO1FBRWhFLHdFQUF3RTtRQUN4RSxJQUFJUyxLQUFLQyxHQUFHLENBQUNqQixRQUFRZSxjQUFjLE1BQU07WUFDdkNHLFFBQVFiLEtBQUssQ0FBQyxtQkFBbUI7Z0JBQUVjLGFBQWFuQjtnQkFBT29CLGFBQWFMO1lBQVc7WUFDL0UsT0FBT3pCLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO2dCQUFFSSxPQUFPO1lBQTBCLEdBQ25DO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSw4QkFBOEI7UUFDOUIsTUFBTWUsZ0JBQWdCTCxLQUFLTSxLQUFLLENBQUNQLGFBQWE7UUFFOUMsdUJBQXVCO1FBQ3ZCLE1BQU1RLGdCQUFnQixNQUFNL0IsT0FBT2dDLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3ZEQyxRQUFRTDtZQUNSTSxVQUFVO1lBQ1ZDLFVBQVU7Z0JBQ1JDLGFBQWE5QixNQUFNSyxNQUFNLENBQUMwQixRQUFRO2dCQUNsQ0MsY0FBYztZQUNoQjtRQUNGO1FBRUEsT0FBT3pDLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFDdkIrQixjQUFjVCxjQUFjVSxhQUFhO1lBQ3pDQyxpQkFBaUJYLGNBQWNZLEVBQUU7WUFDakNULFFBQVFYO1FBQ1Y7SUFFRixFQUFFLE9BQU9WLE9BQU87UUFDZGEsUUFBUWIsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDaEQsT0FBT2YscURBQVlBLENBQUNXLElBQUksQ0FDdEI7WUFBRUksT0FBTztRQUFrQyxHQUMzQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaS1mb29kLWRlbGl2ZXJ5Ly4vc3JjL2FwcC9hcGkvY3JlYXRlLXBheW1lbnQtaW50ZW50L3JvdXRlLmpzP2IwZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xyXG5cclxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSwge1xyXG4gIGFwaVZlcnNpb246ICcyMDIzLTEwLTE2JyxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAoIWl0ZW1zIHx8ICFBcnJheS5pc0FycmF5KGl0ZW1zKSB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdJbnZhbGlkIGl0ZW1zIGFycmF5JyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdG90YWwgfHwgdHlwZW9mIHRvdGFsICE9PSAnbnVtYmVyJyB8fCB0b3RhbCA8PSAwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnSW52YWxpZCB0b3RhbCBhbW91bnQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RlcCAyOiBCYWNrZW5kIHZhbGlkYXRlcyBwcmljZXMgYWdhaW5zdCBpdGVtc1xyXG4gICAgY29uc3QgY2FsY3VsYXRlZFRvdGFsID0gaXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgaXRlbVRvdGFsID0gaXRlbS50b3RhbFByaWNlIHx8IChpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSk7XHJcbiAgICAgIHJldHVybiBzdW0gKyBpdGVtVG90YWw7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICAvLyBBZGQgZGVsaXZlcnkgZmVlXHJcbiAgICBjb25zdCBmaW5hbFRvdGFsID0gY2FsY3VsYXRlZFRvdGFsICsgMi45OTsgLy8gJDIuOTkgZGVsaXZlcnkgZmVlXHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhhdCBjbGllbnQtY2FsY3VsYXRlZCB0b3RhbCBtYXRjaGVzIHNlcnZlci1jYWxjdWxhdGVkIHRvdGFsXHJcbiAgICBpZiAoTWF0aC5hYnModG90YWwgLSBmaW5hbFRvdGFsKSA+IDAuMDEpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUHJpY2UgbWlzbWF0Y2g6JywgeyBjbGllbnRUb3RhbDogdG90YWwsIHNlcnZlclRvdGFsOiBmaW5hbFRvdGFsIH0pO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ1ByaWNlIHZhbGlkYXRpb24gZmFpbGVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgdG8gY2VudHMgZm9yIFN0cmlwZVxyXG4gICAgY29uc3QgYW1vdW50SW5DZW50cyA9IE1hdGgucm91bmQoZmluYWxUb3RhbCAqIDEwMCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIFBheW1lbnRJbnRlbnRcclxuICAgIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcclxuICAgICAgYW1vdW50OiBhbW91bnRJbkNlbnRzLFxyXG4gICAgICBjdXJyZW5jeTogJ2F1ZCcsXHJcbiAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgaXRlbXNfY291bnQ6IGl0ZW1zLmxlbmd0aC50b1N0cmluZygpLFxyXG4gICAgICAgIGRlbGl2ZXJ5X2ZlZTogJzIuOTknLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgY2xpZW50U2VjcmV0OiBwYXltZW50SW50ZW50LmNsaWVudF9zZWNyZXQsXHJcbiAgICAgIHBheW1lbnRJbnRlbnRJZDogcGF5bWVudEludGVudC5pZCxcclxuICAgICAgYW1vdW50OiBmaW5hbFRvdGFsLFxyXG4gICAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwYXltZW50IGludGVudDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHBheW1lbnQgaW50ZW50JyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVxdWVzdCIsIk5leHRSZXNwb25zZSIsIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iLCJQT1NUIiwicmVxdWVzdCIsIml0ZW1zIiwidG90YWwiLCJqc29uIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXJyb3IiLCJzdGF0dXMiLCJjYWxjdWxhdGVkVG90YWwiLCJyZWR1Y2UiLCJzdW0iLCJpdGVtIiwiaXRlbVRvdGFsIiwidG90YWxQcmljZSIsInByaWNlIiwicXVhbnRpdHkiLCJmaW5hbFRvdGFsIiwiTWF0aCIsImFicyIsImNvbnNvbGUiLCJjbGllbnRUb3RhbCIsInNlcnZlclRvdGFsIiwiYW1vdW50SW5DZW50cyIsInJvdW5kIiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJtZXRhZGF0YSIsIml0ZW1zX2NvdW50IiwidG9TdHJpbmciLCJkZWxpdmVyeV9mZWUiLCJjbGllbnRTZWNyZXQiLCJjbGllbnRfc2VjcmV0IiwicGF5bWVudEludGVudElkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/create-payment-intent/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/get-intrinsic","vendor-chunks/side-channel-list","vendor-chunks/side-channel-weakmap","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/side-channel-map","vendor-chunks/side-channel","vendor-chunks/get-proto","vendor-chunks/call-bind-apply-helpers","vendor-chunks/dunder-proto","vendor-chunks/math-intrinsics","vendor-chunks/call-bound","vendor-chunks/es-errors","vendor-chunks/gopd","vendor-chunks/es-define-property","vendor-chunks/hasown","vendor-chunks/es-object-atoms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.js&appDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBevan%5Cuni-food-delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();