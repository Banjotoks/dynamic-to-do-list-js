document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Ensure elements exist before adding event listeners
    if (addButton && taskInput && taskList) {
        // Add task function
        function addTask() {
            const taskText = taskInput.value.trim();

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
            });

            // Append elements
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            // Clear input field
            taskInput.value = '';
        }

        // Event listener for button click
        addButton.addEventListener('click', () => {
            addTask();
        });

        // Event listener for pressing 'Enter' key
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    } else {
        console.error('One or more DOM elements not found:', { addButton, taskInput, taskList });
    }
});

