// const angular = require("angular");
// require("bootstrap");
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
    $scope.updateMark = function() {
        $scope.students.push({
            "name": $scope.name,
            "maths": $scope.maths
        });
    };
});
