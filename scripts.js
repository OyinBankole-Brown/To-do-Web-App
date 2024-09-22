let taskInput = document.querySelector('.task');
let addButton = document.querySelector('.add-task');
let taskList = document.querySelector('.task-list');

// Get tasks from localStorage or set to an empty array if none exist
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Helper function to log what's in localStorage
function logLocalStorage() {
    console.log("Current tasks in localStorage:", JSON.parse(localStorage.getItem('tasks')));
}

// Function to display tasks
function displayTask(task, index) {
    const newTask = document.createElement('div');
    newTask.classList.add('task-item');
    newTask.textContent = task.text;

    // Add a custom attribute to store the index of the task
    newTask.setAttribute('data-index', index);

    // If task is completed, add the 'completed' class
    if (task.completed) {
        newTask.classList.add('completed');
    }

    taskList.appendChild(newTask);
}

// Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
    logLocalStorage(); // Log current tasks in localStorage on page load

    tasks.forEach(function(task, index) {
        displayTask(task, index); // Display each task from localStorage
    });
});

// Event listener to add a task
addButton.addEventListener('click', function() {
    const taskValue = taskInput.value;

    // Check if input is not empty
    if (taskValue.trim() !== '') {
        const newTask = { text: taskValue, completed: false };
        tasks.push(newTask);

        // Display the task on the page
        displayTask(newTask, tasks.length - 1);

        // Save the tasks array to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        logLocalStorage(); // Log to check if the tasks are getting saved correctly

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.'); // Prevent empty tasks from being added
    }
});

// Event listener to mark tasks as complete/incomplete
taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('task-item')) {
        const index = e.target.getAttribute('data-index'); // Get the task index

        // Toggle the 'completed' class for the clicked task
        e.target.classList.toggle('completed');

        // Update the completed status in the tasks array
        tasks[index].completed = !tasks[index].completed;

        // Save the updated tasks array back to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        logLocalStorage(); // Log to check if the task completion status is getting updated
    }
});
