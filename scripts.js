document.getElementById('add-list').addEventListener('click', addNewList);

function addNewList() {
    const listContainer = document.getElementById('list-container');
    const newList = document.createElement('div');
    newList.className = 'notebook';
    newList.innerHTML = `
        <input type="text" class="list-title" placeholder="Name Your List" />
        <ul class="tasks"></ul>
        <input type="text" class="task-input" placeholder="Add a new task..." />
        <button class="add-task">Add Task</button>
    `;
    listContainer.appendChild(newList);
    setupList(newList);
}

// Setup initial list
document.querySelectorAll('.notebook').forEach(setupList);

function setupList(listElement) {
    const tasksContainer = listElement.querySelector('.tasks');
    const taskInput = listElement.querySelector('.task-input');
    const addTaskButton = listElement.querySelector('.add-task');

    addTaskButton.addEventListener('click', function() {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            const newTask = document.createElement('li');
            newTask.className = 'task-item';
            newTask.textContent = taskValue;
            tasksContainer.appendChild(newTask);
            taskInput.value = ''; // Clear input after adding
        }
    });
}
