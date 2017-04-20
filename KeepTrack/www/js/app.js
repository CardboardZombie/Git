function createArray()
{
    var taskArray = [];                                 
    var taskContent = localStorage.getItem('itemList');
    if(taskContent != null)
    {
        taskArray  = JSON.parse(taskContent);
    }
    return taskArray;
}
function addTask() 
{
    var taskList = createArray();
	var task = document.getElementById("taskValue").value;
	if(task == "")
	{
		alert("Error 404: Task Not Found!\nPlease Enter a Task before pressing the Add Button.");
		return;
	}
    document.getElementById("taskValue").value = "";
    taskList.push(task);
    localStorage.setItem('itemList', JSON.stringify(taskList));
    displayTask();
}
function removeTask()
{
    var rID = this.getAttribute("id");
    var taskList = createArray();
    taskList.splice(rID, 1);
    localStorage.setItem('itemList', JSON.stringify(taskList));
    displayTask();              
}
function displayTask()
{
    var taskList = createArray();
    var showTasks = "<ul>";
    for(var i=0; i < taskList.length; i++)
    {
        showTasks += "<li>"+taskList[i]+"<button class='rmvBtn' id='"+i+"'>&nbsp;&times;&nbsp;</button></li>";
    }
    showTasks += "</ul>";
    document.getElementById("content").innerHTML = showTasks;
    var btnArray = document.getElementsByClassName("rmvBtn");
    for(i =0; i < btnArray.length; i++)
    {
        btnArray[i].addEventListener('click', removeTask);
    }
}
document.getElementById("addBtn").addEventListener('click', addTask);
displayTask();