/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	// const angular = require("angular");
	// require("bootstrap");
	var appMoule = angular.module("angularapp", []);

	appMoule.controller("HelloController", function ($scope) {
	    $scope.welcomeName = "Angular JS Example!!!";
	});

	appMoule.controller("StudentController", function ($scope) {
	    $scope.getFullname = function () {
	        if ($scope.fname) {
	            return "Hello " + $scope.fname + " " + $scope.lname + " !!!";
	        } else {
	            return "";
	        }
	    };
	});

	appMoule.controller("MarkController", function ($scope) {
	    $scope.students = [{
	        "name": "AAA",
	        "maths": 80
	    }, {
	        "name": "BBB",
	        "maths": 100
	    }, {
	        "name": "CCC",
	        "maths": 90
	    }];
	    $scope.updateMark = function () {
	        console.log("udpate mark");
	        $scope.students.push({
	            "name": $scope.name,
	            "maths": $scope.maths
	        });
	    };
	});

/***/ }
/******/ ]);