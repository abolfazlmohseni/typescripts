const todoValue = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const clearTodo = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
addTodo.addEventListener("click", (event) => addtodoHandler(event));
todoValue.addEventListener("keypress", (event => {
    if (event.code === "Enter") {
        addtodoHandler(event);
    }
}));
clearTodo.addEventListener("click", () => {
    localStorage.clear();
    todoList.innerHTML = "";
});
window.addEventListener("DOMContentLoaded", () => {
    renderTodo();
});
const addtodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: todoValue.value,
        isComplate: false
    };
    addTodoToDom(newTodo);
    todoValue.value = "";
    todoValue.focus();
    todos.push(newTodo);
    addTodoInLocalStoreg();
};
const addTodoToDom = (todo) => {
    todoList.insertAdjacentHTML("beforeend", ` 
        <li onclick='removeTodo("${todo.id}")'>
          ${todo.title}<span class="icon"><i class="fas fa-trash"></i></span>
        </li>`);
};
const addTodoInLocalStoreg = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const removeTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
    addTodoInLocalStoreg();
    todoList.innerHTML = "";
    renderTodo();
};
const renderTodo = () => {
    todos.forEach(todo => addTodoToDom(todo));
};
//# sourceMappingURL=todo.js.map