const todoValue = document.querySelector(".todo-value") as HTMLInputElement
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement
const clearTodo = document.querySelector(".clear-todos") as HTMLButtonElement
const todoList = document.querySelector(".todoList") as HTMLUListElement

interface Todo {
    id: string;
    title: string;
    isComplate: boolean;
}

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")

addTodo.addEventListener("click", (event) => submitHandler(event))

todoValue.addEventListener("keypress", (event => {
    if (event.code === "Enter") {
        addtodoHandler(event)
    }
}))

clearTodo.addEventListener("click", () => {
    localStorage.clear()
    todoList.innerHTML = ""
})


window.addEventListener("DOMContentLoaded", () => {
    renderTodo()
})

const submitHandler = (event: Event) => {

    event.preventDefault();

    const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: todoValue.value,
        isComplate: false
    }

    addTodoToDom(newTodo)
    todoValue.value = ""
    todoValue.focus()
    todos.push(newTodo)
    addTodoInLocalStoreg()
}

const addTodoToDom = (todo: Todo) => {
    todoList.insertAdjacentHTML("beforeend", ` 
        <li onclick='removeTodo("${todo.id}")'>
          ${todo.title}<span class="icon"><i class="fas fa-trash"></i></span>
        </li>`)
}

const addTodoInLocalStoreg = () => {

    localStorage.setItem("todos", JSON.stringify(todos))

}

const removeTodo = (id: string) => {
    todos = todos.filter(todo => todo.id !== id)
    addTodoInLocalStoreg()
    todoList.innerHTML = ""
    renderTodo()
}

const renderTodo = () => {
    todos.forEach(todo => addTodoToDom(todo))
}