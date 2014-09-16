/// <reference path='../_all.ts' />
/// <reference path="../controllers/TodoController.ts" />

module myApp {
    'use strict';

    var myApp = angular.module( "myApp", [
      'ngRoute',
      'myApp.views.view1',
      'myApp.views.view2',
      'myApp.version'
    ] )
        .config( [ '$routeProvider', function( $routeProvider : ng.route.IRouteProvider ) {
            $routeProvider.otherwise( { redirectTo: '/views/view1' } );
        } ] )
        .controller( 'todoCtrl', todos.TodoController );
        //.directive('todoBlur', todoBlur)
        //.directive('todoFocus', todoFocus)
        //.service('todoStorage', TodoStorage);
}