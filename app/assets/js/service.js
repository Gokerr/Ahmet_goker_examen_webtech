'use strict'

angular.module('App')

    .factory('studentensrv', ['$http', '$q', function ($http, $q) {

        return {
            getAllCategories: function (movieName) {

                var q = $q.defer();
                var array = [];
                var array2;


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
            postLikes: function (movieName,array2) {
                var data = {
                    'actor': movieName,
                    'movies': array2
                };
                console.log(data);
                $http.post("http://127.0.0.1:5984/movies/", JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function () {
                    alert("edit gelukt");
                });
            }

            }




    }])
