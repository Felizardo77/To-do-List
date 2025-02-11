const hoje_btn = document.querySelector(".today_btn");
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
  add_task.addEventListener("click", () => {
    addTask(null, loadTasks().length);
  });

  task_container.append(add_task);
  //Adicionar os elementos ao parent
  display.append(hoje_span, task_container);

  //Mostrar todas as tarefas de Hoje
  const tarefas = loadTasks();
  let id = 0;
  tarefas.forEach((item) => {
    addTask(item, id);
    id++;
  });
});

function addTask(taskData = null, id) {
  //Adiciona uma nova Tarefa
  const tasks = document.querySelector(".task_container");
  const task = document.createElement("div");
  task.className = "task";
  task.id = id;
  //Task
  const taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  taskCheck.className = "task-check";
  taskCheck.name = "task-check";
  taskCheck.addEventListener("change", () => {
    checkTask(task.id);
  });

  const taskText = document.createElement("input");
  taskText.type = "text";
  taskText.placeholder = "Escreva a tarefa ...";
  taskText.className = "task-text";
  taskText.name = "task-text";
  taskText.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
      //Verificar se essa tarefa existe
      let tasks = loadTasks();
      if (id < tasks.length) {
        tasks[id].tarefa = taskText.value;
        saveTasks(tasks)
      } else {
        console.log(id)
        taskText.blur();
        saveTask({
          id: task.id,
          concluido: taskCheck.checked,
          tarefa: taskText.value,
        });
      }
    }
  });

  //Adicionar dados a task se for o caso
  if (taskData !== null) {
    taskCheck.checked = taskData.concluido;
    taskText.value = taskData.tarefa;
  }

  task.append(taskCheck, taskText);
  tasks.append(task);
}

function loadTasks() {
  let tarefasString = window.localStorage.getItem("tarefas");
  if (tarefasString === null) {
    saveTasks([]);
  }
  tarefasString = window.localStorage.getItem("tarefas");
  let tarefas = JSON.parse(tarefasString);
  return tarefas;
}

function saveTasks(tarefas) {
  window.localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function checkTask(id) {
  let tarefas = loadTasks();
  tarefas[id].concluido = !tarefas[id].concluido;
  saveTasks(tarefas);
}

function saveTask(tarefa) {
  let tarefas = loadTasks();
  tarefas.push(tarefa);
  saveTasks(tarefas);
}
