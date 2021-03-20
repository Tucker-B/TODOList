import {createProjectForm, createProject} from "./project.js"

// ** TODO TASKS **
// 4. Add ability to add lists to project
// 5. Add ability to add todos to lists

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
