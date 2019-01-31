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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// // var $ = require('jquery');
// // var chart_js = require('chart.js');
//
// $(document).ready(function() {
//     $.ajax({
//         url: 'http://localhost/php/php-chartbool2/server.php',
//         method: 'GET',
//         success: function(data)
//         {
//             var database = JSON.parse(data);
//
//             var ctx = $('.line-chart');
//             var chart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
//                     datasets: [{
//                         label: "Andamento Vendite",
//                         backgroundColor: '#ff734f',
//                         borderColor: '#5e5e5e',
//                         data: database,
//                     }]
//                 }
//             });
//         },
//         error: function()
//         {
//             alert('Si è verificato un errore');
//         }
//     });
// });
// /*
// $(document).ready(function() {
//
//     $.ajax({
//         url: 'http://localhost/php/php-chartbool2/server.php',
//         method: 'GET',
//         success: function(data) {
//             var results = JSON.parse(data);
//
//             console.log(results);
//
//             if ($('#simple-line').length > 0)
//             {
//                 printSimpleLine($('#simple-line'), results['simple-line']['labels'], results['simple-line']['data'], results['simple-line']['label']);
//             }
//
//             if ($('#pie').length > 0)
//             {
//                 printPie($('#pie'), results['pie']['data'], results['pie']['labels'], results['pie']['colors']);
//             }
//
//             if ($('#multi-line').length > 0)
//             {
//                 printMultiLine($('#multi-line'), results['multi-line']['labels'], results['multi-line']['datasets']);
//             }
//         },
//         error: function() {
//             alert('Si è verificato un errore');
//         }
//     });
//
// });
//
// function printSimpleLine(selettore, labels, data, title) {
//     new Chart(selettore, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: title,
//                 backgroundColor: 'rgb(255, 99, 132)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 data: data,
//             }]
//         }
//     });
// }
//
// function printPie(selettore, data, labels, colors) {
//     new Chart(selettore, {
//         type: 'pie',
//         data: {
//             datasets: [{
//                 data: data,
//                 backgroundColor: colors
//             }],
//
//             // These labels appear in the legend and in the tooltips when hovering different arcs
//             labels: labels
//         },
//     });
// }
//
// function printMultiLine(selettore, labels, datasets)
// {
//     new Chart(selettore, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: datasets
//         }
//     });
// }
// */

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/php/php-chartbool2/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /var/www/html/php/php-chartbool2/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });