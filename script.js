function addTask(){
    var taskImput = document.getElementById("newTask");
    var taskList = document.getElementById("tasklist");

    if(taskImput.value.trim() != ''){
        var newTask = document.createElement('li')
        newTask.className = "group flex items-center justify-between p-2 boder-b w-[400px]"
        newTask.innerHTML = "</span>" + taskImput.value.trim() + "</span>" + 
        "<button class='text-red-500 hidden group-hover:block' onclick='removeTask(this)'>Excluir</button>"

        taskList.appendChild(newTask)
        taskImput.value = ''

        Toastify({
            text: 'Tarefa criada com sucesso!',
            style: {
                background: 'green'
            }
        }).showToast()
    }else{
        Toastify({
            text: 'Erro: Insira o titulo da tarefa!',
            style: {
                background: 'red'
            }
        }).showToast()
    }

}

function removeTask(button){
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem)
}