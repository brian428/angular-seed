/// <reference path='../ts_definitions/libs/angular/angular.d.ts' />
/// <reference path='../ts_definitions/libs/angular/angular-animate.d.ts' />
/// <reference path='../ts_definitions/libs/angular/angular-mocks.d.ts' />
/// <reference path='../ts_definitions/libs/angular/angular-route.d.ts' />
/// <reference path='../ts_definitions/libs/angular/angular-ui-bootstrap.d.ts' />
/// <reference path='../ts_definitions/libs/angular/ng-grid.d.ts' />


/// <reference path='../controllers/TodoController.ts' />


/// <reference path='../_all.ts' />
/// <reference path='../interfaces/ITodoScope' />
var todos;
(function (todos) {
    'use strict';

    /**
    * The main controller for the app. The controller:
    * - retrieves and persists the model via the todoStorage service
    * - exposes the model to the template and provides event handlers
    */
    var TodoController = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function TodoController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
        }
        TodoController.$inject = [
            '$scope',
            '$location'
        ];
        return TodoController;
    })();
    todos.TodoController = TodoController;
})(todos || (todos = {}));



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zZWVkLXRlc3QtYWxsLmpzIiwic291cmNlcyI6WyJfYWxsLnRzIiwiaW50ZXJmYWNlcy9JVG9kb1Njb3BlLnRzIiwiY29udHJvbGxlcnMvVG9kb0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsidG9kb3MiLCJ0b2Rvcy5Ub2RvQ29udHJvbGxlciIsInRvZG9zLlRvZG9Db250cm9sbGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7QUFDcEUsNEVBQTRFO0FBQzVFLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFDMUUsaUZBQWlGO0FBQ2pGLG9FQUFvRTs7O0FDTHBFLHlEQUF5RDs7O0FDQXpELG1DQUFtQztBQUNuQyxpREFBaUQ7QUFFakQsSUFBTyxLQUFLO0FBOEJYLENBOUJELFVBQU8sS0FBSztJQUNYQSxZQUFZQTs7SUFFWkE7Ozs7TUFJR0E7SUFDSEE7UUFhQ0Msb0RBRm9EQTtRQUNwREEsNkdBQTZHQTtRQUM3R0Esd0JBQ0NBLE1BQTBCQSxFQUMxQkEsU0FBc0NBO1lBRHRDQyxXQUFjQSxHQUFOQSxNQUFNQTtBQUFZQSxZQUMxQkEsY0FBaUJBLEdBQVRBLFNBQVNBO0FBQXFCQSxRQUd2Q0EsQ0FBQ0E7UUFaREQseUJBQXdCQTtZQUN2QkEsUUFBUUE7WUFDUkEsV0FBV0E7U0FDWEE7UUFXRkEsc0JBQUNBO0lBQURBLENBQUNBLElBQUFEO0lBcEJEQSxzQ0FvQkNBO0FBRUZBLENBQUNBLHlCQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vdHNfZGVmaW5pdGlvbnMvbGlicy9hbmd1bGFyL2FuZ3VsYXIuZC50cycgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vdHNfZGVmaW5pdGlvbnMvbGlicy9hbmd1bGFyL2FuZ3VsYXItYW5pbWF0ZS5kLnRzJyAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPScuLi90c19kZWZpbml0aW9ucy9saWJzL2FuZ3VsYXIvYW5ndWxhci1tb2Nrcy5kLnRzJyAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPScuLi90c19kZWZpbml0aW9ucy9saWJzL2FuZ3VsYXIvYW5ndWxhci1yb3V0ZS5kLnRzJyAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPScuLi90c19kZWZpbml0aW9ucy9saWJzL2FuZ3VsYXIvYW5ndWxhci11aS1ib290c3RyYXAuZC50cycgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vdHNfZGVmaW5pdGlvbnMvbGlicy9hbmd1bGFyL25nLWdyaWQuZC50cycgLz5cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vY29udHJvbGxlcnMvVG9kb0NvbnRyb2xsZXIudHMnIC8+XG5cbm1vZHVsZSB0b2RvcyB7XG5cdGV4cG9ydCBpbnRlcmZhY2UgSVRvZG9TY29wZSBleHRlbmRzIG5nLklTY29wZSB7XG5cdFx0bmV3VG9kbzogc3RyaW5nO1xuXHRcdHJlbWFpbmluZ0NvdW50OiBudW1iZXI7XG5cdFx0ZG9uZUNvdW50OiBudW1iZXI7XG5cdFx0YWxsQ2hlY2tlZDogYm9vbGVhbjtcblx0XHRzdGF0dXNGaWx0ZXI6IHsgY29tcGxldGVkOiBib29sZWFuOyB9O1xuXHRcdGxvY2F0aW9uOiBuZy5JTG9jYXRpb25TZXJ2aWNlO1xuXHRcdHZtOiBUb2RvQ29udHJvbGxlcjtcblx0fVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uL19hbGwudHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPScuLi9pbnRlcmZhY2VzL0lUb2RvU2NvcGUnIC8+XG5cbm1vZHVsZSB0b2RvcyB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogVGhlIG1haW4gY29udHJvbGxlciBmb3IgdGhlIGFwcC4gVGhlIGNvbnRyb2xsZXI6XG5cdCAqIC0gcmV0cmlldmVzIGFuZCBwZXJzaXN0cyB0aGUgbW9kZWwgdmlhIHRoZSB0b2RvU3RvcmFnZSBzZXJ2aWNlXG5cdCAqIC0gZXhwb3NlcyB0aGUgbW9kZWwgdG8gdGhlIHRlbXBsYXRlIGFuZCBwcm92aWRlcyBldmVudCBoYW5kbGVyc1xuXHQgKi9cblx0ZXhwb3J0IGNsYXNzIFRvZG9Db250cm9sbGVyIHtcblxuXHRcdC8vICRpbmplY3QgYW5ub3RhdGlvbi5cblx0XHQvLyBJdCBwcm92aWRlcyAkaW5qZWN0b3Igd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBkZXBlbmRlbmNpZXMgdG8gYmUgaW5qZWN0ZWQgaW50byBjb25zdHJ1Y3RvclxuXHRcdC8vIGl0IGlzIGJldHRlciB0byBoYXZlIGl0IGNsb3NlIHRvIHRoZSBjb25zdHJ1Y3RvciwgYmVjYXVzZSB0aGUgcGFyYW1ldGVycyBtdXN0IG1hdGNoIGluIGNvdW50IGFuZCB0eXBlLlxuXHRcdC8vIFNlZSBodHRwOi8vZG9jcy5hbmd1bGFyanMub3JnL2d1aWRlL2RpXG5cdFx0cHVibGljIHN0YXRpYyAkaW5qZWN0ID0gW1xuXHRcdFx0JyRzY29wZScsXG5cdFx0XHQnJGxvY2F0aW9uJ1xuXHRcdF07XG5cblx0XHQvLyBkZXBlbmRlbmNpZXMgYXJlIGluamVjdGVkIHZpYSBBbmd1bGFySlMgJGluamVjdG9yXG5cdFx0Ly8gY29udHJvbGxlcidzIG5hbWUgaXMgcmVnaXN0ZXJlZCBpbiBBcHBsaWNhdGlvbi50cyBhbmQgc3BlY2lmaWVkIGZyb20gbmctY29udHJvbGxlciBhdHRyaWJ1dGUgaW4gaW5kZXguaHRtbFxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSAkc2NvcGU6IElUb2RvU2NvcGUsXG5cdFx0XHRwcml2YXRlICRsb2NhdGlvbjogbmcuSUxvY2F0aW9uU2VydmljZVxuXHRcdCkge1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9