var app = angular.module("myModule", []).controller("myController", function ($scope) 
	{ var employees = [ 
	{ firstName: "Ben", lastName: "Stokes", gender: "Male", salary:55000 },
	{ firstName: "David", lastName: "Warner", gender: "Male", salary:65000 },
	{ firstName: "Chris", lastName: "Morris", gender: "Male", salary:40000 },
	{ firstName: "Alex", lastName: "Blackwell", gender: "Female", salary:35000 }, 
	{ firstName: "Amy", lastName: "Jones", gender: "Female", salary:38000 } 
	];
	$scope.employees = employees; 
	}).controller("myController1", function ($scope) 
	{ var countries = [ 
		{ name: "UK", cities: [
			{ name: "London" }, 
			{ name: "Birmingham" }, 
			{ name: "Manchester" }
		]}, 
		{ name: "USA", cities: [ 
			{ name: "Los Angeles" }, 
			{ name: "Chicago" }, 
			{ name: "Houston" } 
		] }, 
			
		{ name: "India", cities: [ 
			{ name: "Hyderabad" }, 
			{ name: "Chennai" }, 
			{ name: "Mumbai" } 
		] } 
	];
$scope.countries = countries; }).controller("myController2", function ($scope) 
	{ var technologies = [ 
		{ name: "PHP", likes: 0, dislikes: 0 }, 
		{ name: "Android", likes: 0, dislikes: 0 }, 
		{ name: "SQL", likes: 0, dislikes: 0 }, 
		{ name: "AngularJS", likes: 0, dislikes: 0 } 
		]; 
	$scope.technologies = technologies; 
	
	$scope.incrementLikes = function (technology) {
		technology.likes++; }; 
		
	$scope.incrementDislikes = function (technology) {
		technology.dislikes++; }; 
	}).controller("myController3", function ($scope) {
		var employees = [
		{ name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000 }, 
		{ name: "David", dateOfBirth: new Date("May 05, 1970"), gender: "Male", salary: 68000 }, 
		{ name: "Chris", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 }, 
		{ name: "Alex", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 }, 
		{ name: "Amy", dateOfBirth: new Date("December 30, 1983"), gender: "Female", salary: 60000 } 
		]; 
	$scope.employees = employees; 
	$scope.sortColumn = "name"; 
	});