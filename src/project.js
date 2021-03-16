class Project {

    // Array that will hold all lists related to specific project
    todoLists = [];

    constructor(name, createdDate) {
        this.name = name;
        this.createdDate = createdDate;
    }

    addTodoList(todoList) {
        this.todoLists.push(todoList);
    }

    removeTodoList(todoList) {
        todoListIndex = this.todoLists.indexOf(todoList);
        this.todoItems.splice(todoListIndex, 1);
    }
}

function createProjectForm() {

    let container = document.querySelector(`#content`);

    let formElement = document.createElement('form');

    container.appendChild(formElement);

}

export {Project, createProjectForm}