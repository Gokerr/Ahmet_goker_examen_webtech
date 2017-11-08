'use strict'

angular.module('App')

.controller('homeCtrl', ['$scope', function homeCtrl($scope) {}])

.controller('studentCtrl',['$scope','studentensrv',"$routeParams",function ($scope,studentensrv,$routeParams) {

    $scope.categories = studentensrv.getAllCategories();
    $scope.cocktails = studentensrv.getAllcocktails(parseInt($routeParams.cat_id));
    $scope.likes = studentensrv.getAllLikes(parseInt(($routeParams.dis_id)));
    $scope.like = function () {
        studentensrv.postLikes(parseInt($routeParams.dis_id),$scope.name);
    }
    $scope.addcat = function () {
        studentensrv.addCategorie($scope.name);
    }
    studentensrv.getNaamVanCategory(parseInt($routeParams.cat_id)).then(function(info) {
        $scope.cat_name = info;
    });

    studentensrv.getNaamVanGerecht(parseInt($routeParams.dis_id)).then(function(info) {
        $scope.dis_name = info;
    });

    $scope.addgerecht = function () {
        studentensrv.addGerechten(parseInt($routeParams.cat_id),$scope.name);
    }

}])


