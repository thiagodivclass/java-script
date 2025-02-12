function carregar() {

    var messenger = window.document.querySelector('#msg')
    var picture = document.querySelector('#imagem')
    var moment = new Date()
    var hora = moment.getHours() 

    messenger.innerHTML=`Agora são ${hora} horas`

    if (hora >= 0 && hora < 12 ) {
        messenger.innerHTML=`Agora são ${hora} horas, bom dia!`
        document.body.style.background='gold'
        picture.src = 'imagens/manha.jpg'
    }

    else if (hora >= 12 && hora < 18) {
        messenger.innerHTML=`Agora são ${hora} horas, boa tarde!`
        document.body.style.background='greenyellow'
        picture.src = 'imagens/tarde.jpg'
    }

    else {
        messenger.innerHTML=`Agora são ${hora} horas, boa noite!`
        document.body.style.background='black'
        picture.src ='imagens/noite.jpg' 
    }

}