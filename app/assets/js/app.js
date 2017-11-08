'use strict'

angular.module('App', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'assets/views/home.html',
      controller: 'homeCtrl'
    })
      .when('/categories', {
          templateUrl: 'assets/views/studenten.html',
          controller: 'studentCtrl'
      })
      .when('/cocktails/:cat_id', {
          templateUrl: 'assets/views/cocktails.html',
          controller: 'studentCtrl'
      })
      .when('/likes/:dis_id', {
          templateUrl: 'assets/views/likes.html',
          controller: 'studentCtrl'
      })
      .when('/addcategorie', {
          templateUrl: 'assets/views/addcategorie.html',
          controller: 'studentCtrl'
      })
    .otherwise({
      redirectTo: '/home'
    });
})


