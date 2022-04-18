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
    var rmvBtnText = document.createTextNode("Remove")
    delbtn.appendChild(rmvBtnText)
    newli.appendChild(newtodo);  
    todoList.appendChild(newli);
    newli.appendChild(delbtn);
    delbtn.onclick = function(event) {
      var targeted = event.target
    var selected = targeted.parentNode;
    selected.parentNode.removeChild(selected);

    }
    
    


    

}

function handleRemove(event) {
    var targeted = event.target
    var selected = targeted.parentNode;
    selected.parentNode.removeChild(selected);
}

 