
let taskIteams=[];
function addToDo(event)
{   event.preventDefault();
     document.getElementById("res").innerHTML = "";
    const task = document.getElementById("taskInput").value;
    taskIteams.push(task);
    console.log( taskIteams);
    taskIteams.map((val,index)=>{
        document.getElementById("res").innerHTML +="<li>"+ val +"</li>";
    })
}
document.getElementById("taskInput").value = "";
 document.getElementById("res").addEventListener('click',(e)=>{
    e.target.classList.add("strike")
    console.log(e.target)
 })