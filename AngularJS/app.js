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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _module = __webpack_require__(1);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appMoule = angular.module("angularapp", []); // const angular = require("angular");
	// require("bootstrap");

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

	    $scope.templateHolder = {
	        "name": "",
	        "maths": ""
	    };

	    $scope.updateMark = function () {
	        console.debug(_module2.default.getName());
	        $scope.students.push({
	            "name": $scope.templateHolder.name,
	            "maths": $scope.templateHolder.maths
	        });
	    };
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MyModule = function () {
	    function MyModule() {
	        _classCallCheck(this, MyModule);

	        this.name = "Person name";
	    }

	    _createClass(MyModule, [{
	        key: "getName",
	        value: function getName() {
	            return this.name;
	        }
	    }]);

	    return MyModule;
	}();

	exports.default = new MyModule();

/***/ }
/******/ ]);