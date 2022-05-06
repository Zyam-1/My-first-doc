$(function() {
    loadRecipies();
    $("#recipes").on("click", ".btn-danger", handleDelete);
  });
  function handleDelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".recipe");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
      url: "https://api-emp-by-zt.herokuapp.com/api/employees/" + id,
      method: "DELETE",
      success: function() {
        loadRecipies();
      }
    });
  }
  function loadRecipies() {
    $.ajax({
      url: "https://api-emp-by-zt.herokuapp.com/api/employees",
      method: "GET",
      error: function(response) {
        var recipes = $("#recipes");
        recipes.html("An Error has occured");
      },
      success: function(response) {
        console.log(response);
        var recipes = $("#recipes");
        recipes.empty();
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
          recipes.append(
            `<div class="recipe" data-id="${rec._id}"><h3>${rec.Name}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button><button class="btn btn-warning btn-sm float-right">Edit</button> ${rec.Description}</p></div>`
          );
          // recipes.append("<div><h3>" + rec.title + "</h3></div>");
        }
      }
    });
  }