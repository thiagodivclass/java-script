// var vel = 52
// if (vel >= 50) {
//     console.log(`Você pasou a ${vel}km/h, ultrapassou o limite de velocidade!`)
// }


// else {
//     console.log(`Você passou a ${vel}km/h, muito bom, dirija sempre com segurança!`)
// }

//__________________________________________________________________________________________

 
// var wat = window.prompt('Olá, qual é o seu nome?')
// window.alert(`Olá, ${wat}, bem-vindo(a)!`)


var confere = window.document.querySelector('#valid')
confere.addEventListener('click', verific)
 
 


function verific(){

  
   var txt = window.document.querySelector('#pais').value
   var result = window.document.querySelector('#nacional')
   

    if (txt == 'Brasil' || txt == 'brasil') {
        result.innerHTML = `Seu país é ${txt}, você é brasileiro(a)!`
    }

    else {

         result.innerHTML = `Seu país é ${txt}, Você é estrangeiro(a)!`
       
        
    }

    
}
  
var limp = window.document.querySelector('#clean')
limp.addEventListener('click', reset)


function reset() {
    nacional.innerHTML = ''
}

var olho = window.document.querySelector('#eye')
olho.addEventListener('click', most)

function most(){
    if (image.style.display=='flex'){ 
        
        image.style.display ='none'
    }

    else {
        image.style.display='flex'
    }
}


// else if**

var atual = new Date()
var horario = atual.getHours() +':'+ atual.getMinutes() 
var now = window.document.querySelector('#moment')
var surge = window.document.querySelector('#hora')
now.addEventListener('click', play)

function play() {
    
        surge.innerHTML=`Agora são ${horario}`
   
   
}

var volte = window.document.querySelector('#restart')
volte.addEventListener('click', back)

function back() {
    window.location.reload()
}


//_______________________________________________


