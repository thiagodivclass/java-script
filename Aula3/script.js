// var vel = 52
// if (vel >= 50) {
//     console.log(`Você pasou a ${vel}km/h, ultrapassou o limite de velocidade!`)
// }


// else {
//     console.log(`Você passou a ${vel}km/h, muito bom, dirija sempre com segurança!`)
// }
 


function verific() {
    var txt1 = window.document.getElementById('pais').value
    var state = window.document.getElementById('nacional')

    if (txt1 == 'Brasil') {
        state.innerText = `Você é brasileiro!`
    } 
    else {  state.innerText = `Você é estrangeiro!`}

  




}