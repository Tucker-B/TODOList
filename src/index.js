console.log("Running inside /src/ via index.js");
import {Project} from "./project.js"
import {TodoList} from "./todoList"
import {TodoItem} from "./todoItem"

let japaneseTodoItemOne = new TodoItem("Do Listening Practice", 2, "1 Week", "Today");
let japaneseTodoItemTwo = new TodoItem("Do Kanji Practice", 3, "Today", "Today");
let japaneseTodoList = new TodoList("Japanese");

japaneseTodoList.addTodoItem(japaneseTodoItemOne);
japaneseTodoList.addTodoItem(japaneseTodoItemTwo);

console.log(japaneseTodoList);


// 1. 'Todo' items will be objects dynamically added to list via site

// 2. Think of properties todo object will have
//      a.) title, description, dueDate, priority
//      b.) category (could also be an object user can create)
//      c.) sub 'todo' items?
//      d.) Project Name

// 3. Users should be able to have projects / templates they can make

// 4. Separate Application logic. & Separate that from DOM-related code

// 5. Functionality:
//      a.) View All Projects
//      b.) Open a project & view All TODOs
//      c.) Expand a single TODO to see/edit details
//      d.) Delete a TODO


// Class TODO_Item

// Module: AccessList
// Module: TODO_Item
// Module: Project. Class too

// Project -> List -> TODO