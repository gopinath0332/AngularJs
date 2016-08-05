// const angular = require("angular");
// require("bootstrap");

import mymodule from "./module";
const appMoule = angular.module("angularapp", []);

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
    $scope.students = [{
        "name": "AAA",
        "maths": 80,
    }, {
        "name": "BBB",
        "maths": 100,
    }, {
        "name": "CCC",
        "maths": 90,
    }];

    $scope.templateHolder = {
        "name": "",
        "maths": ""
    };


    $scope.updateMark = function() {
        console.debug(mymodule.getName());
        $scope.students.push({
            "name": $scope.templateHolder.name,
            "maths": $scope.templateHolder.maths
        });
    };
});
