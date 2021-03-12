class TodoList {

    // Array that will hold all todo items related to specific list
    todoItems = [];

    constructor(name) {
        this.name = name;
    }

    addTodoItem(todoItem) {
        this.todoItems.push(todoItem);
    }

    removeTodoItem(todoItem) {
        todoItemIndex = this.todoItems.indexOf(todoItem);
        this.todoItems.splice(todoItemIndex, 1);
    }
}

export {TodoList}