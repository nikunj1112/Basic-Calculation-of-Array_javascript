
const form = document.getElementById("form")
const todoArray = [];

form.addEventListener("submit" , (e) =>{
e.preventDefault();

const taskvalue = document.getElementById("task").value
const priorityvalue = document.getElementById("priority").value

const todoObj = {task: taskvalue , priority: priorityvalue}

todoArray.push(todoObj)
console.log(todoArray);


});







