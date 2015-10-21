'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

      beforeEach(module('phonecatApp'));

      it('should create "toDoItems" model with 1 toDo', inject(function($controller) {
        var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

        expect(scope.toDoItems.length).toBe(1);
      }));

     it('should create "toDoItems" model with id:1 and task:task1")', inject(function($controller) {
        var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

        var toDo = scope.toDoItems[0];
        expect(toDo.id).toBe(1);
        expect(toDo.task).toBe('task1');
      })); 

     it('should be able to add new Task', inject(function($controller) {
        var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

        var toDo = scope.toDoItems[0];
        scope.newTask = 'new task';
        scope.addTask();
        expect(scope.toDoItems.length).toBe(2);
        expect(scope.toDoItems[1].task).toBe("new task");
      })); 

  });

});
