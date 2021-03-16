// Project class that will be used when creating projects on website
class Project {

    // Array that will hold all lists related to specific project object
    todoLists = [];

    constructor(name, createdDate) {
        this.name = name;
        this.createdDate = createdDate;
    }
    // Adds todo list to project object
    addTodoList(todoList) {
        this.todoLists.push(todoList);
    }
    // Removes todo list from project object
    removeTodoList(todoList) {
        todoListIndex = this.todoLists.indexOf(todoList);
        this.todoItems.splice(todoListIndex, 1);
    }
}
// Function that creates a form on the site and retrieves information needed to create project object
function createProjectForm() {

    // Content Div that holds everything in index.html
    let container = document.querySelector(`#content`);

    // Form Element
    let formElement = document.createElement('form');

    // Name Label for Project's name
    let nameLabelElement = document.createElement(`label`);
    nameLabelElement.setAttribute("for", "name");
    nameLabelElement.textContent = "Name of Project:";

    // Break line element to separate labels from input boxes
    let brLineElement = document.createElement(`br`);

    // Name Input Box for Project's name
    let nameInputElement = document.createElement(`input`);
    nameInputElement.setAttribute("type", "text");
    nameInputElement.id = "name";
    nameInputElement.setAttribute("name", "name");

    // Appends all child elements to main form before appending form to content div
    formElement.appendChild(nameLabelElement);
    formElement.appendChild(brLineElement);
    formElement.appendChild(nameInputElement);

    // Appends form to content div
    container.appendChild(formElement);
}

export {Project, createProjectForm}