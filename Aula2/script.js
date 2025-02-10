function somar() {
    var op1 = window.document.getElementById('num')
    var op2 = window.document.querySelector('#num2')
    var res = window.document.getElementById('res')
    var dig1 = Number(op1.value)
    var dig2 = Number(op2.value)
    var s = dig1 + dig2

    res.innerHTML= `A soma entre ${dig1} e ${dig2} é igual a ${s}`


}