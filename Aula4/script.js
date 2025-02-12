

var fire = window.document.querySelector('#verificar')
fire.addEventListener('click', rango)
var prato = window.document.querySelector('#prato')
var limpar = window.document.querySelector('#lixo')
limpar.addEventListener('click', clean)
// var menu = Number(day)

 function rango() {
   
var day = document.querySelector('#dias').value
var card = window.document.querySelector('#cardap')


var menu = Number(day)



switch (menu) {

    case 0: card.innerHTML='Arroz, lasanha à bolonhesa e salada.' 
    prato.src='imagens/lasanha.png'
    break

    case 1: card.innerHTML= 'Virado à paulista.'
    prato.src='imagens/virado.png'
    break
    
    case 2: card.innerHTML= 'Churrasco, arroz, feijão e farofa.'
    prato.src='imagens/churras.png'
    break

    case 3: card.innerHTML= 'Feijoada, bisteca, couve e farofa.'
    prato.src='imagens/feijoada.png'
    break

    case 4: card.innerHTML= 'Macarrão à bolonhesa, queijo ralado e frango assado.'
    prato.src='imagens/macarrao.png'
    break

    case 5: card.innerHTML= 'Strogonoff de carne, arroz e batata palha.'
    prato.src='imagens/strog.png'
    break

    case 6: card.innerHTML= 'Feijoada, bisteca, couve e couve.'
    prato.src='imagens/feijoada.png'
    break
    default: 
    alert('Selecione um dia e tente novamente.')
    
}

 }

 function clean(){
    window.location.reload()
 }