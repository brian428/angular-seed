/// <reference path='../_all.ts' />
/// <reference path="../controllers/AppController.ts" />
/// <reference path="../modules/main/controllers/MainController.ts" />

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
        .controller( 'appController', app.AppController )
        .controller( 'mainController', main.MainController );
        //.directive('todoBlur', todoBlur)
        //.directive('todoFocus', todoFocus)
        //.service('todoStorage', TodoStorage);
}