//SELECTORS
const newItem = document.querySelector(".new-item");
const addBtn = document.querySelector(".add-btn");
const toDoItems = document.querySelector(".todo-container");

//EVENT LISTENERS
addBtn.addEventListener("click", addItem);

//FUNCTIONS
function addItem(event) {
  event.preventDefault();
  //New DIV
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  //New To-do Item
  const newTodo = document.createElement("li");
  newTodo.classList.add("new-todo");
  newTodo.innerHTML = newItem.value;
  newDiv.appendChild(newTodo);
  //Checked button
  const checkedBtn = document.createElement("button");
  checkedBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  checkedBtn.classList.add("checked-button");
  newDiv.appendChild(checkedBtn);
  //Delete button
  const deleteItem = document.createElement("button");
  deleteItem.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteItem.classList.add("delete-item");
  newDiv.appendChild(deleteItem);

  document.querySelector(".todo-container").appendChild(newDiv);

  newItem.value = "";
}
