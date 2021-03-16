console.log("Running inside /src/ via index.js");
import {Project, createProjectForm} from "./project.js"
import {TodoList} from "./todoList"
import {TodoItem} from "./todoItem"

let japaneseTodoItemOne = new TodoItem("Do Listening Practice", 2, "1 Week", "Today");
let japaneseTodoItemTwo = new TodoItem("Do Kanji Practice", 3, "Today", "Today");
let japaneseTodoList = new TodoList("Japanese");

japaneseTodoList.addTodoItem(japaneseTodoItemOne);
japaneseTodoList.addTodoItem(japaneseTodoItemTwo);

console.log(japaneseTodoList.name);

(function clickListener() {
    let projectCreateButton = document.querySelector(`#Project-Create-Button`);

    projectCreateButton.addEventListener('click', () => {

        projectCreateButton.textContent = "Hello";

        createProjectForm();

    });


})();

// 4. Separate Application logic. & Separate that from DOM-related code

// 5. Functionality:
//      a.) View All Projects
//      b.) Open a project & view All TODOs
//      c.) Expand a single TODO to see/edit details
//      d.) Delete a TODO

// Project -> List -> TODO