//var arrow = document.getElementById("arrow");
//arrow.addEventListener("click", function(){})

var $arrow = $("#arrow a");

var $off = $("main").offset().top;
//dzieki above możemy sprawdzić jaką wartość ma off
$("#arrow").on("click", function(){
    $("body,html").animate({
        scrollTop: $("main").offset().top
        //metoda offset oblicz odleglosc do naszego
        //elementu od 0.0

    }, 1000)
})

