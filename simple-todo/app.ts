const input = document.getElementById("todo-input") as HTMLInputElement;
const button = document.getElementById("add-btn") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

type Task = string;

const STORAGE_KEY = "todoTasks";

function loadTasks(): Task[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveTasks(tasks: Task[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function addTaskToList(task: Task): void {
    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
        li.remove();
        removeTaskFromStorage(task);
    });

    list.appendChild(li);
}

function removeTaskFromStorage(taskToRemove: Task): void {
    const tasks = loadTasks();
    const updatedTasks = tasks.filter(task => task !== taskToRemove);
    saveTasks(updatedTasks);
}

function initializeTasks(): void {
    const tasks = loadTasks();
    tasks.forEach(addTaskToList);
}

button.addEventListener("click", () => {
    const value: string = input.value.trim();

    if (value === "") return;
    addTaskToList(value);

    const tasks = loadTasks();
    tasks.push(value);
    saveTasks(tasks);

    input.value = "";
});

document.addEventListener("DOMContentLoaded", initializeTasks);