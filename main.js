$(document).ready(function(){
    $("#enviar_datos").click(function (e) { 
        e.preventDefault();
        let datos = [];
        datos.push($("#nombre").val());
        datos.push($("#apellido").val());
        datos.push($("#edad").val());
        $.ajax({
            type: "GET",
            url: "API.php",
            data: {datos},
            success: function(response){
                console.log(response);
            }
        })
        
    });
});