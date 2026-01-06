const input = document.getElementById("todo-input") as HTMLInputElement;
const button = document.getElementById("add-btn") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

button.addEventListener("click", () => {
    const value: string = input.value.trim();

    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    li.addEventListener("click", () => {
        li.remove(); 
    });

    list.appendChild(li);
    input.value = "";
});
