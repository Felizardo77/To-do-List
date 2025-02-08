const hoje_btn = document.querySelector(".today_btn");
hoje_btn.addEventListener("click", () => {
  const display = document.querySelector(".display_content");

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
  add_task.addEventListener("click", () => {
    addTask();
  });

  task_container.append(add_task);

  //Mostrar todas as tarefas de Hoje

  //Adicionar os elementos ao parent
  display.append(hoje_span, task_container);
});

function addTask() {
  //Adiciona uma nova Tarefa
  const tasks = document.querySelector('.task_container')
  const task = document.createElement("div");
  task.className = "task";
  //Task
  const taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  taskCheck.className = "task-check";
  taskCheck.name = "task-check";
  const taskText = document.createElement("input");
  taskText.type = "text";
  taskText.placeholder = 'Escreva a tarefa ...'
  taskText.className = "task-text";
  taskText.name = "task-text";
  taskText.addEventListener('keypress',(ev)=>{
    if(ev.key === 'Enter'){
        taskText.blur()
    }
  })

  task.append(taskCheck, taskText);
  tasks.append(task);
}
