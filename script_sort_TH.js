var app = angular.module("myModule", []).controller("myController", function($scope) 
	{ var employees = 
		[ { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male" , city: "London", salary: 55000}, 
			{ name: "David", dateOfBirth: new Date("May 05, 1970"), gender: "Male" , city: "Chennai", salary: 68000 }, 
			{ name: "Chris", dateOfBirth: new Date("August 15, 1974"), gender: "Male" , city: "London", salary: 57000 }, 
			{ name: "Alex", dateOfBirth: new Date("October 27, 1979"), gender: "Female" , city: "Chicago", salary: 53000 }, 
			{ name: "Amy", dateOfBirth: new Date("December 30, 1983"), gender: "Female", city: "Mumbai", salary: 60000 },
			{ name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male" , city: "London", salary: 55000}, 
			{ name: "David", dateOfBirth: new Date("May 05, 1970"), gender: "Male" , city: "Chennai", salary: 68000 }, 
			{ name: "Chris", dateOfBirth: new Date("August 15, 1974"), gender: "Male" , city: "London", salary: 57000 }, 
			{ name: "Alex", dateOfBirth: new Date("October 27, 1979"), gender: "Female" , city: "Chicago", salary: 53000 }, 
			{ name: "Amy", dateOfBirth: new Date("December 30, 1983"), gender: "Female", city: "Mumbai", salary: 60000 }
			]; 
		$scope.employees = employees;
		$scope.sortColumn = "name";
		$scope.rowCount = 3;
		$scope.reverseSort = false;
		$scope.sortData = function (column) 
			{ $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false; 
				$scope.sortColumn = column; }
			$scope.getSortClass = function (column) { if ($scope.sortColumn == column) 
			{ return $scope.reverseSort ? 'arrow-down' : 'arrow-up'; } return ''; }
		
		}).controller("myController1", function ($scope)
		{ var employees = 
			[ { name: "Ben", gender: "Male", salary: 55000, city: "London" }, 
			{ name: "David", gender: "Male", salary: 68000, city: "Chennai" }, 
			{ name: "Chris", gender: "Male", salary: 57000, city: "London" }, 
			{ name: "Alex", gender: "Female", salary: 53000, city: "Chennai" }, 
			{ name: "Amy", gender: "Female", salary: 60000, city: "London" } ];
		$scope.employees = employees;
		}).controller("myController2", function ($scope) 
			{ var employees = [ 
				{ name: "Ben", gender: "Male", salary: 55000, city: "London" }, 
				{ name: "David", gender: "Male", salary: 68000, city: "Chennai" }, 
				{ name: "Chris", gender: "Male", salary: 57000, city: "London" }, 
				{ name: "Alex", gender: "Female", salary: 53000, city: "Chennai" }, 
				{ name: "Amy", gender: "Female", salary: 60000, city: "London" }, ]; 
			$scope.employees = employees; 
			$scope.search = function (item) {
				if ($scope.searchText == undefined) 
				{ return true; } 
				else { 
					if (item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) 
						{ return true; } } 
				return false; };
		}).controller("myController3", function ($scope) 
			{var employees = [ 
				{ name: "Ben", gender: "Male", city: "London", salary: 55000 }, 
				{ name: "David", gender: "Male", city: "Chennai", salary: 68000 }, 
				{ name: "Mark", gender: "Male", city: "Chicago", salary: 57000 }, 
				{ name: "Alex", gender: "Female", city: "London", salary: 53000 }, 
				{ name: "Amy", gender: "Female", city: "Chennai", salary: 60000 } ]; 
			
			$scope.employees = employees; });