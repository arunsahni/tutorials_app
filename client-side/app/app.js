angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{templateUrl: '/partials/main/main', controller: ''})


        .when('/sign-up',{templateUrl: '/partials/account/signup', controller: ''
        })

        .when('/about',{templateUrl: '/partials/account/about', controller: ''
        })

});


