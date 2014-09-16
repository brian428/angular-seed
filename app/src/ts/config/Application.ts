/// <reference path='../_all.ts' />
/// <reference path="../controllers/AppController.ts" />
/// <reference path="../modules/main/controllers/MainController.ts" />
/// <reference path="../services/ScenarioService.ts" />

module myApp {
    'use strict';

    var myApp = angular.module( "myApp", [
        'ui.bootstrap',
        'ngRoute',
        'myApp.views.view1',
        'myApp.views.view2',
        'myApp.version'
    ] )
        .config( [ '$routeProvider', function( $routeProvider : ng.route.IRouteProvider ) {
            $routeProvider.otherwise( { redirectTo: '/views/view1' } );
        } ] )
        .controller( 'AppController', app.AppController )
        .controller( 'MainController', main.MainController )
        .service( 'scenarioService', app.ScenarioService );;
        //.directive('todoBlur', todoBlur)
        //.directive('todoFocus', todoFocus)
        //.service('todoStorage', TodoStorage);
}