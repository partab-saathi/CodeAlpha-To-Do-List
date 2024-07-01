// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="task">${taskText}</span>
                <button class="edit-btn">Edit</button>
                <button class="remove-btn">Remove</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskAction(event) {
        if (event.target.classList.contains('remove-btn')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        } else if (event.target.classList.contains('edit-btn')) {
            const li = event.target.parentElement;
            const taskText = li.querySelector('.task').textContent;
            taskInput.value = taskText;
            taskList.removeChild(li);
        }
    }
});
