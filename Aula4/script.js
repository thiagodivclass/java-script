
var day = document.querySelector('#opcoes')
var card = window.document.querySelector('#cardap')
// var fire = window.document.querySelector('#verificar')
// fire.addEventListener('click', rango)
// var menu = Number(day)

// function rango() {
   
// }






switch (3) {

    case 0: card.innerHTML='Arroz, lasanha à bolonhesa e salada.'
    break

    case 1: card.innerHTML= 'Virado à paulista.'
    break
    
    case 2: card.innerHTML= 'Churrasco, arroz, feijão e farofa.'
    break

    case 3: card.innerHTML= 'Feijoada, bisteca, couve e farofa.'
    break

    case 4: card.innerHTML= 'Macarrão à bolonhesa, queijo ralado e frango assado.'
    break

    case 5: card.innerHTML= 'Strogonoff de carne, arroz e batata palha.'
    break

    case 6: card.innerHTML= 'Feijoada, bisteca, arroz e couve.'
    break

    default: card.innerHTML= 'Não servimos no dia selecionado.'
}