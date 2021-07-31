$(document).ready(function () {
    $(window).resize(function () {
            cambio();
    });
    cambio();
    function cambio(){
        var ventana_ancho = $(window).width();
    
        
        if(ventana_ancho<=475){
            $("#noticias_mini").addClass("mt-5");
            $(".image-card").removeClass("col-2");
            $("aside .card-body").removeClass("col-10");
            $("aside .card-body .card-title").css("font-size","1.5rem")
        }
        else if(ventana_ancho<=975){
            $("#noticias_mini").addClass("mt-5");
            $(".image-card").addClass("col-2");
            $("aside .card-body").addClass("col-10");
            $("aside .card-body .card-title").css("font-size","2rem")
        }
        else{
            $("#noticias_mini").removeClass("mt-5");
            $(".image-card").removeClass("col-2");
            $("aside .card-body").removeClass("col-10");
            $("aside .card-body .card-title").css("font-size","1.5rem")
        }
    }
    
});
function mostrar1(){
    $("#MN_1").addClass("ocult");
    $("#New_1").addClass("New_active");
    $("#MN_2").removeClass("ocult");
    $("#New_2").removeClass("New_active");
    $("#MN_3").removeClass("ocult");
    $("#New_3").removeClass("New_active");
    $("#MN_4").removeClass("ocult");
    $("#New_4").removeClass("New_active");
}
function mostrar2(){
    $("#MN_1").removeClass("ocult");
    $("#New_1").removeClass("New_active");
    $("#MN_2").addClass("ocult");
    $("#New_2").addClass("New_active");
    $("#MN_3").removeClass("ocult");
    $("#New_3").removeClass("New_active");
    $("#MN_4").removeClass("ocult");
    $("#New_4").removeClass("New_active");
}
function mostrar3(){
    $("#MN_1").removeClass("ocult");
    $("#New_1").removeClass("New_active");
    $("#MN_2").removeClass("ocult");
    $("#New_2").removeClass("New_active");
    $("#MN_3").addClass("ocult");
    $("#New_3").addClass("New_active");
    $("#MN_4").removeClass("ocult");
    $("#New_4").removeClass("New_active");
}
function mostrar4(){
    $("#MN_1").removeClass("ocult");
    $("#New_1").removeClass("New_active");
    $("#MN_2").removeClass("ocult");
    $("#New_2").removeClass("New_active");
    $("#MN_3").removeClass("ocult");
    $("#New_3").removeClass("New_active");
    $("#MN_4").addClass("ocult");
    $("#New_4").addClass("New_active");
}

$('body').on("keydown", function(e) { 
    if (e.ctrlKey && e.which === 90) {
        document.getElementById("logo").click()
    }
});