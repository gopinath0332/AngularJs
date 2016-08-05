// const angular = require("angular");
// require("bootstrap");

import mymodule from "./module";

const $ = require("jquery");
const appMoule = angular.module("angularapp", []);
const PERSON_URL = "/data/person.json";

appMoule.controller("HelloController", ($scope) => {
    $scope.welcomeName = "Angular JS Example!!!";
});

appMoule.controller("StudentController", ($scope) => {
    $scope.getFullname = function() {
        if ($scope.fname) {
            return `Hello ${$scope.fname} ${$scope.lname} !!!`;
        } else {
            return "";
        }
    };
});


appMoule.controller("MarkController", ($scope) => {
    $scope.students = [];
    $.ajax({
        url: PERSON_URL,
        async: true
    }).then((list) => {
        $scope.students = list;
    }, (error) => {
        console.error("Error in fetching list:::");
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
