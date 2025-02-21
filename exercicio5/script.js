let campo = { número: document.querySelector('input#num'), lista: document.querySelector('select#tabuada'), celular: document.querySelector('div#texto') }
let botao = { gerar: document.querySelector('input#confirma'), limpar: document.querySelector('input#limp') }

botao.gerar.addEventListener('click', gerar)
botao.limpar.addEventListener('click', limpar)

function gerar() {
     
    if (campo.número.value.length == 0) {
        alert('Campo vazio, adicione um número!')
    }

   
    else {

        if (campo.número.value >= 0) {
            let a = 1
            let b = Number(campo.número.value)
            campo.celular.innerHTML=''
            campo.lista.innerHTML=''
            
            while (a <= 30) {
                let lista = document.createElement('option')
                lista.text += `${b} x ${a} = ${b * a}`
                campo.lista.appendChild(lista)
                campo.celular.innerHTML += `${b} x ${a} = ${b * a} <br>`
                a++

            }
            
           
            

        }
        else {
            alert('Impossível calcular menor que 0.')
        }


    }
}
function limpar(){
    campo.celular.innerHTML=''
    campo.lista.innerHTML=''
}