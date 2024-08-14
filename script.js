document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}




// document.getElementById("orange").onclick=function(){
//     document.body.style.backgroundColor=`orange`
// }
// document.getElementById("green").onclick=function(){
//     document.body.style.backgroundColor=`green`
// }
//SAME WORK D/B CLOSUR ......& MAIN TOPIC FOR JAVA SCRIPT.....
function clickHandler(color){
    return function(){
        document.body.style.backgroundColor=`${color}`
    }
}

document.getElementById("orange").onclick =clickHandler("orange ")
document.getElementById("green").onclick =clickHandler("green ")




