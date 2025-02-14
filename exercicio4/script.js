//---Inputs ---------------------------------------------
var txt1 = document.querySelector('#inicio')
var txt2 = document.querySelector('#fim')
var txt3 = document.querySelector('#adic')
var txt4 = document.querySelector('#texto')

// Botões
var stick = document.querySelector('#start')
var clean = document.querySelector('#voltar')

// Funções:
stick.addEventListener('click', contar)
clean.addEventListener('click', limpar)
//---------------------------------------------
//Limpar----------------------
function limpar() {
    txt4.innerHTML=''
}
//------------------------------------

function contar() {
    var inicio = txt1
    var fim = txt2
    var passo = txt3
    var result = txt4

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro: Um ou mais campos vazios')
    }

    else {
        result.innerHTML = 'Contando:<br>'
        var prim = Number(inicio.value)
        var segund = Number(fim.value)
        var terceiro = Number(passo.value)

        if (terceiro <= 0) {
            alert('Passo 0 inválido, considerendo passo 1')
            terceiro = 1
        }
   

        if (prim < segund) {
            for (var a = prim; a <= segund; a += terceiro) {
                result.innerHTML += ` ${a}, `
            }

        }
        else {
            for (var a = prim; a >= segund; a -= terceiro) {
                result.innerHTML += ` ${a}, `
            }



        }

       result.innerHTML += `\u{1F3C6}`
    
    }   








}
