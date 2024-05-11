function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = function() {
      li.classList.toggle("done");
    };
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function deleteTask(event) {
    var taskList = document.getElementById("taskList");
    var taskItem = event.target;
    taskList.removeChild(taskItem);
  }
  
  document.getElementById("taskList").addEventListener("click", deleteTask);
  