'use strict';

/* Controllers */
	var ToDoItem = function(id, task) {
		this.id = id;
		this.task = task;
		return this;	
	}

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {

	$scope.newTask = '';
	$scope.toDoItems = [
		new ToDoItem(1, "task1")
	];

	$scope.addTask = function() {
		$scope.toDoItems.push(new ToDoItem(1, $scope.newTask));
	}

	$scope.remove = function(e) {
		var index = $scope.toDoItems.indexOf(e);
		if(index > 0) {
			$scope.toDoItems.splice(index,1);
		}
	}
});
