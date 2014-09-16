declare module app {
    /**
    * The main controller for the app. The controller:
    * - retrieves and persists the model via the todoStorage service
    * - exposes the model to the template and provides event handlers
    */
    class AppController {
        private $scope;
        private $location;
        static $inject: string[];
        constructor($scope: ng.IScope, $location: ng.ILocationService);
    }
}
