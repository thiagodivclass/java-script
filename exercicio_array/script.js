let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#valores')
let botaoAdd  = document.querySelector('input#add')
let botaoFinal = document.querySelector('input#fim')
let botaoReinic = document.querySelector('input#atualizar')
let resposta = document.querySelector('div#texto')

botaoAdd.addEventListener('click', adicionar)
botaoFinal.addEventListener('click', finalizar)

botaoReinic.addEventListener('click', atualizar)





let vetorLista = []

function isNum(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }
    else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){

    
    if(isNum(numero.value) && !inLista(numero.value, vetorLista)){
        vetorLista.push(Number(numero.value))
        let valorslct = document.createElement('option')
        valorslct.text=`Valor ${numero.value} adicionado`
        lista.appendChild(valorslct)
        resposta.innerHTML=''
    }
    
    else{
        alert('Erro: valor inválido ou já adicionado na lista.')
    }

        numero.value =''
        numero.focus()
}

function finalizar(){

    let total = vetorLista.length
    let maior = Number(vetorLista[0])
    let menor = Number(vetorLista[0])
    let soma = 0
    let media = 0

    if(vetorLista.length == 0){
        alert('Erro: adicione valor para finalizar!')
    }
    else{
        for (let pos in vetorLista){

            soma += vetorLista[pos]
            media = soma/total
            
            if(Number(vetorLista[pos]) > maior){
                maior = vetorLista[pos]
            }

            if (Number(vetorLista[pos]) < menor){
                menor = vetorLista[pos]
            }
            resposta.innerHTML=``
            resposta.innerHTML+=`<p>Ao todo, temos ${total} valores adicionados.</p>`
            resposta.innerHTML+=`<p>O maior valor adicionado é ${maior}. </p>`
            resposta.innerHTML+=`<p>O menor valor adicionado é ${menor}.</p>`
            resposta.innerHTML+=`<p>Somando todos os valore, temos: ${soma}.</p>`
            resposta.innerHTML+=`<p>A média dos valores adicionados é ${media}. </p>`
            numero.focus()

        }
    }
}

function atualizar(){
    document.location.reload()
}