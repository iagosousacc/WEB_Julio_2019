document.querySelector("#botaoAdicao").addEventListener('click', function(){
    var numero1 = document.querySelector("#numero1").value,
        numero2 = document.querySelector("#numero2").value,
        resultado = parseInt(numero1) + parseInt(numero2);
    document.querySelector("#resultado").value = resultado;
})

document.querySelector("#botaoSubtracao").addEventListener('click', function(){
    var numero1 = document.querySelector("#numero1").value,
        numero2 = document.querySelector("#numero2").value,
        resultado = parseInt(numero1) - parseInt(numero2);
    document.querySelector("#resultado").value = resultado;
})

document.querySelector("#botaoMultiplicacao").addEventListener('click', function(){
    var numero1 = document.querySelector("#numero1").value,
        numero2 = document.querySelector("#numero2").value,
        resultado = parseInt(numero1) * parseInt(numero2);
    document.querySelector("#resultado").value = resultado;
})

document.querySelector("#botaoDivisao").addEventListener('click', function(){
    var numero1 = document.querySelector("#numero1").value,
        numero2 = document.querySelector("#numero2").value,
        resultado = (numero2 == 0) ? "erro" : parseInt(numero1) / parseInt(numero2);
    document.querySelector("#resultado").value = resultado;
})