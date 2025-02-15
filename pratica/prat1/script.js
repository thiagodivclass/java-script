let go = document.querySelector('#start')
let clean = document.querySelector('#reset')
clean.addEventListener('click', restart)
go.addEventListener('click', gerar)




function gerar() {

    let campo = document.querySelector('#num')
    let res1 = document.querySelector('#selec-list')
    let res2 = document.querySelector('#list')

    if (campo.value.length == 0) {
        alert('Erro: Campo vazio, insira um número e gere a tabuada.')
    }

    else {
        let a1 = Number(campo.value)
        let a2 = 1
        if (a1 < 0) {
            alert('Impossível calcular menor que 0!')
           
        }
        else {
            res1.innerHTML=''
            res2.innerHTML=''
            while (a2 <= 10) {
                let dalist = document.createElement('Option')
                dalist.text = `${a1} x ${a2} = ${a1*a2}`
                dalist.value=`Item${a2}`
                res1.appendChild(dalist)
                res2.innerHTML += `${a1} x ${a2} = ${a1*a2} <br>`
                a2++
                
                
            }
        }

    }


}

function restart(){
    let res1 = document.querySelector('#selec-list')
    let res2 = document.querySelector('#list')
    res1.innerHTML=''
    res2.innerHTML=''
}