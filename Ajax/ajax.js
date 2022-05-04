$(function(){
    $("#loadBtn").click(sendAjaxReq);
});

function sendAjaxReq(){
    
    $.get("Family MembersList.txt", responseRecevied);
    
}

function responseRecevied(response) {
    $("#div").empty();
    $("#div").append(response);
}

