// script.js

    // create the module and name it scotchApp
    // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            // con el ctrl en un archivo a parte
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactCtrl' //'contactController'
            });

            // use the HTML5 History API
            // para que no salga # delante de la URL
       		$locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hodaaa soy una cutre página web <3';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Acerca de mi: fascinante, asombroso, el hombre que hizo llorar a Spielberg';
    });

   // scotchApp.controller('contactController', function($scope) {
      //  $scope.message = "Don't be shy and contact us!";
    //});
