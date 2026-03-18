const todoValue = document.querySelector(".todo-value") as HTMLInputElement
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement
const clearTodo = document.querySelector(".clear-todos") as HTMLButtonElement
const todoList = document.querySelector(".todoList") as HTMLUListElement

interface Todo {
    id: string;
    title: string;
    isComplate: boolean;
}

const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")

const addtodoHandler = (event: Event) => {

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
        <li>
          ${todo.title}<span class="icon"><i class="fas fa-trash"></i></span>
        </li>`)
}

const addTodoInLocalStoreg = () => {

    localStorage.setItem("todos", JSON.stringify(todos))

}


addTodo.addEventListener("click", (event) => addtodoHandler(event))
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
    todos.forEach(todo => {
        addTodoToDom(todo)
    })
})