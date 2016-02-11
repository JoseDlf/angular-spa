angular.module('scotchApp.controllers').controller('ctrl1', ['$scope', '$http', '$routeProvider', '$locationProvider', function($scope, $http, $routeProvider, $locationProvider){
	$scope.message = "Don't be shy and contact us!";	
}]);