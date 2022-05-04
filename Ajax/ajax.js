$(function(){
    $("#loadBtn").click(sendAjaxReq);
});

function sendAjaxReq(){
    console.log("bruh")
    $.get("Family MembersList.txt", responseRecevied);
    
}

function responseRecevied(response) {
    $("#div").empty();
    $("#div").append(response);
}

