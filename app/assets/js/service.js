'use strict'

angular.module('App')

    .factory('studentensrv', ['$http', '$q', function ($http, $q) {

        return {
            getAllCategories: function () {
                var array = [];
                $http.get("http://theimdbapi.org/api/find/person?name=steve+mcqueen").then(function (response) {
                    var arr = response.data.rows;

                    for (var i = 0; i < arr.length; i++) {
                        array.push(arr[i].value);
                    }
                });
                return array;
            },
            getAllcocktails: function (cat_id) {
                var arrayCock = [];
                $http.get("https://nicolas.cloudant.com/dishes/_design/views/_view/dishes").then(function (response) {
                    var arr = response.data.rows;
                    console.log(arr);
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].value.cat_id == cat_id) {
                            arrayCock.push(arr[i].value);
                        }
                    }

                });
                console.log(arrayCock);
                return arrayCock;

            },
            getAllLikes: function (dis_id) {
                var arrayLikes = [];
                $http.get("https://nicolas.cloudant.com/dishes/_design/views/_view/likes").then(function (response) {
                    var arr = response.data.rows
                    console.log(arr)
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].value.dis_id == dis_id) {
                            arrayLikes.push(arr[i].value);
                        }
                    }
                });
                return arrayLikes;

            },
            postLikes: function (dis_id, name) {
                console.log("hahah")
                var data = {
                    'dis_id': dis_id,
                    'lik_id': 789456,
                    'name': name,
                    'type': "like"
                };
                console.log(data);
                $http.post("https://nicolas.cloudant.com/dishes/", JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function () {
                    alert("gelukt maattt");
                });




            },
            addCategorie: function (name) {
                var data = {
                    'cat_id': 31,
                    'name': name,
                    'type': "category"
                }

                console.log("okeettt");
                $http.post("https://nicolas.cloudant.com/dishes/", JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function () {
                    alert("gelukt maatttttt");
                });
            },
            addGerechten: function (cat_id,name) {
                var data = {
                    'dish_id': 788999,
                    'cat_id': cat_id,
                    'name': name,
                    'type': "dish"
                }

                console.log(data);
                $http.post("https://nicolas.cloudant.com/dishes/", JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function () {
                    alert("gelukt maatttttt");
                });
            },
            getNaamVanCategory: function (cat_id) {
                var q = $q.defer();
                var cat_name = "";
                $http.get("https://nicolas.cloudant.com/dishes/_design/views/_view/categories")
                    .success(function (data) {
                        var arr = data.rows;
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].value.cat_id == cat_id) {
                                cat_name = arr[i].value.name;
                            }
                        }
                        q.resolve(cat_name);
                    });
                return q.promise;
            },
            getNaamVanGerecht: function (dis_id) {
                var q = $q.defer();
                var cat_name = "";
                $http.get("https://nicolas.cloudant.com/dishes/_design/views/_view/dishes")
                    .success(function (data) {

                        var arr = data.rows;

                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].value.dis_id == dis_id) {
                                cat_name = arr[i].value.name;
                            }
                        }
                        q.resolve(cat_name);
                    });
                return q.promise;
            },

            addIngredientstoLikes: function (coc_id) {

                var recepy = [];

                $http.get("https://nicolas.cloudant.com/cocktails/_design/views/_view/ingredients").then(function (response) {
                    var allIngredients = response.data.rows
                    console.log(allIngredients);

                });

                $http.get("https://nicolas.cloudant.com/cocktails/_design/views/_view/cocktails").then(function (response) {
                    var arr = response.data.rows;
                    console.log(arr);
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].value.cat_id == cat_id) {
                            arrayCock.push(arr[i].value);
                        }
                    }

                });

                $http.get("https://nicolas.cloudant.com/cocktails/_design/views/_view/cocktails_with_ingredients").then(function (response) {
                    var cocktails_with_ingredients = response.data.rows
                    console.log(cocktails_with_ingredients);

                });



            }

        }


    }])
