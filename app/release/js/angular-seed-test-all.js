/// <reference path='../ts_definitions/libs/angularjs/angular.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-animate.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-mocks.d.ts' />
/// <reference path='../ts_definitions/libs/angularjs/angular-route.d.ts' />
/// <reference path='../ts_definitions/libs/angular-ui-bootstrap/angular-ui-bootstrap.d.ts' />
/// <reference path='../ts_definitions/libs/ng-grid/ng-grid.d.ts' />


/// <reference path='../_all.ts' />
var app;
(function (app) {
    var AppController = (function () {
        function AppController($scope, scenarioService, $location) {
            this.scope = $scope;
            this.scope.vm = this;
            this.scope.tabs = [];
            this.scenarioService = scenarioService;
            this.loadInitialData();
        }
        AppController.prototype.loadInitialData = function () {
            var me = this;
            this.scenarioService.loadInitialData().then(function (data) {
                me.scope.scenarios = data.scenarios;
                me.scope.affectedItems = data.affectedItems;
                me.scope.probabilities = data.probabilities;
                me.scope.revenueImpacts = data.revenueImpacts;

                // Test adding a scenario to the tabs.
                angular.forEach(me.scope.scenarios, function (thisScenario, index) {
                    var value = {
                        title: thisScenario.name,
                        content: thisScenario.description,
                        disabled: false
                    };
                    me.scope.tabs.push(value);
                });
            });
        };

        AppController.prototype.addTestScenario = function () {
            var testScenario = new app.Scenario();
            testScenario.id = 1;
            testScenario.name = "Test Scenario";
            testScenario.description = "Test scenario description.";
            testScenario.dateUpdated = new Date();
            testScenario.probability = this.scope.probabilities[3];
            testScenario.impactCost = 8.99;
            testScenario.impactLength = 2;
            testScenario.planEffectiveness = "Good";
            testScenario.totalImpact = 19.99;

            var item = new app.ScenarioItem();
            item.id = 1;
            item.itemDescription = "Item 1";
            item.cost = 42;
            item.timeToRecover = 8;
            item.impactSeverity = this.scope.revenueImpacts[2];
            item.affectedItem = this.scope.affectedItems[4];

            testScenario.scenarioItems.push(item);

            this.scenarioService.saveScenarios([testScenario]);
        };
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
            var deferred = this.promiseService.defer();
            deferred.resolve(JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]'));
            return deferred.promise;
        };

        ScenarioService.prototype.saveScenarios = function (scenarios) {
            var deferred = this.promiseService.defer();
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(scenarios));
            deferred.resolve();
            return deferred.promise;
        };

        ScenarioService.prototype.loadProbabilities = function () {
            var deferred = this.promiseService.defer();
            var _this = this;

            this.httpService.get("data/probabilities.json").then(function (result) {
                deferred.resolve(result.data.data);
            });

            return deferred.promise;
        };

        ScenarioService.prototype.loadRevenueImpacts = function () {
            var deferred = this.promiseService.defer();
            var _this = this;

            this.httpService.get("data/revenueImpacts.json").then(function (result) {
                deferred.resolve(result.data.data);
            });

            return deferred.promise;
        };

        ScenarioService.prototype.loadAffectedItems = function () {
            var deferred = this.promiseService.defer();
            var _this = this;

            this.httpService.get("data/affectedItems.json").then(function (result) {
                deferred.resolve(result.data.data);
            });

            return deferred.promise;
        };

        ScenarioService.prototype.loadInitialData = function () {
            var deferred = this.promiseService.defer();
            var _this = this;
            var finalResult = new app.InitialDataMap();

            this.promiseService.all([
                this.loadProbabilities(),
                this.loadRevenueImpacts(),
                this.loadAffectedItems(),
                this.loadScenarios()
            ]).then(function (result) {
                finalResult.probabilities = result[0];
                finalResult.revenueImpacts = result[1];
                finalResult.affectedItems = result[2];
                finalResult.scenarios = result[3];
                deferred.resolve(finalResult);
            });

            return deferred.promise;
        };
        ScenarioService.$inject = [
            '$http',
            '$q'
        ];
        return ScenarioService;
    })();
    app.ScenarioService = ScenarioService;
})(app || (app = {}));


/// <reference path='../_all.ts' />
/// <reference path="../controllers/AppController.ts" />
/// <reference path="../services/ScenarioService.ts" />
var app;
(function (app) {
    'use strict';

    angular.module("angularPhoenix", [
        'ui.bootstrap',
        'ngRoute',
        'myApp.views.view1',
        'myApp.views.view2',
        'myApp.version'
    ]).config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({ redirectTo: '/views/view1' });
        }]).controller('AppController', app.AppController).service('scenarioService', app.ScenarioService);
    ;
})(app || (app = {}));


/// <reference path='../_all.ts' />


/// <reference path='../_all.ts' />


var app;
(function (app) {
    var AffectedItem = (function () {
        function AffectedItem() {
        }
        return AffectedItem;
    })();
    app.AffectedItem = AffectedItem;
})(app || (app = {}));


/// <reference path="" />
var app;
(function (app) {
    var InitialDataMap = (function () {
        function InitialDataMap() {
        }
        return InitialDataMap;
    })();
    app.InitialDataMap = InitialDataMap;
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
            this.scenarioItems = [];
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



//# sourceMappingURL=angular-seed-test-all.js.map