'use strict'

angular.module('App')

    .factory('studentensrv', ['$http', '$q', function ($http, $q) {

        return {
            getAllCategories: function (movieName) {
                console.log(movieName);
                var q = $q.defer();
                var cat_name = "";
                $http.get("http://www.theimdbapi.org/api/find/person?name="+movieName)
                    .success(function (data) {
                        console.log(data);
                        var arr = data.rows;

                        q.resolve(cat_name);
                    });
                return q.promise;
            },


            }




    }])
