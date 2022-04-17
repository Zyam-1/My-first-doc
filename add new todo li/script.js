window.onload = function() {
  var btn = document.getElementById("addBtn");
  btn.onclick = handleAdd;
};



function handleAdd() {
    
    var InputTodo = document.getElementById("inputTodo").value;
    var todoList = document.getElementById("ulist");
    var newtodo = document.createTextNode(InputTodo);
    var newli = document.createElement("li");
    var delbtn = document.createElement("button")
    newli.appendChild(newtodo);  
    todoList.appendChild(newli);
    newli.appendChild(delbtn);


    

}

function handleRemove(event) {
    var targeted = event.target
    var selected = targeted.parentNode;
    selected.parentNode.removeChild(selected);
}

 