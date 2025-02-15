var campo = document.querySelector('#num')
var verific = document.querySelector('#confirma')
var clean = document.querySelector('#limp')
var mostrar = document.querySelector('#texto')

verific.addEventListener('click', clique)

function clique(){
    
    if (campo.value.length <= 0) {
        alert('Erro: Campo vazio, digite um número e confirme!')

    }
    else {
    var num = Number(campo.value)
    if (num < 0){
        mostrar.innerHTML='Impossível calcular menor que 0'
    }
    
        else{
           for(var a = num; a <= 10; a++)
            mostrar.innerHTML +=`${a}`

        }
       
    }










}