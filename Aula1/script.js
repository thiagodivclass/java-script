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

// var n1 = Number(window.prompt('Qual é o seu salário?'))
 
// document.write(`O seu salário em real é ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)


var num1 = Number(window.prompt('Digite um número'))
var num2 = Number(window.prompt('Digite outro número'))
var soma = num1 + num2
// window.alert(`O valor total de ${num1} mais ${num2} é de ${soma}`)
// document.write(`A soma de ${num1} e ${num2} é ${soma}`)
document.write(`A soma dos valores em real é ${soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)


