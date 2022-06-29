module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/Site/GetProducts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/Site/GetProducts.js":
/*!***************************************!*\
  !*** ./pages/api/Site/GetProducts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hundler; });
const data = {
  title: "Product",
  description: "description",
  data: [{
    "id": 1,
    "title": "product1",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product2",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product3",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product4",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product5",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 1,
    "title": "product6",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product7",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product8",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product9",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product10",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 1,
    "title": "product11",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product12",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product13",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product14",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 1,
    "title": "product1",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product2",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product2",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 1,
    "title": "product1",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product2",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product2",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 1,
    "title": "product1",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product2",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product2",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 1,
    "title": "product1",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product2",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product2",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 1,
    "title": "product1",
    "published": false,
    "description": "We Offer a Complete Diagnostic for Your Car",
    "price": "$21,12",
    "discount": "$21,12",
    "rate": 3,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir1.jfif"
  }, {
    "id": 2,
    "title": "product2",
    "published": false,
    "description": "For your car we will do everything –  many car owners because our experience and knowledge is self-evident",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 2,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }, {
    "id": 3,
    "title": "product2",
    "published": false,
    "description": "We Service Most Makers and Models.",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 4,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 4,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir3.jfif"
  }, {
    "id": 5,
    "title": "product2",
    "published": false,
    "description": "en iyi canallardas ksk asjfas safsaf",
    "price": "$32,12",
    "discount": "$433,12",
    "rate": 1,
    "sorting": 0,
    "views": 0,
    "photo": "/assets/images/indir2.jfif"
  }]
};
function hundler(req, res, next) {
  res.json(data);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL1NpdGUvR2V0UHJvZHVjdHMuanMiXSwibmFtZXMiOlsiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJodW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBLE1BQU1BLElBQUksR0FBRztFQUNYQyxLQUFLLEVBQUcsU0FERztFQUVYQyxXQUFXLEVBQUcsYUFGSDtFQUdYRixJQUFJLEVBQUcsQ0FDTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQURLLEVBYUw7SUFDRSxNQUFNLENBRFI7SUFFRSxTQUFTLFVBRlg7SUFHRSxhQUFhLEtBSGY7SUFJRSxlQUFnQiw0R0FKbEI7SUFLRSxTQUFVLFFBTFo7SUFNRSxZQUFhLFNBTmY7SUFPRSxRQUFTLENBUFg7SUFRRSxXQUFXLENBUmI7SUFTRSxTQUFTLENBVFg7SUFVRSxTQUFVO0VBVlosQ0FiSyxFQXlCTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpCSyxFQXFDTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJDSyxFQWlETDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpESyxFQTZETDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdESyxFQXlFTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDRHQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpFSyxFQXFGTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJGSyxFQWlHTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpHSyxFQTZHTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsV0FGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdHSyxFQXlITDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsV0FGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpISyxFQXFJTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsV0FGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDRHQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJJSyxFQWlKTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsV0FGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpKSyxFQTZKTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsV0FGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdKSyxFQXlLTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpLSyxFQXFMTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJMSyxFQWlNTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDRHQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpNSyxFQTZNTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdNSyxFQXlOTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpOSyxFQXFPTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJPSyxFQWlQTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpQSyxFQTZQTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDRHQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdQSyxFQXlRTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpRSyxFQXFSTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJSSyxFQWlTTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpTSyxFQTZTTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdTSyxFQXlUTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDRHQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpUSyxFQXFVTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJVSyxFQWlWTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpWSyxFQTZWTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdWSyxFQXlXTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpXSyxFQXFYTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDRHQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJYSyxFQWlZTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpZSyxFQTZZTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdZSyxFQXlaTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpaSyxFQXFhTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDZDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsUUFOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJhSyxFQWliTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLDRHQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQWpiSyxFQTZiTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLG9DQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQTdiSyxFQXljTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXpjSyxFQXFkTDtJQUNFLE1BQU0sQ0FEUjtJQUVFLFNBQVMsVUFGWDtJQUdFLGFBQWEsS0FIZjtJQUlFLGVBQWdCLHNDQUpsQjtJQUtFLFNBQVUsUUFMWjtJQU1FLFlBQWEsU0FOZjtJQU9FLFFBQVMsQ0FQWDtJQVFFLFdBQVcsQ0FSYjtJQVNFLFNBQVMsQ0FUWDtJQVVFLFNBQVU7RUFWWixDQXJkSztBQUhJLENBQWI7QUF3ZWUsU0FBU0csT0FBVCxDQUFpQkMsR0FBakIsRUFBdUJDLEdBQXZCLEVBQTRCQyxJQUE1QixFQUFpQztFQUM1Q0QsR0FBRyxDQUFDRSxJQUFKLENBQVNQLElBQVQ7QUFDSCxDIiwiZmlsZSI6InBhZ2VzL2FwaS9TaXRlL0dldFByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvU2l0ZS9HZXRQcm9kdWN0cy5qc1wiKTtcbiIsImNvbnN0IGRhdGEgPSB7XHJcbiAgdGl0bGUgOiBcIlByb2R1Y3RcIixcclxuICBkZXNjcmlwdGlvbiA6IFwiZGVzY3JpcHRpb25cIixcclxuICBkYXRhIDogW1xyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDEsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MVwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJXZSBPZmZlciBhIENvbXBsZXRlIERpYWdub3N0aWMgZm9yIFlvdXIgQ2FyXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDIxLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDIxLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMyxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjEuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJGb3IgeW91ciBjYXIgd2Ugd2lsbCBkbyBldmVyeXRoaW5nIOKAkyAgbWFueSBjYXIgb3duZXJzIGJlY2F1c2Ugb3VyIGV4cGVyaWVuY2UgYW5kIGtub3dsZWRnZSBpcyBzZWxmLWV2aWRlbnRcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMixcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjIuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDMsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0M1wiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJXZSBTZXJ2aWNlIE1vc3QgTWFrZXJzIGFuZCBNb2RlbHMuXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDQsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIzLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiA0LFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDRcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiZW4gaXlpIGNhbmFsbGFyZGFzIGtzayBhc2pmYXMgc2Fmc2FmXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDEsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIzLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDVcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiZW4gaXlpIGNhbmFsbGFyZGFzIGtzayBhc2pmYXMgc2Fmc2FmXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDEsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIyLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDZcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiV2UgT2ZmZXIgYSBDb21wbGV0ZSBEaWFnbm9zdGljIGZvciBZb3VyIENhclwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQyMSwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQyMSwxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDMsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIxLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDdcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiRm9yIHlvdXIgY2FyIHdlIHdpbGwgZG8gZXZlcnl0aGluZyDigJMgIG1hbnkgY2FyIG93bmVycyBiZWNhdXNlIG91ciBleHBlcmllbmNlIGFuZCBrbm93bGVkZ2UgaXMgc2VsZi1ldmlkZW50XCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDIsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIyLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAzLFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDhcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiV2UgU2VydmljZSBNb3N0IE1ha2VycyBhbmQgTW9kZWxzLlwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiA0LFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMy5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogNCxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3Q5XCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcImVuIGl5aSBjYW5hbGxhcmRhcyBrc2sgYXNqZmFzIHNhZnNhZlwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAxLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMy5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogNSxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QxMFwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJlbiBpeWkgY2FuYWxsYXJkYXMga3NrIGFzamZhcyBzYWZzYWZcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMSxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjIuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDEsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MTFcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiV2UgT2ZmZXIgYSBDb21wbGV0ZSBEaWFnbm9zdGljIGZvciBZb3VyIENhclwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQyMSwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQyMSwxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDMsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIxLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDEyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcIkZvciB5b3VyIGNhciB3ZSB3aWxsIGRvIGV2ZXJ5dGhpbmcg4oCTICBtYW55IGNhciBvd25lcnMgYmVjYXVzZSBvdXIgZXhwZXJpZW5jZSBhbmQga25vd2xlZGdlIGlzIHNlbGYtZXZpZGVudFwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAyLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMi5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogMyxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QxM1wiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJXZSBTZXJ2aWNlIE1vc3QgTWFrZXJzIGFuZCBNb2RlbHMuXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDQsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIzLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiA0LFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDE0XCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcImVuIGl5aSBjYW5hbGxhcmRhcyBrc2sgYXNqZmFzIHNhZnNhZlwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAxLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMy5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogNSxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcImVuIGl5aSBjYW5hbGxhcmRhcyBrc2sgYXNqZmFzIHNhZnNhZlwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAxLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMi5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogMSxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QxXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcIldlIE9mZmVyIGEgQ29tcGxldGUgRGlhZ25vc3RpYyBmb3IgWW91ciBDYXJcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMjEsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkMjEsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAzLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMS5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogMixcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcIkZvciB5b3VyIGNhciB3ZSB3aWxsIGRvIGV2ZXJ5dGhpbmcg4oCTICBtYW55IGNhciBvd25lcnMgYmVjYXVzZSBvdXIgZXhwZXJpZW5jZSBhbmQga25vd2xlZGdlIGlzIHNlbGYtZXZpZGVudFwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAyLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMi5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogMyxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcIldlIFNlcnZpY2UgTW9zdCBNYWtlcnMgYW5kIE1vZGVscy5cIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogNCxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjMuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDQsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJlbiBpeWkgY2FuYWxsYXJkYXMga3NrIGFzamZhcyBzYWZzYWZcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMSxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjMuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDUsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJlbiBpeWkgY2FuYWxsYXJkYXMga3NrIGFzamZhcyBzYWZzYWZcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMSxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjIuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDEsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MVwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJXZSBPZmZlciBhIENvbXBsZXRlIERpYWdub3N0aWMgZm9yIFlvdXIgQ2FyXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDIxLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDIxLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMyxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjEuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJGb3IgeW91ciBjYXIgd2Ugd2lsbCBkbyBldmVyeXRoaW5nIOKAkyAgbWFueSBjYXIgb3duZXJzIGJlY2F1c2Ugb3VyIGV4cGVyaWVuY2UgYW5kIGtub3dsZWRnZSBpcyBzZWxmLWV2aWRlbnRcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMixcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjIuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDMsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJXZSBTZXJ2aWNlIE1vc3QgTWFrZXJzIGFuZCBNb2RlbHMuXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDQsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIzLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiA0LFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDJcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiZW4gaXlpIGNhbmFsbGFyZGFzIGtzayBhc2pmYXMgc2Fmc2FmXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDEsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIzLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDJcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiZW4gaXlpIGNhbmFsbGFyZGFzIGtzayBhc2pmYXMgc2Fmc2FmXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDEsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIyLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDFcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiV2UgT2ZmZXIgYSBDb21wbGV0ZSBEaWFnbm9zdGljIGZvciBZb3VyIENhclwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQyMSwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQyMSwxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDMsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIxLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDJcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiRm9yIHlvdXIgY2FyIHdlIHdpbGwgZG8gZXZlcnl0aGluZyDigJMgIG1hbnkgY2FyIG93bmVycyBiZWNhdXNlIG91ciBleHBlcmllbmNlIGFuZCBrbm93bGVkZ2UgaXMgc2VsZi1ldmlkZW50XCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDIsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIyLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiAzLFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDJcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiV2UgU2VydmljZSBNb3N0IE1ha2VycyBhbmQgTW9kZWxzLlwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiA0LFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMy5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogNCxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcImVuIGl5aSBjYW5hbGxhcmRhcyBrc2sgYXNqZmFzIHNhZnNhZlwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAxLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMy5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogNSxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcImVuIGl5aSBjYW5hbGxhcmRhcyBrc2sgYXNqZmFzIHNhZnNhZlwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAxLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMi5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogMSxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QxXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcIldlIE9mZmVyIGEgQ29tcGxldGUgRGlhZ25vc3RpYyBmb3IgWW91ciBDYXJcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMjEsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkMjEsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAzLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMS5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogMixcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcIkZvciB5b3VyIGNhciB3ZSB3aWxsIGRvIGV2ZXJ5dGhpbmcg4oCTICBtYW55IGNhciBvd25lcnMgYmVjYXVzZSBvdXIgZXhwZXJpZW5jZSBhbmQga25vd2xlZGdlIGlzIHNlbGYtZXZpZGVudFwiLFxyXG4gICAgICBcInByaWNlXCIgOiBcIiQzMiwxMlwiLFxyXG4gICAgICBcImRpc2NvdW50XCIgOiBcIiQ0MzMsMTJcIixcclxuICAgICAgXCJyYXRlXCIgOiAyLFxyXG4gICAgICBcInNvcnRpbmdcIjogMCxcclxuICAgICAgXCJ2aWV3c1wiOiAwLFxyXG4gICAgICBcInBob3RvXCIgOiBcIi9hc3NldHMvaW1hZ2VzL2luZGlyMi5qZmlmXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiaWRcIjogMyxcclxuICAgICAgXCJ0aXRsZVwiOiBcInByb2R1Y3QyXCIsXHJcbiAgICAgIFwicHVibGlzaGVkXCI6IGZhbHNlLFxyXG4gICAgICBcImRlc2NyaXB0aW9uXCIgOiBcIldlIFNlcnZpY2UgTW9zdCBNYWtlcnMgYW5kIE1vZGVscy5cIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogNCxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjMuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDQsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJlbiBpeWkgY2FuYWxsYXJkYXMga3NrIGFzamZhcyBzYWZzYWZcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMSxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjMuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDUsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJlbiBpeWkgY2FuYWxsYXJkYXMga3NrIGFzamZhcyBzYWZzYWZcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMSxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjIuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDEsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MVwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJXZSBPZmZlciBhIENvbXBsZXRlIERpYWdub3N0aWMgZm9yIFlvdXIgQ2FyXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDIxLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDIxLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMyxcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjEuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJGb3IgeW91ciBjYXIgd2Ugd2lsbCBkbyBldmVyeXRoaW5nIOKAkyAgbWFueSBjYXIgb3duZXJzIGJlY2F1c2Ugb3VyIGV4cGVyaWVuY2UgYW5kIGtub3dsZWRnZSBpcyBzZWxmLWV2aWRlbnRcIixcclxuICAgICAgXCJwcmljZVwiIDogXCIkMzIsMTJcIixcclxuICAgICAgXCJkaXNjb3VudFwiIDogXCIkNDMzLDEyXCIsXHJcbiAgICAgIFwicmF0ZVwiIDogMixcclxuICAgICAgXCJzb3J0aW5nXCI6IDAsXHJcbiAgICAgIFwidmlld3NcIjogMCxcclxuICAgICAgXCJwaG90b1wiIDogXCIvYXNzZXRzL2ltYWdlcy9pbmRpcjIuamZpZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlkXCI6IDMsXHJcbiAgICAgIFwidGl0bGVcIjogXCJwcm9kdWN0MlwiLFxyXG4gICAgICBcInB1Ymxpc2hlZFwiOiBmYWxzZSxcclxuICAgICAgXCJkZXNjcmlwdGlvblwiIDogXCJXZSBTZXJ2aWNlIE1vc3QgTWFrZXJzIGFuZCBNb2RlbHMuXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDQsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIzLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiA0LFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDJcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiZW4gaXlpIGNhbmFsbGFyZGFzIGtzayBhc2pmYXMgc2Fmc2FmXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDEsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIzLmpmaWZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICBcInRpdGxlXCI6IFwicHJvZHVjdDJcIixcclxuICAgICAgXCJwdWJsaXNoZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiZGVzY3JpcHRpb25cIiA6IFwiZW4gaXlpIGNhbmFsbGFyZGFzIGtzayBhc2pmYXMgc2Fmc2FmXCIsXHJcbiAgICAgIFwicHJpY2VcIiA6IFwiJDMyLDEyXCIsXHJcbiAgICAgIFwiZGlzY291bnRcIiA6IFwiJDQzMywxMlwiLFxyXG4gICAgICBcInJhdGVcIiA6IDEsXHJcbiAgICAgIFwic29ydGluZ1wiOiAwLFxyXG4gICAgICBcInZpZXdzXCI6IDAsXHJcbiAgICAgIFwicGhvdG9cIiA6IFwiL2Fzc2V0cy9pbWFnZXMvaW5kaXIyLmpmaWZcIlxyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBodW5kbGVyKHJlcSAsIHJlcywgbmV4dCl7XHJcbiAgICByZXMuanNvbihkYXRhKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==