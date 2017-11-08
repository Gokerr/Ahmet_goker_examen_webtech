'use strict'

angular.module('App')

.controller('homeCtrl', ['$scope', function homeCtrl($scope) {}])

.controller('studentCtrl',['$scope','studentensrv',"$routeParams",function ($scope,studentensrv,$routeParams) {


    $scope.movies = function () {
        studentensrv.getAllCategories($scope.movieName);
    }



}])


