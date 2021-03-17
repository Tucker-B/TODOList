import {createProjectForm, createProject} from "./project.js"
import {TodoList} from "./todoList"
import {TodoItem} from "./todoItem"

// ** TODO TASKS **
// 4. Add ability to add lists to project
// 5. Add ability to add todos to lists

let japaneseTodoItemOne = new TodoItem("Do Listening Practice", 2, "1 Week", "Today");
let japaneseTodoItemTwo = new TodoItem("Do Kanji Practice", 3, "Today", "Today");
let japaneseTodoList = new TodoList("Japanese");

japaneseTodoList.addTodoItem(japaneseTodoItemOne);
japaneseTodoList.addTodoItem(japaneseTodoItemTwo);

console.log(japaneseTodoList.name);

(function clickListener() {
    // Creates form for new project once "Create a Project!" button is clicked
    let projectCreateButton = document.querySelector(`#Project-Create-Button`);
    projectCreateButton.addEventListener('click', () => {

        // Creates form for new project
        createProjectForm();

        // Creates project once the submit button is clicked
        let projectFormSubmitButton = document.querySelector(`#Submit-Button`);
        projectFormSubmitButton.addEventListener('click', () => {
            // Creates project
            createProject();
        });
    });

    
})();
