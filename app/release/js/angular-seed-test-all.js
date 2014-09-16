/// <reference path='../ts_definitions/libs/angularjs/angular.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-animate.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-mocks.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-route.d.ts' />
/// <reference path='../ts_definitions/libs/angular-ui-bootstrap/angular-ui-bootstrap.d.ts' />
/// <reference path='../ts_definitions/libs/ng-grid/ng-grid.d.ts' />


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


/// <reference path='../_all.ts' />
/// <reference path="../controllers/TodoController.ts" />
var myApp;
(function (_myApp) {
    'use strict';

    var myApp = angular.module("myApp", [
        'ngRoute',
        'myApp.views.view1',
        'myApp.views.view2',
        'myApp.version'
    ]).config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({ redirectTo: '/views/view1' });
        }]).controller('todoCtrl', todos.TodoController);
})(myApp || (myApp = {}));



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zZWVkLXRlc3QtYWxsLmpzIiwic291cmNlcyI6WyJfYWxsLnRzIiwiaW50ZXJmYWNlcy9JVG9kb1Njb3BlLnRzIiwiY29udHJvbGxlcnMvVG9kb0NvbnRyb2xsZXIudHMiLCJjb25maWcvQXBwbGljYXRpb24udHMiXSwibmFtZXMiOlsidG9kb3MiLCJ0b2Rvcy5Ub2RvQ29udHJvbGxlciIsInRvZG9zLlRvZG9Db250cm9sbGVyLmNvbnN0cnVjdG9yIiwibXlBcHAiXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTtBQUN0RSw4RUFBOEU7QUFDOUUsNEVBQTRFO0FBQzVFLDRFQUE0RTtBQUM1RSw4RkFBOEY7QUFDOUYsb0VBQW9FOzs7QUNMcEUseURBQXlEOzs7QUNBekQsbUNBQW1DO0FBQ25DLGlEQUFpRDtBQUVqRCxJQUFPLEtBQUs7QUErQlgsQ0EvQkQsVUFBTyxLQUFLO0lBQ1hBLFlBQVlBOztJQUVaQTs7OztNQUlHQTtJQUNIQTtRQWFDQyxvREFGb0RBO1FBQ3BEQSw2R0FBNkdBO1FBQzdHQSx3QkFDQ0EsTUFBMEJBLEVBQzFCQSxTQUFzQ0E7WUFEdENDLFdBQWNBLEdBQU5BLE1BQU1BO0FBQVlBLFlBQzFCQSxjQUFpQkEsR0FBVEEsU0FBU0E7QUFBcUJBLFFBSXZDQSxDQUFDQTtRQWJERCx5QkFBd0JBO1lBQ3ZCQSxRQUFRQTtZQUNSQSxXQUFXQTtTQUNYQTtRQVlGQSxzQkFBQ0E7SUFBREEsQ0FBQ0EsSUFBQUQ7SUFyQkRBLHNDQXFCQ0E7QUFFRkEsQ0FBQ0EseUJBQUE7OztBQ2xDRCxtQ0FBbUM7QUFDbkMseURBQXlEO0FBRXpELElBQU8sS0FBSztBQWdCWCxDQWhCRCxVQUFPLE1BQUs7SUFDUkcsWUFBWUE7O0lBRVpBLElBQUlBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUVBLE9BQU9BLEVBQUVBO1FBQ25DQSxTQUFTQTtRQUNUQSxtQkFBbUJBO1FBQ25CQSxtQkFBbUJBO1FBQ25CQSxlQUFlQTtLQUNoQkEsQ0FBRUEsQ0FDRUEsTUFBTUEsQ0FBRUE7UUFBRUEsZ0JBQWdCQSxFQUFFQSxVQUFVQSxjQUF3Q0E7WUFDM0VBLGNBQWNBLENBQUNBLFNBQVNBLENBQUVBLEVBQUVBLFVBQVVBLEVBQUVBLGNBQWNBLEVBQUVBLENBQUVBO1FBQzlEQSxDQUFDQSxDQUFFQSxDQUFFQSxDQUNKQSxVQUFVQSxDQUFFQSxVQUFVQSxFQUFFQSxLQUFLQSxDQUFDQSxjQUFjQSxDQUFFQTtBQUl2REEsQ0FBQ0EseUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPScuLi90c19kZWZpbml0aW9ucy9saWJzL2FuZ3VsYXJqcy9hbmd1bGFyLmQudHMnIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uL3RzX2RlZmluaXRpb25zL2xpYnMvYW5ndWxhcmpzL2FuZ3VsYXItYW5pbWF0ZS5kLnRzJyAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPScuLi90c19kZWZpbml0aW9ucy9saWJzL2FuZ3VsYXJqcy9hbmd1bGFyLW1vY2tzLmQudHMnIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uL3RzX2RlZmluaXRpb25zL2xpYnMvYW5ndWxhcmpzL2FuZ3VsYXItcm91dGUuZC50cycgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vdHNfZGVmaW5pdGlvbnMvbGlicy9hbmd1bGFyLXVpLWJvb3RzdHJhcC9hbmd1bGFyLXVpLWJvb3RzdHJhcC5kLnRzJyAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPScuLi90c19kZWZpbml0aW9ucy9saWJzL25nLWdyaWQvbmctZ3JpZC5kLnRzJyAvPlxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPScuLi9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlci50cycgLz5cblxubW9kdWxlIHRvZG9zIHtcblx0ZXhwb3J0IGludGVyZmFjZSBJVG9kb1Njb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcblx0XHRuZXdUb2RvOiBzdHJpbmc7XG5cdFx0cmVtYWluaW5nQ291bnQ6IG51bWJlcjtcblx0XHRkb25lQ291bnQ6IG51bWJlcjtcblx0XHRhbGxDaGVja2VkOiBib29sZWFuO1xuXHRcdHN0YXR1c0ZpbHRlcjogeyBjb21wbGV0ZWQ6IGJvb2xlYW47IH07XG5cdFx0bG9jYXRpb246IG5nLklMb2NhdGlvblNlcnZpY2U7XG5cdFx0dm06IFRvZG9Db250cm9sbGVyO1xuXHR9XG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD0nLi4vX2FsbC50cycgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uL2ludGVyZmFjZXMvSVRvZG9TY29wZScgLz5cblxubW9kdWxlIHRvZG9zIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWFpbiBjb250cm9sbGVyIGZvciB0aGUgYXBwLiBUaGUgY29udHJvbGxlcjpcblx0ICogLSByZXRyaWV2ZXMgYW5kIHBlcnNpc3RzIHRoZSBtb2RlbCB2aWEgdGhlIHRvZG9TdG9yYWdlIHNlcnZpY2Vcblx0ICogLSBleHBvc2VzIHRoZSBtb2RlbCB0byB0aGUgdGVtcGxhdGUgYW5kIHByb3ZpZGVzIGV2ZW50IGhhbmRsZXJzXG5cdCAqL1xuXHRleHBvcnQgY2xhc3MgVG9kb0NvbnRyb2xsZXIge1xuXG5cdFx0Ly8gJGluamVjdCBhbm5vdGF0aW9uLlxuXHRcdC8vIEl0IHByb3ZpZGVzICRpbmplY3RvciB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGRlcGVuZGVuY2llcyB0byBiZSBpbmplY3RlZCBpbnRvIGNvbnN0cnVjdG9yXG5cdFx0Ly8gaXQgaXMgYmV0dGVyIHRvIGhhdmUgaXQgY2xvc2UgdG8gdGhlIGNvbnN0cnVjdG9yLCBiZWNhdXNlIHRoZSBwYXJhbWV0ZXJzIG11c3QgbWF0Y2ggaW4gY291bnQgYW5kIHR5cGUuXG5cdFx0Ly8gU2VlIGh0dHA6Ly9kb2NzLmFuZ3VsYXJqcy5vcmcvZ3VpZGUvZGlcblx0XHRwdWJsaWMgc3RhdGljICRpbmplY3QgPSBbXG5cdFx0XHQnJHNjb3BlJyxcblx0XHRcdCckbG9jYXRpb24nXG5cdFx0XTtcblxuXHRcdC8vIGRlcGVuZGVuY2llcyBhcmUgaW5qZWN0ZWQgdmlhIEFuZ3VsYXJKUyAkaW5qZWN0b3Jcblx0XHQvLyBjb250cm9sbGVyJ3MgbmFtZSBpcyByZWdpc3RlcmVkIGluIEFwcGxpY2F0aW9uLnRzIGFuZCBzcGVjaWZpZWQgZnJvbSBuZy1jb250cm9sbGVyIGF0dHJpYnV0ZSBpbiBpbmRleC5odG1sXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRwcml2YXRlICRzY29wZTogSVRvZG9TY29wZSxcblx0XHRcdHByaXZhdGUgJGxvY2F0aW9uOiBuZy5JTG9jYXRpb25TZXJ2aWNlXG5cdFx0KSB7XG5cblxuXHRcdH1cblxuXHR9XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9Jy4uL19hbGwudHMnIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlci50c1wiIC8+XHJcblxyXG5tb2R1bGUgbXlBcHAge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciBteUFwcCA9IGFuZ3VsYXIubW9kdWxlKCBcIm15QXBwXCIsIFtcclxuICAgICAgJ25nUm91dGUnLFxyXG4gICAgICAnbXlBcHAudmlld3MudmlldzEnLFxyXG4gICAgICAnbXlBcHAudmlld3MudmlldzInLFxyXG4gICAgICAnbXlBcHAudmVyc2lvbidcclxuICAgIF0gKVxyXG4gICAgICAgIC5jb25maWcoIFsgJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oICRyb3V0ZVByb3ZpZGVyIDogbmcucm91dGUuSVJvdXRlUHJvdmlkZXIgKSB7XHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSggeyByZWRpcmVjdFRvOiAnL3ZpZXdzL3ZpZXcxJyB9ICk7XHJcbiAgICAgICAgfSBdIClcclxuICAgICAgICAuY29udHJvbGxlciggJ3RvZG9DdHJsJywgdG9kb3MuVG9kb0NvbnRyb2xsZXIgKTtcclxuICAgICAgICAvLy5kaXJlY3RpdmUoJ3RvZG9CbHVyJywgdG9kb0JsdXIpXHJcbiAgICAgICAgLy8uZGlyZWN0aXZlKCd0b2RvRm9jdXMnLCB0b2RvRm9jdXMpXHJcbiAgICAgICAgLy8uc2VydmljZSgndG9kb1N0b3JhZ2UnLCBUb2RvU3RvcmFnZSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=