// function doFirst(){
//     // 跟 HTML 產生關連，再建事件聆聽功能
//     document.getElementById('theForm').onsubmit = addTask    
// }

tasks = []

function addTask(){
    // e.preventDefault()
    
    let task = document.getElementById('task')

    tasks.push(task.value)
    task.value = ''

    feedbacktask();
}
// window.addEventListener('load',doFirst)

function deleteTask(element){
    console.log(element.id);
    tasks.splice(element.id,1);
    alert(`Are you sure you want to delete this task?`);
    element.remove();
    feedbacktask();
}

function feedbacktask(){
    let feedback = ``
    feedback += `You have ${tasks.length} task(s) in To-Do List.`
    feedback += `<ol>`
    tasks.forEach(function(value,index){
        feedback += '<li id=' + index + ' onclick="deleteTask(this)" > ' + value + `</li>`
      });
    feedback += `</ol>`
    
    document.getElementById('feedback').innerHTML = feedback 
}