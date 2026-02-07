"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const STORAGE_KEY = "todoTasks";
function loadTasks() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}
function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function addTaskToList(task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => {
        li.remove();
        removeTaskFromStorage(task);
    });
    list.appendChild(li);
}
function removeTaskFromStorage(taskToRemove) {
    const tasks = loadTasks();
    const updatedTasks = tasks.filter(task => task !== taskToRemove);
    saveTasks(updatedTasks);
}
function initializeTasks() {
    const tasks = loadTasks();
    tasks.forEach(addTaskToList);
}
button.addEventListener("click", () => {
    const value = input.value.trim();
    if (value === "")
        return;
    addTaskToList(value);
    const tasks = loadTasks();
    tasks.push(value);
    saveTasks(tasks);
    input.value = "";
});
document.addEventListener("DOMContentLoaded", initializeTasks);
