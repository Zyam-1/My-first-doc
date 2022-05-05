$(function(){
    sendRequest()

})

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
                    `<div ><h3>${rec.title}</h3><p> ${rec.body}</p></div>`
                  );
            }

        }
    })

}


