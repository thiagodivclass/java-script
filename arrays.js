// let num =[1,2,3,`Thiago`,5]


// num
// console.log(num)
// num.push(100)
// console.log(num)
// num.sort()
// console.log(num)
// num.sort()

// console.log(num)
// let num1 =[1,2,3,`Thiago`,5]
// num.length
// num[5]=6
// console.log(num)
// num[6]='Thiago'
// console.log(num)
// console.log(` Seu vetor tem ${num1.length} posições`)

// for(let pos in num1){
//     console.log(`A posição ${pos} tem o valor ${num1[pos]}`)
// }

// let onde = num1.indexOf(1)

// if(onde == -1){
//     console.log('Valor não localizado.')
// }
// else{
//     console.log(`O valor está na posição ${onde}`)
// }

// function parimp(n){
//     if (n%2==0){
//         return 'par'
//     }
//     else{
//         return 'impar'
//     }
// }
// // let restul = parimp(3)

// console.log(parimp(8))
// // console.log(restul)


// function soma(n1=0, n2=0){
//     return n1+n2
// }
// console.log(soma(2,32))

// let soc = function(x){
//     return x*3
// }
// console.log(soc(3))

// function fatorial(n){
//     let fat=1
//     for(let a = n; a > 1; a--){
//         fat*=a
//     }
//     return fat
// }
// console.log(fatorial(6))

// function fatorial(n){
//     if(n==1){
//         return 1
//     }
//     else{
//         return n*fatorial(n-1)
//     }
// }
// console.log(fatorial(6))



let amigo = {nome:'Thiago', sexo:'M', peso:84, engordar(p=0){
    console.log('Thiago eongordou')
    this.peso += p
} 
}
amigo.engordar(2)
console.log(`${amigo.nome} de sexo ${amigo.sexo} pesa ${amigo.peso}kg`)