'use strict'

angular.module('App')

.controller('homeCtrl', ['$scope', function homeCtrl($scope) {}])

.controller('studentCtrl',['$scope','studentensrv',"$routeParams",function ($scope,studentensrv,$routeParams) {


    $scope.movies = function () {
        $scope.categories =studentensrv.getAllCategories($scope.movieName).then(function (info) {
            $scope.categories =info;
        })
    }



}])


