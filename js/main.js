$(document).ready(function (){
    $("#scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#main-cabecera-form").offset().top
        }, 500);
    });
});