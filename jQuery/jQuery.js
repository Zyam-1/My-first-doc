$(function(){
    $("#addBtn").click(handleAddTodo)
    $("#list").on("click", "li", removeBtn)

})

function handleAddTodo() {
    var inputValue = $("#input").val()
    $("#list").append("<li>" + inputValue + "</li>")
    if(!inputValue) {
        $("#input").addClass("Validation")
        return;

    }
    $("#input").val("")
}

function removeBtn() {
    $(this).remove() 
}