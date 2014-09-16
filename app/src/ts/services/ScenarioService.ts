/// <reference path='../_all.ts' />

module app {

	export class ScenarioService {

        private STORAGE_ID = 'phoenix-angularjs-typescript';
        private httpService: ng.IHttpService;
        private promiseService: ng.IQService;

		public static $inject = [
			'$http',
            '$q'
		];

        constructor( $httpService: ng.IHttpService, $q: ng.IQService ) {
            this.httpService = $httpService;
            this.promiseService = $q;
		}

        loadScenarios(): Scenario[] {
            return JSON.parse( localStorage.getItem( this.STORAGE_ID ) || '[]' );
        }

        saveScenarios( scenarios: Scenario[] ) {
            localStorage.setItem( this.STORAGE_ID, JSON.stringify( scenarios ) );
        }

        loadProbabilities(): ng.IPromise<any> {
            var deferred: ng.IDeferred<any> = this.promiseService.defer();

            this.httpService.get( "data/probabilities.json" ).then(
                ( result: IDataResult ) => {
                    deferred.resolve( result.data );
                }
            );

            return deferred.promise;
        }

        loadRevenueImpacts(): ng.IPromise<any> {
            var deferred: ng.IDeferred<any> = this.promiseService.defer();

            this.httpService.get( "data/revenueImpacts.json" ).then(
                ( result: IDataResult ) => {
                    deferred.resolve( result.data );
                }
            );

            return deferred.promise;
        }

        loadInitialData(): ng.IPromise<any> {
            return this.promiseService.all([
                this.loadProbabilities(),
                this.loadRevenueImpacts()
            ]);
        }

	}

}
