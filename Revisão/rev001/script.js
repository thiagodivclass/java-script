let botao = { gerar: document.querySelector('#gerar'), contar: document.querySelector('#contar') }
let campo = { numero: document.querySelector('input#num1'), select: document.querySelector('select#list-tab'), contde: document.querySelector('input#campo1'), contate: document.querySelector('input#campo2'), contint: document.querySelector('input#campo3'), celular: document.querySelector('div#mobtab'), resultcont: document.querySelector('div#context') }

botao.gerar.addEventListener('click', tabuada)
botao.contar.addEventListener('click', contar)

function tabuada() {
    let num = campo.numero


    if (num.value.length == 0) {
        alert('Inira um número para gerar a tabuada!')
    }
    else {

        if (num.value < 0) {
            alert('Impossível calcular menor que 0!')
        }

        if (num.value >= 0) {
            let result = campo.select
            let b = 0
            campo.celular.innerHTML = ''
            campo.select.innerHTML = ''
            for (let a = num.value; b <= 10; a * b) {
                let fator = document.createElement('option')
                fator.text += `${a} x ${b} = ${a * b}`
                result.appendChild(fator)
                campo.celular.innerHTML += `${a} x ${b} = ${a * b}<br>`
                b++
            }
            campo.numero.value = ''
            campo.numero.focus()
        }
    }
}

function contar() {
    if (campo.contde.value.length == 0 || campo.contate.value.length == 0 || campo.contint.value.length == 0) {
        alert('Erro: um ou mais campos vazios!')
    }
    else {
        let de = Number(campo.contde.value)
        let até = Number(campo.contate.value)
        let interv = Number(campo.contint.value)
        campo.resultcont.innerHTML = ''
        if (interv < 1) {
            alert('Intervalo menor que 1, considerando intervalo 1.')
            interv = 1

        }

        if (de < até) {
            for (let a = de; a <= até; a += interv) {
                campo.resultcont.innerHTML += ` ${a},`
            }

            campo.resultcont.innerHTML += '\u{1F3C1}'

        }
        if (de > até) {
            for (let a = de; a >= até; a -= interv) {
                campo.resultcont.innerHTML += ` ${a},`
            }

            campo.resultcont.innerHTML += '\u{1F3C1}'


        }
        campo.contde.value = ''
        campo.contate.value = ''
        campo.contint.value = ''
        campo.contde.focus()

    }

}