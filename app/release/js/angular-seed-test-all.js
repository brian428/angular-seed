/// <reference path='../ts_definitions/libs/angularjs/angular.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-animate.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-mocks.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-route.d.ts' />
/// <reference path='../ts_definitions/libs/angular-ui-bootstrap/angular-ui-bootstrap.d.ts' />
/// <reference path='../ts_definitions/libs/ng-grid/ng-grid.d.ts' />


/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    /**
    * The main controller for the app. The controller:
    * - retrieves and persists the model via the todoStorage service
    * - exposes the model to the template and provides event handlers
    */
    var AppController = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function AppController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            var temp = true;
            var temp2 = true;
        }
        AppController.$inject = [
            '$scope',
            '$location'
        ];
        return AppController;
    })();
    app.AppController = AppController;
})(app || (app = {}));


/// <reference path='../controllers/MainController.ts' />


/// <reference path='../../../_all.ts' />
/// <reference path='../interfaces/IMainScope' />
var main;
(function (main) {
    'use strict';

    /**
    * The main controller for the app. The controller:
    * - retrieves and persists the model via the todoStorage service
    * - exposes the model to the template and provides event handlers
    */
    var MainController = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function MainController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
        }
        MainController.$inject = [
            '$scope',
            '$location'
        ];
        return MainController;
    })();
    main.MainController = MainController;
})(main || (main = {}));


/// <reference path='../_all.ts' />
/// <reference path="../controllers/AppController.ts" />
/// <reference path="../modules/main/controllers/MainController.ts" />
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
        }]).controller('appController', app.AppController).controller('mainController', main.MainController);
})(myApp || (myApp = {}));



//# sourceMappingURL=angular-seed-test-all.js.map