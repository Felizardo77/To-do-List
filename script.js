
const hoje_btn = document.querySelector(".today_btn");
hoje_btn.addEventListener("click", () => {
  const display = document.querySelector(".display_content");
  display.innerHTML = ""

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
  //Adicionar os elementos ao parent
  display.append(hoje_span, task_container);

  //Mostrar todas as tarefas de Hoje
  const tarefas = loadTasks()
  tarefas.forEach(item =>{
    addTask(item)
  })
});

function addTask(taskData=null) {
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
        saveTask({
            concluido:taskCheck.checked,
            tarefa:taskText.value
        })
    }
  })

  //Adicionar dados a task se for o caso
  if(taskData !== null){
    taskCheck.checked = taskData.concluido
    taskText.value = taskData.tarefa
  }

  task.append(taskCheck, taskText);
  tasks.append(task);
}

function loadTasks(){
    let tarefasString = window.localStorage.getItem('tarefas')
    let tarefas = JSON.parse(tarefasString)
    return tarefas
}

function saveTasks(tarefas){
    window.localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function saveTask(tarefa){
    if(loadTasks() === null){
        saveTasks([])
    }
    let tarefas = loadTasks()
    tarefas.push(tarefa)
    saveTasks(tarefas)   
}
