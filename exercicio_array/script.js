let adiciona = document.querySelector('#add')
adiciona.addEventListener('click', incluir)
let num1 = document.querySelector('#numero')
let list = document.querySelector('#valores')
let resposta = document.querySelector('#texto')

let valores = []

function isNum(n){
    if (Number(n) >=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }
    else{
        return false
    }
}


function incluir(){
  if(isNum(num1.value) && !inList(num1.value, valores)){
       valores.push(Number(num1.value))
       let itens = document.createElement('option')
       itens.text = `Valor ${num1.value} adicionado.`
       list.appendChild(itens)
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
    if (valores.length == 0){
        alert('Adicione valores para finalizar!')
    }
    else {
        let total = valores.length
        let maior =valores[0]
        let menor =valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma+=valores[pos]
            media = soma/total
            if (valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos]< menor)
                menor = valores[pos]
        }
        resposta.innerHTML = '' 
        resposta.innerHTML +=`<p>Ao todo, temos ${total} números cadastrados.</p>`
        resposta.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
        resposta.innerHTML +=`<p>O menor valor informado foi ${menor}.</p>`
        resposta.innerHTML +=`<p>Somando todos os valores, temos ${soma}.</p>`
        resposta.innerHTML +=`<p>A média dos valores adicionados é ${media}.</p>`
       
    }
}
