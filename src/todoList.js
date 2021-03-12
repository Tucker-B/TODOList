class TodoList {
    todoItems = [];
    constructor(name) {
        this.name = name;
    }

    addTodoItem(todoItem) {
        this.todoItems.push(todoItem);
    }
}

export {TodoList}