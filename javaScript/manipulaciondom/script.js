import checkCompleted from "./components/checkCompleted.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (event) => {
  event.preventDefault();
  console.log(event);
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");

  const taskContent = document.createElement("div");
  taskContent.appendChild(checkCompleted());
  taskContent.appendChild(titleTask(value));

  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);

  input.value = "";
};

btn.addEventListener("click", createTask);

const titleTask = (value) => {
  const i = document.createElement("span");
  i.classList.add("task");
  i.innerText = value;
  return i;
};
