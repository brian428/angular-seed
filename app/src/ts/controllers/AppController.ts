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

            var me = this;
            this.scenarioService.loadInitialData().then(
                ( data: InitialDataMap ) => {
                    me.scope.scenarios = data.scenarios;
                    me.scope.affectedItems = data.affectedItems;
                    me.scope.probabilities = data.probabilities;
                    me.scope.revenueImpacts = data.revenueImpacts;
                }
            );
		}

	}

}
