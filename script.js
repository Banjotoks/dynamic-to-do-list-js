document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Add task function
    function addTask(taskText, save = true) {
        // Validate input
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create task elements
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Event listener to remove task
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
            removeTask(taskText);
        });

        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';

        // Save task to Local Storage
        if (save) {
            saveTask(taskText);
        }
    }

    // Save task to Local Storage
    function saveTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove task from Local Storage
    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Event listener for button click
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Event listener for pressing 'Enter' key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
