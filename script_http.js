var app = angular.module("myModule", []).controller("myController", function ($scope, $http) 
	{ $http.get("http://localhost/").then(function (response) 
		{ $scope.employees = response.data; });
	});