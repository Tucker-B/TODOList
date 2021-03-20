import {createListForm, createList} from "./todoList"

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
    formElement.id = "Project-Form";
    formElement.setAttribute("onsubmit", "return false");

    // Name Label for Project's name
    let nameLabelElement = document.createElement(`label`);
    nameLabelElement.setAttribute("for", "name");
    nameLabelElement.textContent = "Name of Project:";

    // Break line element to separate labels from input boxes
    let brLineElement = document.createElement(`br`);
    let brLineElementTwo = document.createElement(`br`);

    // Name Input Box for Project's name
    let nameInputElement = document.createElement(`input`);
    nameInputElement.setAttribute("type", "text");
    nameInputElement.id = "name";
    nameInputElement.setAttribute("name", "name");

    // Submit button that calls createProject() when clicked
    let submitInputElement = document.createElement(`input`);
    submitInputElement.id = "Submit-Button";
    submitInputElement.setAttribute("type", "submit");
    submitInputElement.setAttribute("value", "Submit");

    // Appends all child elements to main form before appending form to content div
    formElement.appendChild(nameLabelElement);
    formElement.appendChild(brLineElement);
    formElement.appendChild(nameInputElement);
    formElement.appendChild(brLineElementTwo);
    formElement.appendChild(submitInputElement);

    // Appends form to content div
    container.appendChild(formElement);
}
// Creates an object of the Project class using the provided information from the input box
function createProject() {
    let formData = document.querySelector(`#Project-Form`);
    let projectName = formData[0].value;

    let newProject = new Project(projectName, "Today");

    console.log("New project successfully created. Below is the name of the project:");
    console.log(newProject.name);

    displayProject(newProject);
    
    let listCreateButton = document.querySelector(`#List-Create-Button`);
    listCreateButton.addEventListener('click', () => {

        createListForm(projectName);

        let listSubmitButton = document.querySelector(`#List-Submit-Button`);
        listSubmitButton.addEventListener('click', () => {
            createList(projectName);
        })
    });
}

function displayProject(project) {
    
    // Content Div that holds everything in index.html
    let container = document.querySelector(`#content`);

    // Div that will act as a box around the open project
    let projectDivElement = document.createElement(`div`);
    projectDivElement.id = `${project.name}-div`;
    projectDivElement.style.borderStyle = "solid";
    projectDivElement.style.borderWidth = "2px";
    projectDivElement.style.borderRadius = "5px";
    
    // Header that will display the project's name
    let projectHeaderElement = document.createElement(`h2`);
    projectHeaderElement.textContent = project.name;

    // Button that will add a list when clicked
    let listCreateButton = document.createElement(`button`);
    listCreateButton.id = "List-Create-Button";
    listCreateButton.textContent = "Add List!";

    projectDivElement.appendChild(projectHeaderElement);
    projectDivElement.appendChild(listCreateButton);

    container.appendChild(projectDivElement);

}

export {createProjectForm, createProject}