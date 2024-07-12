// --------------------------
// -------TODO APP-----------
// --------------------------


let tasks = [];
function todo_list(){
    let input = document.getElementById("list").value;
    tasks.push(input);

    // document.getElementById("tasks").innerHTML=tasks;
        console.log(tasks);
    console.log(tasks.length);

    let print = document.createElement("h4");
    print.id="print";
    print.textContent=tasks.length + ". "+ tasks[tasks.length-1];
    document.body.appendChild(print);
    
    // for(let i=0;i<tasks.length;i++){
//     console.log(tasks[i]);
// }
}
function cleartask(){
    tasks.pop();
    console.log(tasks);
let output = document.getElementById("print");
output.remove()
}