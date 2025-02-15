var campo = document.querySelector('#num')
var verific = document.querySelector('#confirma')
var clean = document.querySelector('#limp')
var mostrar = document.querySelector('#tabuada')
var telamob = document.querySelector('#texto')

clean.addEventListener('click', apaga)
verific.addEventListener('click', clique)





function clique() {



    if (campo.value.length <= 0) {
        alert('Erro: Campo vazio, digite um número e gere a tabuada!')

    }
    
    else {
        var num = Number(campo.value)
        if (num < 0) {

            alert('Impossível calcular menor que 0')
        }

        else {
            let a = num
            let b = 1
            telamob.innerHTML = ''
            mostrar.innerHTML = ''
            
            while (b <= 10) {

                let item = document.createElement('option')
                item.text = `${a} x ${b} = ${a * b}`
                mostrar.appendChild(item)
                telamob.innerHTML += `${a} x ${b} = ${a * b} <br>`
                b++
                
                
            }

           




        }





       
    }





}



function apaga() {
    mostrar.innerHTML = ''
    telamob.innerHTML = ''
}