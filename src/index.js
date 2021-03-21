import {createProjectForm, createProject} from "./project.js"

// ** TODO TASKS **
// 1. Fix bugs
//     a. Cannot add todo items to any list other than the first one.
//     b. Forms continue to be displayed even after submitting
//     c. Todo Item property input boxes aren't clickable for half of the box
// 2. Visual Overhaul to mimic other todolist apps
// 3. Save input to local storage so that data persists upon multiple visits
// 4. Restructure code to make it less messy, esp. around event listeners
// 5. Have ability to delete projects, lists, and todos
// 6. Have ability to update projects, lists, and todos


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
