/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("$(document).ready(function(){\n    $('.center').slick({\n      centerMode: true,\n      centerPadding: '60px',\n      slidesToShow: 3,\n      arrows: true, // Добавлено для показа стрелочек\n      prevArrow: '<button type=\"button\" class=\"slick-prev\">Previous</button>',\n      nextArrow: '<button type=\"button\" class=\"slick-next\">Next</button>',\n      responsive: [\n        {\n          breakpoint: 768,\n          settings: {\n            arrows: false,\n            centerMode: true,\n            centerPadding: '40px',\n            slidesToShow: 3\n          }\n        },\n        {\n          breakpoint: 480,\n          settings: {\n            arrows: false,\n            centerMode: true,\n            centerPadding: '40px',\n            slidesToShow: 1\n          }\n        }\n      ]\n    });\n  });\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;