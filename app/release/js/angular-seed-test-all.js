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

    var AppController = (function () {
        function AppController($scope, scenarioService, $location) {
            var _this = this;
            this.scope = $scope;
            this.scope.vm = this;
            this.scope.tabs = [];
            this.scenarioService = scenarioService;
            this.scenarioService.loadInitialData().then(function (data) {
                _this.scope.scenarios = data;
            });
        }
        AppController.$inject = [
            '$scope',
            'scenarioService',
            '$location'
        ];
        return AppController;
    })();
    app.AppController = AppController;
})(app || (app = {}));


/// <reference path='../_all.ts' />
var app;
(function (app) {
    var ScenarioService = (function () {
        function ScenarioService($httpService, $q) {
            this.STORAGE_ID = 'phoenix-angularjs-typescript';
            this.httpService = $httpService;
            this.promiseService = $q;
        }
        ScenarioService.prototype.loadScenarios = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };

        ScenarioService.prototype.saveScenarios = function (scenarios) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(scenarios));
        };

        ScenarioService.prototype.loadProbabilities = function () {
            var deferred = this.promiseService.defer();

            this.httpService.get("data/probabilities.json").then(function (result) {
                deferred.resolve(result.data);
            });

            return deferred.promise;
        };

        ScenarioService.prototype.loadRevenueImpacts = function () {
            var deferred = this.promiseService.defer();

            this.httpService.get("data/revenueImpacts.json").then(function (result) {
                deferred.resolve(result.data);
            });

            return deferred.promise;
        };

        ScenarioService.prototype.loadInitialData = function () {
            return this.promiseService.all([
                this.loadProbabilities(),
                this.loadRevenueImpacts()
            ]);
        };
        ScenarioService.$inject = [
            '$http',
            '$q'
        ];
        return ScenarioService;
    })();
    app.ScenarioService = ScenarioService;
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
/// <reference path="../services/ScenarioService.ts" />
var myApp;
(function (_myApp) {
    'use strict';

    var myApp = angular.module("myApp", [
        'ui.bootstrap',
        'ngRoute',
        'myApp.views.view1',
        'myApp.views.view2',
        'myApp.version'
    ]).config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({ redirectTo: '/views/view1' });
        }]).controller('AppController', app.AppController).controller('MainController', main.MainController).service('scenarioService', app.ScenarioService);
    ;
})(myApp || (myApp = {}));


/// <reference path='../controllers/AppController.ts' />


/// <reference path='../controllers/AppController.ts' />


var app;
(function (app) {
    var AffectedItem = (function () {
        function AffectedItem() {
        }
        return AffectedItem;
    })();
    app.AffectedItem = AffectedItem;
})(app || (app = {}));


var app;
(function (app) {
    var Probability = (function () {
        function Probability() {
        }
        return Probability;
    })();
    app.Probability = Probability;
})(app || (app = {}));


var app;
(function (app) {
    var RevenueImpact = (function () {
        function RevenueImpact() {
        }
        return RevenueImpact;
    })();
    app.RevenueImpact = RevenueImpact;
})(app || (app = {}));


var app;
(function (app) {
    var Scenario = (function () {
        function Scenario() {
        }
        return Scenario;
    })();
    app.Scenario = Scenario;
})(app || (app = {}));


var app;
(function (app) {
    var ScenarioItem = (function () {
        function ScenarioItem() {
        }
        return ScenarioItem;
    })();
    app.ScenarioItem = ScenarioItem;
})(app || (app = {}));



//# sourceMappingURL=angular-seed-test-all.js.map