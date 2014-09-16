/// <reference path='../controllers/AppController.ts' />

module app {
	export interface IAppScope extends ng.IScope {
        scenarios: Scenario[];
		tabs: Array<Scenario>;
		location: ng.ILocationService;
		vm: AppController;
	}
}