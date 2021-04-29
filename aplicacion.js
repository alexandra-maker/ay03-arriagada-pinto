$(document).ready(function(){
    var fotos = $(".imagen");

    fotos.mouseenter(function(){
        var idimagen = $(this).attr("id");
        $(".imagen").text("idimagen");
    })
    fotos.mouseleave(function(){
        $("#imagen").text("fotooo");
        $(this).fadeTo("fast",1);
    })
    
    var boton = $("#click");

    boton.click(function(){
        $(".texto").hide();
    })

    var boton2 = $("#boton2");
    
    boton2.click(function(){
        $(".destacado").append("CAMBIADOOO!");
    })

})

