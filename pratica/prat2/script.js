let result = document.querySelector('#texto')
let gonow = document.querySelector('#Contar')
let bye = document.querySelector('#reset')
bye.addEventListener('click', exit)
gonow.addEventListener('click', play)

function exit(){
    result.innerHTML=''
}

function play(){
    let a = document.querySelector('#camp1')
    let b = document.querySelector('#camp2')
    let c = document.querySelector('#camp3')

    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0){
        alert('Erro: um ou mais campos vazios.')
    }
    else{
        let de = Number(a.value)
        let ate = Number(b.value)
        let int = Number(c.value)

        result.innerHTML=''
        if (int <= 0){
            alert('Intervalo inválido, considerando 1')
            int=1
        }

        for(let i = de; i <= ate; i += int){
            result.innerHTML+=` ${i}, `
        }
        
        if (de > ate){

            for(let i = de; i > ate; i -= int){
                result.innerHTML+=` ${i}, `
            }

        }
        result.innerHTML+= '\u{1F3C1}'


    }
}