const addTaskButton = document.querySelector('#add');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#to-do-list');
addTaskButton.addEventListener('click', function(){
    if (taskInput.value === ""){
        alert("add a task!");
    } else {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        li.addEventListener("click",function(){
            li.classList.toggle("completed");
        });
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        deleteBtn.classList.toggle('deleteicon')
        deleteBtn.addEventListener("click", function(){
            li.remove();

        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
})