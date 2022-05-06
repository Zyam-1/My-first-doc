$(function(){
    sendRequest();
    $(".border-div").on( "click", ".btn-danger", handledelete())

})

function handledelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".border-div");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
      url: "https://fakestoreapi.com/products/" + id,
      method: "DELETE",
      success: function() {
        sendRequest();
      }
    });
  }




function sendRequest() {
    $.ajax({
        url : "https://fakestoreapi.com/products",
        method : "GET",
        success : function (response) {
            console.log(response);
            var divRec = $("#div")
            divRec.empty()
            for ( var i = 0; i < response.length ; i++)
            {
                var rec = response[i];
                
                divRec.append(
                    ` <div class = "border-div" data-id = "${rec.id}"><h3>${rec.title}</h3><p> ${rec.description} <button type="button" class="btn btn-danger btn-size" style = "float: right">Remove Recipe</button> <button type="button" btn btn-outline-success style = "float: right; border-radius:5px;">Edit</button
                    </p></div>`
                  );
            }

        }
    })

}


