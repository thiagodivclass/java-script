// var vel = 52
// if (vel >= 50) {
//     console.log(`Você pasou a ${vel}km/h, ultrapassou o limite de velocidade!`)
// }


// else {
//     console.log(`Você passou a ${vel}km/h, muito bom, dirija sempre com segurança!`)
// }
 

var confere = window.document.querySelector('#valid')
confere.addEventListener('click', verific)
 
 


function verific(){

  
   var txt = window.document.querySelector('#pais').value
   var result = window.document.querySelector('#nacional')
   

    if (txt == 'Brasil') {
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




