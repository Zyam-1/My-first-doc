$(function(){
    $("#addBtn").click(handleAddTodo)
    $("#list").on("click", "li", removeBtn)

})

function handleAddTodo() {
    var inputValue = $("#input").val()
    if(!inputValue) {
        $("#input").addClass("Validation")
        return;

    }
    $("#input").removeClass("Validation")
    
    $("#list").append("<li>" + inputValue + "</li>")
    $("#input").val("");
   
    
}

function removeBtn() {
    $(this).fadeOut()
}