let objt = {numero:document.querySelector('input#numero'), lista: document.querySelector('select#valores'), texto:document.querySelector('div#texto')}
let botao = {adic:document.querySelector('input#add'), final:document.querySelector('input#fim'), reload:document.querySelector('input#atualizar')}

botao.adic.addEventListener('click', adicionar)
botao.final.addEventListener('click', finalizar)
botao.reload.addEventListener('click', reiniciar)

let vetorLista = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
    else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if (isNum(objt.numero.value) && !inList(objt.numero.value, vetorLista)){
        vetorLista.push(Number(objt.numero.value))
        let valores = document.createElement('option')
        valores.value=`${Number(objt.numero.value)}`
        valores.text=`Valor ${objt.numero.value} adicionado.`
        objt.lista.appendChild(valores)
        objt.numero.value=''
        objt.numero.focus()
        objt.texto.innerHTML=''

    }

       
    else{
        alert('Erro: valor inválido ou já adicionado.')
    }
}

function finalizar(){
    if(vetorLista.length == 0){
        alert('Ops! Aicione um valor para finalizar.')
    }
    else{
        let total = vetorLista.length
        let maior = vetorLista[0]
        let menor = vetorLista[0]
        let mult = vetorLista[0]
        let soma = 0
        let media = 0

        for ( let pos in vetorLista){

            
        if(vetorLista[pos] < menor){
            menor = vetorLista[pos]
        }
        if (vetorLista[pos] > maior){
            maior = vetorLista[pos]
        }

        soma = soma + vetorLista[pos]
        mult = mult * vetorLista[pos]
        media = soma/total

        objt.texto.innerHTML=''
        objt.texto.innerHTML+=`<p>No total, temos ${total} valores adicionados.</p>`
        objt.texto.innerHTML+=`<p>O maior valor adicionado é ${maior}.</p>`
        objt.texto.innerHTML+=`<p>O menor valor adicionado é ${menor}.</p>`
        objt.texto.innerHTML+=`<p>Somando todos os valores, temos ${soma}.</p>`
        objt.texto.innerHTML+=`<p>Multiplicando todos os valores, temos ${mult}.</p>`
        objt.texto.innerHTML+=`<p>A média dos valores adicionado é ${media}.</p>`
        }

    }

}

function reiniciar(){
    document.location.reload()
}