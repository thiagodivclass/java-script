let campo = { número: document.querySelector('input#numero'), lista: document.querySelector('select#valores'), resposta: document.querySelector('div#texto') }
let botão = { adicionar: document.querySelector('input#adicionar'), finalizar: document.querySelector('input#fim') }
let vetorLista = []

botão.adicionar.addEventListener('click', adicione)
botão.finalizar.addEventListener('click', final)


function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicione() {
    if (isNum(campo.número.value) && !inList(campo.número.value, vetorLista)) {
        vetorLista.push(Number(campo.número.value))
        let itens = document.createElement('option')
        itens.text = `Valor ${campo.número.value} adicionado.`
        campo.lista.appendChild(itens)
        campo.número.value = ''
        campo.resposta.innerHTML = ''
        campo.número.focus()
    }

    else {
        alert('Valor inválido ou já adicionado!')
    }

}

function final() {
    if (vetorLista.length == 0) {
        alert('Adicione valores para finalizar!')
    }
    else {
        let total = campo.lista.length
        let maior = vetorLista[0]
        let menor = vetorLista[0]
        let mult = vetorLista[0]
        let soma = 0
        let media = 0
        
        for (let pos in vetorLista) {

            if (vetorLista[pos] > maior) {
                maior = vetorLista[pos]
            }

            if (vetorLista[pos] < menor) {
                menor = vetorLista[pos]
            }

       
            soma = soma + vetorLista[pos]
            mult = mult * vetorLista[pos]
            media = soma / total

            campo.resposta.innerHTML =''
            campo.resposta.innerHTML += `<p>No total, temos ${total} valores adicionados.</p>`
            campo.resposta.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
            campo.resposta.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
            campo.resposta.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
            campo.resposta.innerHTML += `<p>Multiplicando todos os valores, temos ${mult}.</p>`
            campo.resposta.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`

        }
        
    }

}
