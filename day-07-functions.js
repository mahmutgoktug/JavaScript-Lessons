function multiply(num1, num2) {
    return num1 * num2
}

function sumArrayValues(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

let dizi = [2, 4, 6, 8, 10, 20]

console.log('Toplam', sumArrayValues(dizi))

function topla() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log('Toplam', topla(2, 5, 7, 9, 10))

const sayHello = function(name) {
    return `Hello ${name}`
}

console.log(sayHello('Goktug'));

(function() {
    console.log('he yo!')
})()

let sayHello2 = (function(name) {
    console.log(`Hello ${name}`)
})('Goktug')

// normal fonksiyon (regular)
function hello(name, surname) {
    // arguments
    return `Hello ${name}`
}

// ok fonksiyonu (arrow function)
const hello2 = (name, surname) => `Hello ${name} ${surname}`

const toplama = (num1, num2, ... numbers) => {
    console.log(num1)
    console.log(numbers)
}

toplama(2, 5, 7, 8, 10)

console.log(hello2('Mahmut', 'Celikkaya'))