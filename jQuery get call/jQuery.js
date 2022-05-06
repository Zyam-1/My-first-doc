$(function(){
    sendRequest();
    $(".div").on( "click", ".btn-danger", handledelete())

})

function handledelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".border-div");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
      url: "https://api-emp-by-zt.herokuapp.com/api/employees?fbclid=IwAR0X7q7481JAwoAETGPino5IMwYjEZbKNCTH8ZUXoQtW1XbVppLKoDXitGU/" + id,
      method: "DELETE",
      success: function() {
        sendRequest();
      },
    });
  }




function sendRequest() {
    $.ajax({
        url : "https://api-emp-by-zt.herokuapp.com/api/employees?fbclid=IwAR0X7q7481JAwoAETGPino5IMwYjEZbKNCTH8ZUXoQtW1XbVppLKoDXitGU",
        method : "GET",
        success : function (response) {
            console.log(response);
            var divRec = $("#div")
            divRec.empty()
            for ( var i = 0; i < response.length ; i++)
            {
                var rec = response[i];
                
                divRec.append(
                    ` <div class = "border-div" data-id = "${rec._id}"><h3>${rec.Name}</h3><p> ${rec.Description} <button type="button" class="btn btn-danger btn-size" style = "float: right">Remove Recipe</button> <button type="button" btn btn-outline-success style = "float: right; border-radius:5px;">Edit</button
                    </p></div>`
                  );
            }

        }
    })

}


