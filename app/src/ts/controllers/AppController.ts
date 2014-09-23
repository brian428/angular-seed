/// <reference path='../_all.ts' />

module app {

	export class AppController {

		private scope : app.IAppScope;
        private scenarioService: app.ScenarioService;

        public static $inject = [
			'$scope',
            'scenarioService',
			'$location'
		];

		constructor( $scope: app.IAppScope, scenarioService: app.ScenarioService, $location: ng.ILocationService ) {
            this.scope = $scope;
            this.scope.vm = this;
            this.scope.tabs = [];
            this.scenarioService = scenarioService;
            this.loadInitialData();
		}

        loadInitialData() {
            var me = this;
            this.scenarioService.loadInitialData().then(
                ( data: InitialDataMap ) => {
                    me.scope.scenarios = data.scenarios;
                    me.scope.affectedItems = data.affectedItems;
                    me.scope.probabilities = data.probabilities;
                    me.scope.revenueImpacts = data.revenueImpacts;

                    // Test adding a scenario to the tabs.
                    angular.forEach( me.scope.scenarios, ( thisScenario: Scenario, index ) => {
                        var value: any = {
                            title: thisScenario.name,
                            content: thisScenario.description,
                            disabled: false
                        };
                        me.scope.tabs.push( value );
                    })
                }
            );
        }

        addTestScenario() {
            var testScenario: Scenario = new Scenario();
            testScenario.id = 1;
            testScenario.name = "Test Scenario"
            testScenario.description = "Test scenario description."
            testScenario.dateUpdated = new Date();
            testScenario.probability = this.scope.probabilities[3];
            testScenario.impactCost = 8.99;
            testScenario.impactLength = 2;
            testScenario.planEffectiveness = "Good";
            testScenario.totalImpact = 19.99;

            var item: ScenarioItem = new ScenarioItem();
            item.id = 1;
            item.itemDescription = "Item 1";
            item.cost = 42;
            item.timeToRecover = 8;
            item.impactSeverity = this.scope.revenueImpacts[2];
            item.affectedItem = this.scope.affectedItems[4];

            testScenario.scenarioItems.push( item );

            this.scenarioService.saveScenarios( [testScenario] );

        }

	}

}
