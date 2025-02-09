// window.alert('Olá, mundo!.. Hello word!')

// window.confirm('Está indo na força do ódio?')

// var disse = window.prompt('Diga aí') 
// window.alert('Boa, então é isso!, ' + disse + '!')
// window.alert(`É isso aí, ${disse}!`)

//---------------------------------------------------------
// ---- Soma e conversão de string em número ---------------
// var n1 = window.prompt('Digite um número')
// var n2  = Number(window.prompt('Digite outro número')) // Uma forma
// var s = Number(n1) + n2 // Outra forma
// window.alert ('A soma dos números digitados é: ' + s)
// window.alert (`A soma entre ${n1} e ${n2} é igual a ${s}`) //Entre crases
// O prompt retorna uma string ***
//-------------------------------------------------------------
// ---------------------Contagem de Caracteres----------------
// var nome = window.prompt('Digite um texto')

// document.write(`O texto " ${nome} " tem, contando com números, pontos e espaços, ${nome.length} caracteres.` )

//--------------------------------------------------------------
//---------Letra em caixa alta--------------------
//  var nome = window.prompt('Digite aqui')
//  document.write(`Seu nome é ${nome.toUpperCase()} `)
//-------------------------------------------------------------


//--------Trabalhando soma e conversão de moeda -----------------

// var n1 = Number(window.prompt('Qual é o seu salário?'))
 
// document.write(`O seu salário em real é ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)


// var num1 = Number(window.prompt('Digite um número'))
// var num2 = Number(window.prompt('Digite outro número'))
// var soma = num1 + num2
// window.alert(`O valor total de ${num1} mais ${num2} é de ${soma}`)
// document.write(`A soma de ${num1} e ${num2} é ${soma}`)
// document.write(`A soma dos valores em real é ${soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`) 


//---------------------Operadores Lógicos-------------------------
 
// ! Negação
// && E 
// || Ou
//-----------------------------------------------------------------

// ---- Variáveis relacionais -------------------------

// var media =Number(window.prompt('Digite a sua nota.'))
// document.write(`${media}`>= 6?'Aprovado, parabéns!':'Volte a estudar e tente de novo na próxima!')
//--------------------------------------------------------------
//---------------DOM---------------------------------------------

// var nom1 = window.document.getElementsByTagName('p')[0]
//window.document.write('Está escrito: ' + nom1.innerText)
// nom1.style.color = '#fff'

// var one = window.document.getElementById('mao')
// window.document.write('Está escrito: ' + one.innerText)
// + doc.innerHTML pega a formatação

// var doc = window.document.getElementsByTagName('h2')[0]
// window.document.write(doc.innerText = 'Yaeee')
// doc.style.background = 'red'
// window.document.write('Boooraaa!! ' + doc.innerHTML)
window.prompt('Já viu a teoria?')
var doc1 = window.document.querySelector('p#mao')
// window.document.write(doc1.innerText = 'Oi')
// window.document.write('Vamos por a ' + doc1.innerText)
window.alert('Agora é hora de por a ' + doc1.innerText)