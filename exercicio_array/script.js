let adiciona = document.querySelector('input#add')
adiciona.addEventListener('click', incluir)
let num1 = document.querySelector('#numero')
let list = document.querySelector('#valores')
let resposta = document.querySelector('#texto')
let reload = document.querySelector('#atualizar')
reload.addEventListener('click', atualize)

let valores = [] //Vetor

function isNum(n){ // Verificar se é um número
    if (Number(n) >=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}

function inList(n, l){ // Recebe o número e uma lista
    if(l.indexOf(Number(n)) !=-1){ // Se o número for diferente de -1
        return true
    }
    else{
        return false
    }
}


function incluir(){
  if(isNum(num1.value) && !inList(num1.value, valores)){ // Incluir se for número e não estiver na lista
       valores.push(Number(num1.value)) // Adiciona valores no vetor
       let itens = document.createElement('option') // Cria as optinons
       itens.text = `Valor ${num1.value} adicionado.` // Adiciona os valores nas options
       list.appendChild(itens) // Adiciona as options no select 
       resposta.innerHTML=''

  }
  else{
    alert('Valor inválido ou já adicionando na lista.')
  }

  num1.value=''
  num1.focus()
}

let finish = document.querySelector('#fim')
finish.addEventListener('click', finalizar)

function finalizar(){
    if (valores.length == 0){ // Impede valores vazios 
        alert('Adicione valores para finalizar!')
    }
    else {
        let total = valores.length // Quantidade de dados no vetor 
        let maior =valores[0] // Maior número baseado no ínicio do cálculo dentro do vetor
        let menor =valores[0] // Menor número baseado no ínicio do cálculo dentro do vetor
        let soma = 0 // Valor inicial da soma
        let media = 0 // Valor inicial da média

        for(let pos in valores){ // Para cada posição no vetor (Valores)
            soma+=valores[pos] 
            media = soma/total
            if (valores[pos] > maior) // Se a posição do valor no vetor for maior que a var "maior"
                maior = valores[pos] // Var maior recebe o valor da posição no vetor
            
            if(valores[pos]< menor) // Se a posição do valor no vetor for menor que a var "menor"
                menor = valores[pos] // Var menor recebe o valor da posição no vetor
        }
        resposta.innerHTML = '' 
        resposta.innerHTML +=`<p>Ao todo, temos ${total} números cadastrados.</p>`
        resposta.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
        resposta.innerHTML +=`<p>O menor valor informado foi ${menor}.</p>`
        resposta.innerHTML +=`<p>Somando todos os valores, temos ${soma}.</p>`
        resposta.innerHTML +=`<p>A média dos valores adicionados é ${media}.</p>`
       
    }
}

function atualize(){
    document.location.reload()
}