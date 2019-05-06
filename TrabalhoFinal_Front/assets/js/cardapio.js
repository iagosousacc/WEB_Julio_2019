abrirCardapio()

function abrirCardapio(){
    for(var i = 1; i <= 10; i++){
        $(".prato:nth-child(" + i + ")").hide();
    }
}

function cardapio(){
    for(var i = 1; i <= 10; i++){
        $(".prato:nth-child(" + i + ")").show();
    }
}