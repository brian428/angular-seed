declare module main {
    interface IMainScope extends ng.IScope {
        newTodo: string;
        remainingCount: number;
        doneCount: number;
        allChecked: boolean;
        statusFilter: {
            completed: boolean;
        };
        location: ng.ILocationService;
        vm: MainController;
    }
}
