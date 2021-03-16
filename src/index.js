import {Project, createProjectForm} from "./project.js"
import {TodoList} from "./todoList"
import {TodoItem} from "./todoItem"

// ** TODO TASKS **
// 1. Finish createProjectForm() to create form
// 2. Add Submit Button
// 3. Create a project using information submitted
// 4. Add ability to add lists to project
// 5. Add ability to add todos to lists

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
