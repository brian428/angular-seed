/// <reference path='../controllers/TodoController.ts' />

module todos {
	export interface ITodoScope extends ng.IScope {
		newTodo: string;
		remainingCount: number;
		doneCount: number;
		allChecked: boolean;
		statusFilter: { completed: boolean; };
		location: ng.ILocationService;
		vm: TodoController;
	}
}