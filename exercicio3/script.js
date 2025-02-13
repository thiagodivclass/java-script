
var valida = document.querySelector('#coferir')
var reset = document.querySelector('#clean')
reset.addEventListener('click', clean)

valida.addEventListener('click', spider)

function clean(){
    window.location.reload()
}

function spider(){

var agora = new Date()
var hoje = agora.getFullYear()
var dia = document.querySelector('#date')
var msg = document.querySelector('#texto')
var img = document.querySelector('#foto')


if (dia.value.length <= 1 || Number(dia.value) > hoje) {
    window.alert('Verifique os dados e tente novamente.')
}
else {
    
var sexo = document.getElementsByName('sex')//[0][1]
var gener =''
var idade = hoje - Number(dia.value)




if (sexo[0].checked){
    gener ='masculino'
    if (idade <=10){
        msg.innerHTML=`Detectamos um menino de ${idade} anos`
        img.src='imagens/criancamenino.png'
        }
        else if(idade <= 14){
            msg.innerHTML=`Detectamos um adolescente de ${idade} anos`
            img.src='imagens/adolescentemenino.png'
        }
        else if(idade < 18){
            msg.innerHTML=`Detectamos um jovem de ${idade} anos`
            img.src='imagens/jovemhomem.png'
        }
        else if(idade <=59){
            msg.innerHTML=`Detectamos um homem de ${idade} anos`
            img.src='imagens/homemadulto.png'
        }
        
       
        else{
            msg.innerHTML=`Detectamos um idoso de ${idade} anos`
            img.src='imagens/idoso.png'
        }
}





else if (sexo[1].checked) {
    gener = 'feminino'
    if(idade <=10){
        msg.innerHTML=`Detectamos uma menina de ${idade} anos`
         img.src='imagens/criancamenina.png.png'
        }
        else if(idade <= 14){
            msg.innerHTML=`Detectamos uma adolescente de ${idade} anos`
            img.src='imagens/adolescentemenina.png.png'
        }
        else if(idade < 18){
            msg.innerHTML=`Detectamos uma moça de ${idade} anos`
            img.src='imagens/jovemmulher.png'
        }
        else if(idade <=59){
            msg.innerHTML=`Detectamos uma mulher de ${idade} anos`
            img.src='imagens/mulheradulta.png'

        }
               
        else{
            msg.innerHTML=`Detectamos uma idosa de ${idade} anos`
            img.src='imagens/idosa.png'

        }
        

}

}
// msg.innerHTML=`Detectamos ${gener} de ${idade} anos`


}


