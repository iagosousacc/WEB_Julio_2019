$(document).ready(function(){
    $('.telefone').mask('(00) 0 0000-0000');
    $('#datepicker').datepicker();
});
    
    
var slide = 1
slider()


function slider() {

    for (var i = 1; i <= 3; i ++){
        $(".card:nth-child(" + i + ")").hide()
    }

    $(".card:nth-child("+ slide + ")").show()
    slide = (slide+1 > 3) ? 1 : slide+1
    setTimeout(slider, 3000)
}
