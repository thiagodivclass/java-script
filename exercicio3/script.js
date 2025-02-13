var valida = document.querySelector('#coferir')

valida.addEventListener('click', spider)

function spider(){

var agora = new Date()
var hoje = agora.getFullYear()
var dia = document.querySelector('#date')
var image = document.querySelector('#foto')
var msg = document.querySelector('#texto')
var sexo = document.getElementsByName('sex')//[0][1]
var gener =''
var idade = hoje - Number(dia.value)

if (sexo[0].checked){
    gener ='Masculino'
}
else {
    gener = 'Feminino'
}

msg.innerHTML=`Detectamos ${gener} de ${idade} anos`


}