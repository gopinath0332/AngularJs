import "bootstrap/dist/css/bootstrap.css";

global.jQuery = require('jquery');
import angular from "angular";
import ngRoute from "angular-route";
import $ from "jquery";
require("bootstrap");

const appMoule = angular.module("angularapp", [ngRoute]);
appMoule.value("personUrl", "/data/person.json");

appMoule.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider.when("/view1/:viewId", {
        templateUrl: "../html/view.template",
        controller: "View1",
        controllerAs: "view"
    });
    $routeProvider.when("/view2/:viewId", {
        templateUrl: "../html/view.template",
        controller: "View2",
        controllerAs: "view"
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}]);

require("./externalDirective.js")(appMoule);

appMoule.factory("stringFactory", () => {
    var factory = {};
    factory.getHello = () => "Hello, I am from Factory";
    return factory;
});

appMoule.factory("strFactory", (stringFactory) => {
    let factory = {};
    factory.getFullString = () => {
        return stringFactory.getHello() + " with first factory as dependency injection";
    };
    return factory;
});


appMoule.service("strService", function() {
    this.getName = function() {
        return "This is name from Service";
    };
});

appMoule.controller("HelloController", ($scope) => {
    $scope.welcomeName = "Angular JS Example!!!";
});

appMoule.controller("StudentController", ($scope) => {
    $scope.getFullname = function() {
        if ($scope.fname) {
            return `${$scope.fname} ${$scope.lname}`;
        } else {
            return "";
        }
    };
});


appMoule.controller("MarkController", ($scope, $http, personUrl) => {
    $http.get(personUrl)
        .success((list) => {
            $scope.students = list;
        });

    $scope.templateHolder = {
        "first_name": "",
        "last_name": ""
    };

    $scope.updateMark = function() {
        let newObj = {
            "first_name": $scope.templateHolder.first_name,
            "last_name": $scope.templateHolder.last_name
        };
        $scope.students.push(newObj);
    };
});


appMoule.controller("ViewController", ($scope) => {
    console.debug("view controller:::::");
});

appMoule.controller("View1", ["$routeParams", function View1($routeParams) {
    console.debug("view 1 controllers:::", $routeParams);
    this.name = "View1 controller";
    this.params = $routeParams;
}]);

appMoule.controller("View2", ["$routeParams", function View1($routeParams) {
    console.debug("view 2 controllers:::", $routeParams);
    this.name = "View2 controller";
    this.params = $routeParams;
}]);

appMoule.controller("FactoryController", ($scope, strFactory, strService) => {
    $scope.str = strFactory.getFullString();
    $scope.name = strService.getName();
});
$('.dropdown-toggle').dropdown();
