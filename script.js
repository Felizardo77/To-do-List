
const hoje_btn = document.querySelector(".today_btn")
hoje_btn.addEventListener("click", () => {
  const display = document.querySelector(".display_content");
  display.innerHTML = "";

  const hoje_span = document.createElement("span");
  hoje_span.innerText = "Hoje";
  hoje_span.className = "titles";

  const task_container = document.createElement("div");
  task_container.className = "task_container";

  const add_task = document.createElement("span");
  add_task.innerText = "+ adicionar tarefa";
  add_task.style.setProperty("cursor", "pointer");
  add_task.className = "add_task";
  add_task.id = "add_task";

  task_container.append(add_task);

  //Mostrar todas as tarefas de Hoje

  //Adicionar os elementos ao parent
  display.append(hoje_span, task_container);
});

const add_task = document.querySelector(".add_task");
