//SELECTORS
const newItem = document.querySelector(".new-item");
const addBtn = document.querySelector(".add-btn");
const toDoItems = document.querySelector(".todo-container");
const filterOption = document.querySelector(".filter-todo");

//EVENT LISTENERS
addBtn.addEventListener("click", addItem);
toDoItems.addEventListener("click", removeItem);
filterOption.addEventListener("click", filterTodo);

//FUNCTIONS
function addItem(event) {
  event.preventDefault();
  //New DIV
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  //New To-do Item
  const newTodo = document.createElement("li");
  newTodo.classList.add("new-todo");
  if (
    newItem.value === "Ana Grazyelle Dos Santos Rocha" ||
    newItem.value === "Grazy" ||
    newItem.value === "Grazyelle"
  ) {
    newTodo.innerHTML = "Gostosa";
  } else {
    newTodo.innerHTML = newItem.value;
  }
  newDiv.appendChild(newTodo);
  //Checked button
  const checkedBtn = document.createElement("button");
  checkedBtn.innerHTML = '<i id="check" class="fa-solid fa-square-check"></i>';
  checkedBtn.classList.add("checked-button");
  newDiv.appendChild(checkedBtn);
  //Delete button
  const deleteItem = document.createElement("button");
  deleteItem.innerHTML = '<i id="trash" class="fa-solid fa-trash-can"></i>';
  deleteItem.classList.add("delete-item");
  newDiv.appendChild(deleteItem);

  document.querySelector(".todo-container").appendChild(newDiv);

  newItem.value = "";
}

//Remove item function
function removeItem(e) {
  const item = e.target;
  if (item.classList[0] === "delete-item") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  //Check Mark
  if (item.classList[0] === "checked-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = toDoItems.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

functionn;
