document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    console.log('DOM elements selected:', { addButton, taskInput, taskList });

    // Ensure elements exist before adding event listeners
    if (addButton && taskInput && taskList) {
        // Add task function
        function addTask() {
            const taskText = taskInput.value.trim();
            console.log('Task input value:', taskText);

            // Validate input
            if (taskText === '') {
                alert('Please enter a task');
                return;
            }

            // Create task elements
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            console.log('List item created:', listItem);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            console.log('Remove button created:', removeButton);

            // Event listener to remove task
            removeButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
                console.log('Task removed:', listItem);
            });

            // Append elements
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            console.log('Task added to list:', listItem);

            // Clear input field
            taskInput.value = '';
            console.log('Task input field cleared');
        }

        // Event listener for button click
        addButton.addEventListener('click', () => {
            console.log('Add button clicked');
            addTask();
        });

        // Event listener for pressing 'Enter' key
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                console.log('Enter key pressed');
                addTask();
            }
        });
    } else {
        console.error('One or more DOM elements not found:', { addButton, taskInput, taskList });
    }
});
