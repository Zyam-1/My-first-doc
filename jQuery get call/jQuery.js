$(function(){
    sendRequest();
    $("#div").on( "click", ".btn-danger", handledelete)
    $(".btn-size") .click(handleAdd)
    $("#div").on("click", ".btn-outline-success", function() {
      var btn = $(this);
    var parentDiv = btn.closest(".border-div");
    var id = parentDiv.attr("data-id");
    console.log(id)
      $.get("https://usman-recipes.herokuapp.com/api/recipes/" + id, function(response){
        
        
        $("#updated_id").val(response._id)
      $("#updated_name").val(response.title)
        $("#updated_description").val(response.body)
        $("#exampleModal").modal(
          "show")
      });

    }
    
  
    )
  
   


})

function handleUpdateBtn () {
  var btn = $(this);
    var parentDiv = btn.closest(".border-div");
    var id = parentDiv.attr("data-id");
  var title = $("#updated_name").val()
  var body = $("#updated_description").val()
  console.log ( "Bruh")
  $.ajax ({
    url : "https://usman-recipes.herokuapp.com/api/recipes/" + id,
    data: { title, body },
    method: "PUT",
    
    success : function() {
      sendRequest();
      $("#exampleModal").modal(
        "hide")
    }

  })
}

function handleAdd() {
  var title = $("#Name").val();
  var body = $("#Description").val();
  
  $.ajax({
    url : "https://usman-recipes.herokuapp.com/api/recipes",
    method : "POST",
    data: {title, body},
    success : function(response) {
      sendRequest();
    }
})
}





function handledelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".border-div");
    var id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
      url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
      method: "DELETE",
      success: function() {
        sendRequest();
      },
    });
  }




function sendRequest() {
    $.ajax({
        url : "https://usman-recipes.herokuapp.com/api/recipes",
        method : "GET",
        success : function (response) {
            console.log(response);
            var divRec = $("#div")
            divRec.empty()
            for ( var i = 0; i < response.length ; i++)
            {
                var rec = response[i];
                
                divRec.append(
                    ` <div class = "border-div" data-id = "${rec._id}"> <button type="button" class="btn btn-danger btn-size" style = "float: right; margin-top:5px;">Remove Recipe</button> <button type="button" class =" btn btn-outline-success" style = "float: right; border-radius:5px; margin-top:5px;">Edit</button><h3>${rec.title}</h3> <p> ${rec.body} 
                    </p></div>`
                  );
            }

        }
    })

}

