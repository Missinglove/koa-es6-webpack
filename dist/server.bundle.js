/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"this is  a js文件 !!!\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxHQUFULEVBQWM7QUFDM0JBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1AsZUFBVztBQURKLEdBQVg7QUFHSCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2FwaS9hLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjdHgpIHtcclxuICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgIFwibWVzc2FnZVwiOiBcInRoaXMgaXMgIGEganPmlofku7YgISEhXCJcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"this is  b js文件\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxHQUFULEVBQWM7QUFDM0JBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1AsZUFBVztBQURKLEdBQVg7QUFHSCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2FwaS9iLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjdHgpIHtcclxuICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgIFwibWVzc2FnZVwiOiBcInRoaXMgaXMgIGIganPmlofku7ZcIlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst app = new koa();\n\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n\nconst router = __webpack_require__(/*! ./route/routes */ \"./src/route/routes.js\");\n\napp.use(helmet()); //启用安全帽\n\napp.use(statics(path.join(__dirname, './public'))); //拼接路径\n\napp.use(router()); //启用路由\n\napp.listen(3000); //监听端口\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJrb2EiLCJyZXF1aXJlIiwicGF0aCIsInN0YXRpY3MiLCJhcHAiLCJoZWxtZXQiLCJyb3V0ZXIiLCJ1c2UiLCJqb2luIiwiX19kaXJuYW1lIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiQUFBQSx1REFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUVBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQSxNQUFNRSxPQUFPLEdBQUdGLG1CQUFPLENBQUMsOEJBQUQsQ0FBdkI7O0FBRUEsTUFBTUcsR0FBRyxHQUFHLElBQUlKLEdBQUosRUFBWjs7QUFFQSxNQUFNSyxNQUFNLEdBQUdKLG1CQUFPLENBQUMsOEJBQUQsQ0FBdEI7O0FBRUEsTUFBTUssTUFBTSxHQUFHTCxtQkFBTyxDQUFDLDZDQUFELENBQXRCOztBQUVBRyxHQUFHLENBQUNHLEdBQUosQ0FBUUYsTUFBTSxFQUFkLEUsQ0FBbUI7O0FBRW5CRCxHQUFHLENBQUNHLEdBQUosQ0FBUUosT0FBTyxDQUFDRCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsU0FBVixFQUFxQixVQUFyQixDQUFELENBQWYsRSxDQUFtRDs7QUFFbkRMLEdBQUcsQ0FBQ0csR0FBSixDQUFRRCxNQUFNLEVBQWQsRSxDQUFtQjs7QUFFbkJGLEdBQUcsQ0FBQ00sTUFBSixDQUFXLElBQVgsRSxDQUFrQixNIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga29hID0gcmVxdWlyZSgna29hJyk7XHJcblxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuY29uc3Qgc3RhdGljcyA9IHJlcXVpcmUoJ2tvYS1zdGF0aWMnKTtcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBrb2EoKTtcclxuXHJcbmNvbnN0IGhlbG1ldCA9IHJlcXVpcmUoJ2tvYS1oZWxtZXQnKTtcclxuXHJcbmNvbnN0IHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGUvcm91dGVzJyk7XHJcblxyXG5hcHAudXNlKGhlbG1ldCgpKTsgLy/lkK/nlKjlronlhajluL1cclxuXHJcbmFwcC51c2Uoc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9wdWJsaWMnKSkpIC8v5ou85o6l6Lev5b6EXHJcblxyXG5hcHAudXNlKHJvdXRlcigpKTsgLy/lkK/nlKjot6/nlLFcclxuXHJcbmFwcC5saXN0ZW4oMzAwMCk7IC8v55uR5ZCs56uv5Y+jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/route/aRoutes.js":
/*!******************************!*\
  !*** ./src/route/aRoutes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGUvYVJvdXRlcy5qcz82ZTNiIl0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJhIiwicm91dGVyIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQXRCOztBQUVBLE1BQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFqQjs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUgsTUFBSixFQUFmO0FBRUFHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLElBQVgsRUFBaUJGLENBQWpCO0FBRUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiLi9zcmMvcm91dGUvYVJvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ0Brb2Evcm91dGVyJyk7XHJcblxyXG5jb25zdCBhID0gcmVxdWlyZSgnLi4vYXBpL2EnKTtcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy9hJywgYSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/route/aRoutes.js\n");

/***/ }),

/***/ "./src/route/bRoutes.js":
/*!******************************!*\
  !*** ./src/route/bRoutes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGUvYlJvdXRlcy5qcz9kNTIzIl0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJiIiwicm91dGVyIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQXRCOztBQUVBLE1BQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFqQjs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUgsTUFBSixFQUFmO0FBRUFHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLElBQVgsRUFBaUJGLENBQWpCO0FBRUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiLi9zcmMvcm91dGUvYlJvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ0Brb2Evcm91dGVyJyk7XHJcblxyXG5jb25zdCBiID0gcmVxdWlyZSgnLi4vYXBpL2InKTtcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy9iJywgYik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/route/bRoutes.js\n");

/***/ }),

/***/ "./src/route/routes.js":
/*!*****************************!*\
  !*** ./src/route/routes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combine = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aRoutes = __webpack_require__(/*! ./aRoutes */ \"./src/route/aRoutes.js\");\n\nconst bRoutes = __webpack_require__(/*! ./bRoutes */ \"./src/route/bRoutes.js\");\n\nmodule.exports = combine(aRoutes, bRoutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGUvcm91dGVzLmpzPzg3MmMiXSwibmFtZXMiOlsiY29tYmluZSIsInJlcXVpcmUiLCJhUm91dGVzIiwiYlJvdXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUF2Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUdELG1CQUFPLENBQUMseUNBQUQsQ0FBdkI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHRixtQkFBTyxDQUFDLHlDQUFELENBQXZCOztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLE9BQU8sQ0FBQ0UsT0FBRCxFQUFVQyxPQUFWLENBQXhCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlL3JvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbWJpbmUgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJyk7XHJcblxyXG5jb25zdCBhUm91dGVzID0gcmVxdWlyZSgnLi9hUm91dGVzJyk7XHJcblxyXG5jb25zdCBiUm91dGVzID0gcmVxdWlyZSgnLi9iUm91dGVzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmUoYVJvdXRlcywgYlJvdXRlcykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/route/routes.js\n");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa29hL3JvdXRlclwiP2FiMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGtvYS9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa29hL3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@koa/router\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });