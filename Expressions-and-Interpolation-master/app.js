(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Covid";
        $scope.stateOfBeing = "Covid";

        $scope.sayMessage = function () {
            return "Covid 19!"
        };

        $scope.Covid19 =function () {
            $scope.stateOfBeing = "Covid";
        }
    }

}) ();