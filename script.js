let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }
}

function renderTasks(filter) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (!filter || (filter === "completed" && task.completed) || (filter === "incompleted" && !task.completed) || filter === "all") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="toggleTask(${index})">${task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
                <button onclick="removeTask(${index})">Remove</button>
            `;
            taskList.appendChild(li);
        }
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks(filter) {
    renderTasks(filter);
}

// Initial render
renderTasks();
