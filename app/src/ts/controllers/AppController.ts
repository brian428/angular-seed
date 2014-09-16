/// <reference path='../_all.ts' />

module app {
	'use strict';

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
            this.scenarioService.loadInitialData().then(
                ( data: any ) => {
                    this.scope.scenarios = data;
                }
            );
		}

	}

}
