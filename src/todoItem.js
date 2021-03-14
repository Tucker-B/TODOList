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

export {TodoItem}