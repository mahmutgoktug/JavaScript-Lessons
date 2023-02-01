// Destructuring => şeklini bozma
// Spread => Dağılma, yayma
// Rest => Kalanın tamamı

/*
const numbers = [10, 12, 14]

const [number1, number2] = numbers

 
console.log(numbers[0]) // 10
console.log(number1) // 10

console.log(numbers[1]) // 12
console.log(number2) // 12

console.log(numbers[2]) 

const stack = [
    ['HTML', 'CSS', ['JAVASCRIPT', 'REACT', 'SVELTE']],
    ['PHP', 'MYSQL', 'NODEJS']
]

// const [frontend, backend] = stack
const [[firstLanguage, secondLanguage, [firstThirdLanguage]], backend] = stack

console.log(firstThirdLanguage);
*/

const names = ['goktug', 'halil', 'ejder', 'sahure', 'tugba', 'mahmut'] 

const [myName, myFatherName] = names