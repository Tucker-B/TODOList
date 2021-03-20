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

function createListForm(projectName) {
    
    // Content Div that holds everything in index.html
    let container = document.querySelector(`#${projectName}-div`);

    // Form Element
    let formElement = document.createElement('form');
    formElement.id = "List-Form";
    formElement.setAttribute("onsubmit", "return false");

    // Name Label for List's name
    let nameLabelElement = document.createElement(`label`);
    nameLabelElement.setAttribute("for", "name");
    nameLabelElement.textContent = "Name of List:";

    // Break line element to separate labels from input boxes
    let brLineElement = document.createElement(`br`);
    let brLineElementTwo = document.createElement(`br`);

    // Name Input Box for List's name
    let nameInputElement = document.createElement(`input`);
    nameInputElement.setAttribute("type", "text");
    nameInputElement.id = "name";
    nameInputElement.setAttribute("name", "name");

    // Submit button that calls createList() when clicked
    let submitInputElement = document.createElement(`input`);
    submitInputElement.id = "List-Submit-Button";
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

function createList(projectName) {
        let formData = document.querySelector(`#List-Form`);
        let listName = formData[0].value;
    
        let newList = new TodoList(listName);
    
        console.log("New list successfully created. Below is the name of the list:");
        console.log(newList.name);

        displayList(newList, projectName);
}

function displayList(todoList, projectName) {

    let container = document.querySelector(`#${projectName}-div`);

    let listDiv = document.createElement(`div`);
    listDiv.id = `${todoList.name}-div`;

    let listHeader = document.createElement(`h3`);
    listHeader.id = todoList.name;
    listHeader.textContent = todoList.name;

    listDiv.appendChild(listHeader);
    container.appendChild(listDiv);

}

export {createListForm, createList}