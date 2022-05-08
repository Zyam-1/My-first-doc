$(function(){
    sendRequest();
    $("#div").on( "click", ".btn-danger", handledelete)
    $(".btn-size") .click(handleAdd)
    $("#div").on("click", ".btn-outline-success", function() {
      var btn = $(this);
    var parentDiv = btn.closest(".border-div");
    var id = parentDiv.attr("data-id");
      $.get("https://api-emp-by-zt.herokuapp.com/api/employees/" + id, function(response){
        
        $("#updated_id").val(response._id)
      $("#updated_name").val(response.Name)
        $("#updated_description").val(response.Description)
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
  var Name = $("#updated_name").val
  var Description = $("#updated_description").val
  console.log ( "Bruh")
  $.ajax ({
    url : "https://api-emp-by-zt.herokuapp.com/api/employees/" + id,
    data: { Name, Description },
    method: "PUT",
    
    success : function(response) {
      sendRequest();
      $("#exampleModal").modal(
        "hide")
    }

  })
}

function handleAdd() {
  var Name = $("#Name").val();
  var Description = $("#Description").val();
  
  $.ajax({
    url : "https://api-emp-by-zt.herokuapp.com/api/employees",
    method : "POST",
    data: {Name, Description},
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
      url: "https://api-emp-by-zt.herokuapp.com/api/employees/" + id,
      method: "DELETE",
      success: function() {
        sendRequest();
      },
    });
  }




function sendRequest() {
    $.ajax({
        url : "https://api-emp-by-zt.herokuapp.com/api/employees",
        method : "GET",
        success : function (response) {
            console.log(response);
            var divRec = $("#div")
            divRec.empty()
            for ( var i = 0; i < response.length ; i++)
            {
                var rec = response[i];
                
                divRec.append(
                    ` <div class = "border-div" data-id = "${rec._id}"> <button type="button" class="btn btn-danger btn-size" style = "float: right; margin-top:5px;">Remove Recipe</button> <button type="button" class =" btn btn-outline-success" style = "float: right; border-radius:5px; margin-top:5px;">Edit</button><h3>${rec.Name}</h3> <p> ${rec.Description} 
                    </p></div>`
                  );
            }

        }
    })

}

