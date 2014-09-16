declare module main {
    /**
    * The main controller for the app. The controller:
    * - retrieves and persists the model via the todoStorage service
    * - exposes the model to the template and provides event handlers
    */
    class MainController {
        private $scope;
        private $location;
        static $inject: string[];
        constructor($scope: IMainScope, $location: ng.ILocationService);
    }
}
