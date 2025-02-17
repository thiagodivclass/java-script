
let opções = document.querySelector('#services')
opções.addEventListener('click', services)
function services(){

    if(list.style.display=='block') {
        list.style.display='none'

        
    }
    
    else{
      
     list.style.display='block'    
        
    }




}






let way = document.querySelector('#botao')
let file = document.querySelector('#num')
let print = document.querySelector('#texto')
let clean = document.querySelector('#Limpar')
clean.addEventListener('click', limp)

way.addEventListener('click', clicar)

function clicar() {
    let numero = file

    if (numero.value.length <= 0) {
        alert('Erro: campo vazio!')
    }

    else {
        let result = print
        let input = Number(numero.value)
        let mult = 1
        if (input < 0) {
            alert('Erro: impossível calcular menor que 0.')
        }
        result.innerHTML = `Tabuada:`
        if (input >= 0) {
            for (let a = input; mult <= 10; a * mult) {
                print.innerHTML += `<br> ${a} x ${mult} = ${a * mult}`
                mult++
            }

        }
    }
}

function limp() {
    print.innerHTML = 'Tabuada:'
}
//----------------Contagem:-------------------------
let vew = document.querySelector('#texto2')
let cont = document.querySelector('#contar')
cont.addEventListener('click', contagem)
let clean2 = document.querySelector('#Limpeza')
clean2.addEventListener('click', limpar2)


function contagem() {
    let primeiro = document.querySelector('#campo1')
    let segundo = document.querySelector('#campo2')
    let terceiro = document.querySelector('#campo3')
    

    if (primeiro.value.length == 0 || segundo.value.length == 0 || terceiro.value.length == 0) {
        alert('Erro: Um ou mais campos da contagem vazios.')
    }
    else {
        let cp1 = Number(primeiro.value)
        let cp2 = Number(segundo.value)
        let cp3 = Number(terceiro.value)

        vew.innerHTML='Contagem: <br>'
        if (cp3 <= 0) {
            alert('Erro: Intervalo inválido, considerando intervalo 1.')
            cp3 = 1
            
        }
        
         
        
        if (cp1 < cp2) {
            for (let a = cp1; a <= cp2; a += cp3) {
                vew.innerHTML += `${a}, `

            }
        
        }

        if (cp1 > cp2) {
            for (let a = cp1; a >= cp2; a -= cp3) {
                vew.innerHTML += `${a}, `

           }

        }

        vew.innerHTML+=`\u{1F3C1}`

    }


}

function limpar2(){
    vew.innerHTML='Contagem:'
}

