class TodoItem {
    constructor(name, priority, dueDate, createdDate) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.createdDate = createdDate;
    }

    // Allows user to change name of todo item
    changeName(newName) {
        this.name = newName;
    }

    // Allows user to change priority of todo item
    changePriority(newPriority) {
        this.priority = newPriority;
    }

    // Allows user to change due date of todo item
    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

}

function createTodoItemForm(listName) {
    // List Div that holds all related todos in index.html
    let container = document.querySelector(`#${listName}-div`);

    // Form Element
    let formElement = document.createElement('form');
    formElement.id = "Todo-Form";
    formElement.setAttribute("onsubmit", "return false");

    // Name Label for Todo's name
    let nameLabelElement = document.createElement(`label`);
    nameLabelElement.setAttribute("for", "name");
    nameLabelElement.textContent = "Name of Todo:";

    // Priority Label for Todo's priority
    let priorityLabelElement = document.createElement(`label`);
    priorityLabelElement.setAttribute("for", "priority");
    priorityLabelElement.textContent = "Priority of Todo:";

    // Due Date Label for Todo's due date
    let dueDateLabelElement = document.createElement(`label`);
    dueDateLabelElement.setAttribute("for", "dueDate");
    dueDateLabelElement.textContent = "Due Date of Todo:";

    // Break line elements to separate label from input box - name
    let nameBrLineElement = document.createElement(`br`);
    let nameBrLineElementTwo = document.createElement(`br`);

    // Break line elements to separate label from input box - priority
    let priorityBrLineElement = document.createElement(`br`);
    let priorityBrLineElementTwo = document.createElement(`br`);

    // Break line elements to separate label from input box - due date
    let dueDateBrLineElement = document.createElement(`br`);
    let dueDateBrLineElementTwo = document.createElement(`br`);

    // Name Input Box for Todo's name
    let nameInputElement = document.createElement(`input`);
    nameInputElement.setAttribute("type", "text");
    nameInputElement.id = "name";
    nameInputElement.setAttribute("name", "name");

    // Priority Input Box for Todo's Priority
    let priorityInputElement = document.createElement(`input`);
    priorityInputElement.setAttribute("type", "text");
    priorityInputElement.id = "priority";
    priorityInputElement.setAttribute("name", "priority");

    // Due Date Input Box for Todo's Due Date
    let dueDateInputElement = document.createElement(`input`);
    dueDateInputElement.setAttribute("type", "text");
    dueDateInputElement.id = "dueDate";
    dueDateInputElement.setAttribute("name", "dueDate");

    // Submit button that calls createTodoItem() when clicked
    let submitInputElement = document.createElement(`input`);
    submitInputElement.id = "Todo-Submit-Button";
    submitInputElement.setAttribute("type", "submit");
    submitInputElement.setAttribute("value", "Submit");

    // Appends all child elements to main form before appending form to content div
    formElement.appendChild(nameLabelElement);
    formElement.appendChild(nameBrLineElement);
    formElement.appendChild(nameInputElement);
    formElement.appendChild(nameBrLineElementTwo);

    formElement.appendChild(priorityLabelElement);
    formElement.appendChild(priorityBrLineElement);
    formElement.appendChild(priorityInputElement);
    formElement.appendChild(priorityBrLineElementTwo);

    formElement.appendChild(dueDateLabelElement);
    formElement.appendChild(dueDateBrLineElement);
    formElement.appendChild(dueDateInputElement);
    formElement.appendChild(dueDateBrLineElementTwo);

    formElement.appendChild(submitInputElement);

    // Appends form to content div
    container.appendChild(formElement);

    console.log("inside createTodoItemForm()");
}

function createTodoItem(listName) {
    let formData = document.querySelector(`#Todo-Form`);
    let todoName = formData[0].value;
    let todoPriority = formData[1].value;
    let todoDueDate = formData[2].value;

    let newTodo = new TodoItem(todoName, todoPriority, todoDueDate, "Today");

    console.log("New list successfully created. Below is the name of the list:");
    console.log(`Name: ${newTodo.name}, Priority: ${newTodo.priority}, Due Date: ${newTodo.dueDate}`);
    
    displayTodoItem(newTodo, listName);
}

function displayTodoItem(todoItem, listName) {
    // List Div
    let container = document.querySelector(`#${listName}-div`);

    // Div surrounding todo item
    let todoDiv = document.createElement(`div`);
    todoDiv.id = `${todoItem.name}-div`;

    // Name of Todo
    let todoHeader = document.createElement(`h4`);
    todoHeader.id = todoItem.name;
    todoHeader.textContent = todoItem.name;

    // Appending all child elements to todo div then todo div to list div
    todoDiv.appendChild(todoHeader);
    container.appendChild(todoDiv);
}

export {createTodoItemForm, createTodoItem}