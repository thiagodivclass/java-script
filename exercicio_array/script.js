let numeral = document.querySelector('input#numero')
let listaNum = document.querySelector('select#valores')
let info = document.querySelector('div#texto')
let botaoAdic = document.querySelector('input#add')
let botaoFinish = document.querySelector('input#fim')
let botaoReload = document.querySelector('input#atualizar') 

botaoAdic.addEventListener('click', adicionar)
botaoFinish.addEventListener('click', finalizar)
botaoReload.addEventListener('click', atualizar)

let vetorValores=[]

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
}

function adicionar(){
    if(isNum(numeral.value) && !inList(numeral.value, vetorValores)){
        vetorValores.push(Number(numeral.value))
        let optitens = document.createElement('option')
        optitens.text=`Valor ${numeral.value} adicionado.`
        listaNum.appendChild(optitens)
        info.innerHTML=''
        numeral.value=''
        numeral.focus()
    }
    else{
        alert('Erro: valor inválido ou já adicionado.')
    }
}   

function finalizar(){
    if(vetorValores.length ==0){
        alert('Erro: adicione valores para finalizar!')
    }
    else{
        let total = vetorValores.length
        let maior = vetorValores[0]
        let menor = vetorValores[0]
        let soma = 0
        let mult = vetorValores[0]
        let media = 0
        

        for(let pos in vetorValores){

            if(vetorValores[pos] > maior){
            maior = vetorValores[pos]
        }
        if (vetorValores[pos] < menor){
            menor = vetorValores[pos]
        }

            soma = soma + vetorValores[pos]
            mult = mult * vetorValores[pos]
            media = soma/total
            info.innerHTML=''
            info.innerHTML+=`<p>No total, temos ${total} valores adicionados.</P>`
            info.innerHTML+=`<p>O maior valor adicionado é ${maior}.</P>`
            info.innerHTML+=`<p>O menor valor adicionado é ${menor}.</P>`
            info.innerHTML+=`<p>Somando todos os valores, temos ${soma}.</P>`
            info.innerHTML+=`<p>Multiplicando todos os valores temos ${mult}.</P>`
            info.innerHTML+=`<p>A média dos valores adicionados é ${media}</P>`
        }

    }

}

function atualizar(){
    document.location.reload()
}
