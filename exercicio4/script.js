var play = document.querySelector('#start')
play.addEventListener('click', contagem)

var clean = document.querySelector('#voltar')
clean.addEventListener('click', limp)

function limp(){
    document.location.reload()
}

function contagem(){
    var camp1 = document.querySelector('#inicio')
    var camp2 = document.querySelector('#fim')
    var camp3 = document.querySelector('#adic')
    var result = document.querySelector('#texto')

    

    if (camp1.value.length == 0 || camp2.value.length ==0 || camp3.value.length ==0){
        alert('Erro: Um ou mais campos vazios!')
    }

    else {
       result.innerHTML='Contando: <br> '
       var ini = Number(camp1.value)
       var fim = Number(camp2.value)
       var pass = Number(camp3.value)
       if(pass <=0){
        alert('Passo 0 inválido, considerando passo 1')
        pass = 1
    }

       if (ini < fim){
            for(var a = ini; a <= fim; a+= pass){
            result.innerHTML += `${a}, `
            
            }
       }
        else {
            //Contagem regressiva
            for(var a = ini; a >= fim; a-= pass){
                result.innerHTML += `${a}, `
                
                }
        }
        result.innerHTML += `\u{1F3C6}`
    }


    
 
}