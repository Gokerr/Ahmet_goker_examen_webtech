'use strict'

angular.module('App')

    .factory('studentensrv', ['$http', '$q', function ($http, $q) {

        return {
            getAllCategories: function (movieName) {

                var q = $q.defer();
                var array = "";

                $http.get("http://www.theimdbapi.org/api/find/person?name="+movieName)
                    .success(function (response) {
                        console.log(response);

                        for (var i = 0; i < response.length; i++) {
                            array = response[i].filmography.actor;
                        }
                        q.resolve(array);
                    });

                return q.promise;
            },


            }




    }])
