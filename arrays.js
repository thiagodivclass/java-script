// let num =[1,2,3,`Thiago`,5]


// num
// console.log(num)
// num.push(100)
// console.log(num)
// num.sort()
// console.log(num)
// num.sort()

// console.log(num)
let num1 =[1,2,3,`Thiago`,5]
// num.length
// num[5]=6
// console.log(num)
// num[6]='Thiago'
// console.log(num)
console.log(` Seu vetor tem ${num1.length} posições`)

// for(let pos in num1){
//     console.log(`A posição ${pos} tem o valor ${num1[pos]}`)
// }

let onde = num1.indexOf(1)

if(onde == -1){
    console.log('Valor não localizado.')
}
else{
    console.log(`O valor está na posição ${onde}`)
}
